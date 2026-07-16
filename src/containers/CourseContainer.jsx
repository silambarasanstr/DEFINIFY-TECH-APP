import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courseData as initialData } from "../data/courseData";
import CourseTopicCard from "../components/CourseTopicCard";
import { BookOpen, ChevronRight, Calendar, Clock, List } from "lucide-react";

const CourseContainer = () => {
  const { courseId } = useParams();

  const [topics, setTopics] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(new Date());

  if (!courseId) return null;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const data = initialData?.[courseId];

      if (Array.isArray(data)) {
        setTopics(data);
        setActiveIndex(data.length ? 0 : null);
      } else {
        setTopics([]);
        setActiveIndex(null);
      }

      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [courseId]);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const formatCourseName = (id) => {
    if (!id) return "";

    return id
      .replace("js", " JS")
      .replace("node", "Node")
      .replace("express", "Express")
      .replace("_", "/")
      .replace("and", " ")
      .replace("and", " ")
      .replace(" _", "")
      .replace(/^\w/, (c) => c.toUpperCase())
      .replace("Node express", "Node Express");
  };

  const courseName = formatCourseName(courseId);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-20 rounded-xl bg-gray-200 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-3xl bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white p-7 shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-100 text-sm mb-3">
              <BookOpen size={18} />
              Courses
              <ChevronRight size={16} />
              <span className="font-medium text-white">{courseName}</span>
            </div>

            <h1 className="text-3xl font-bold">{courseName} Course</h1>

            <p className="text-blue-100 mt-2">
              Learn concepts step by step with clear explanations and examples.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="bg-white/15 backdrop-blur-md rounded-xl px-4 py-3 min-w-42.5">
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Calendar size={16} />
                Today
              </div>

              <div className="font-semibold mt-1">{time.toDateString()}</div>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-xl px-4 py-3 min-w-42.5">
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Clock size={16} />
                Current Time
              </div>

              <div className="font-semibold mt-1">
                {time.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Course Topics</h2>
        </div>

        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-semibold">
          <List size={18} />
          {topics.length} Topics
        </div>
      </div>

      {/* Topics */}

      {topics.length ? (
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <CourseTopicCard
              key={index}
              index={index + 1}
              topic={topic}
              isOpen={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto flex items-center justify-center mb-4">
            <List size={30} className="text-gray-500" />
          </div>

          <h3 className="text-xl font-semibold text-gray-700">
            No Topics Available
          </h3>
        </div>
      )}
    </div>
  );
};

export default CourseContainer;
