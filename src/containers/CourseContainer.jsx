import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courseData as initialData } from "../data/courseData";
import CourseTopicCard from "../components/CourseTopicCard";
import TopicForm from "../components/TopicForm";
import { Plus, List } from "lucide-react";

const CourseContainer = () => {
  const { courseId } = useParams();
  const [topics, setTopics] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingTopic, setEditingTopic] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (initialData[courseId]) {
      setTopics(initialData[courseId]);

      // ✅ ADD THIS LINE (safe check)
      setActiveIndex(initialData[courseId].length ? 0 : null);
    } else {
      setTopics([]);

      // ✅ ADD THIS ALSO
      setActiveIndex(null);
    }

    setIsAdding(false);
    setEditingTopic(null);
  }, [courseId]);

  const handleAddTopic = (newTopicData) => {
    const newTopic = {
      id: topics.length > 0 ? Math.max(...topics.map((t) => t.id)) + 1 : 1,
      ...newTopicData,
    };

    setTopics((prev) => [...prev, newTopic]);
    setIsAdding(false);
  };

  const handleEditTopic = (updatedTopicData) => {
    setTopics((prev) =>
      prev.map((t) =>
        t.id === editingTopic.id ? { ...t, ...updatedTopicData } : t,
      ),
    );
    setEditingTopic(null);
  };

  const handleDeleteTopic = (id) => {
    if (window.confirm("Are you sure you want to delete this topic?")) {
      setTopics((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const formatCourseName = (id) => {
    if (!id) return "";
    return id
      .replace("js", " JS")
      .replace("node", "Node")
      .replace("git", "Git")
      .replace(/^\w/, (c) => c.toUpperCase())
      .replace("Nodeexpress", "Node Express");
  };

  const courseName = formatCourseName(courseId);

  return (
    <div className="space-y-5 ">
      <div>Today : {new Date().toDateString()}</div>

      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6  ">
        <div>
          <nav className="text-sm text-slate-500  flex items-center gap-2">
            <span>Courses</span>
            <span>/</span>
            <span className="text-primary-500 font-medium">{courseName}</span>
          </nav>

          <h2 className="text-3xl font-extrabold tracking-tight">
            {courseName} <span className="text-primary-500">Definitions</span>
          </h2>
        </div>

        {!isAdding && !editingTopic && (
          <button
            onClick={() => setIsAdding(true)}
            className="text-sm flex items-center gap-2 bg-primary-600 cursor-pointer hover:bg-primary-500 text-white font-bold py-3 px-3 rounded"
          >
            <Plus className="w-3 h-3" />
            Add New Topic
          </button>
        )}
      </header>

      {(isAdding || editingTopic) && (
        <div className="max-w-2xl mx-auto">
          <TopicForm
            onSubmit={editingTopic ? handleEditTopic : handleAddTopic}
            initialData={editingTopic}
            onCancel={() => {
              setIsAdding(false);
              setEditingTopic(null);
            }}
          />
        </div>
      )}

      {!isAdding && !editingTopic && (
        <>
          {topics.length > 0 ? (
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <CourseTopicCard
                  key={topic.id}
                  index={index + 1}
                  topic={topic}
                  onEdit={setEditingTopic}
                  onDelete={handleDeleteTopic}
                  onClick={() => handleClick(index)} // ✅ FIX
                  isOpen={activeIndex === index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center p-10 border-dashed border-2">
              <List className="mx-auto mb-4" />
              <p>No topics found</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CourseContainer;
