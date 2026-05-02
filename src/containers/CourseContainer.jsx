import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courseData as initialData } from "../data/courseData";
import CourseTopicCard from "../components/CourseTopicCard";
import { List } from "lucide-react";

const CourseContainer = () => {
  const { courseId } = useParams();

  const [topics, setTopics] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (!courseId) return null;

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      const data = initialData[courseId];

      if (data) {
        setTopics(data);
        setActiveIndex(data.length ? 0 : null);
      } else {
        setTopics([]);
        setActiveIndex(null);
      }

      setIsLoading(false);
    }, 500); // 0.5 sec delay
  }, [courseId]);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // ✅ Better mapping approach
  // const formatCourseName = (id) => {
  //   const map = {
  //     html: "HTML",
  //     css: "CSS",
  //     js: "JavaScript",
  //     react: "React JS",
  //     nextjs: "Next JS",
  //     typescript: "TypeScript",
  //     node_and_express: "Node & Express",
  //     mongodb: "MongoDB",
  //     git: "Git & GitHub",
  //     cicd: "CI/CD",
  //     docker: "Docker",
  //   };

  //   return map[id] || id;
  // };

  const formatCourseName = (id) => {
    if (!id) return "";
    return id
      .replace("js", " JS")
      .replace("node", "Node")
      .replace("git", "Git")
      .replace(/^\w/, (c) => c.toUpperCase())
      .replace("Node express", "Node Express");
  };

  const courseName = formatCourseName(courseId);

  if (isLoading) {
    return <div className="text-center p-10">⏳ Loading topics...</div>;
  }

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <div className="text-gray-600 ">
          📅 Today: {new Date().toDateString()}
        </div>
        <div className="text-blue-500  font-bold">
          ⏰ Time : {new Date().toLocaleTimeString()}
        </div>
      </div>

      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <nav className="text-sm text-slate-500 flex items-center gap-2">
            <span>Courses</span>
            <span>/</span>
            <span className="text-primary-500 font-medium">{courseName}</span>
          </nav>

          <h2 className="text-3xl font-extrabold tracking-tight">
            {courseName} <span className="text-primary-500">Definitions</span>
          </h2>
        </div>
      </header>

      {topics.length > 0 ? (
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <CourseTopicCard
              key={index} // ✅ FIX (no id in data)
              index={index + 1}
              topic={topic}
              onClick={() => handleClick(index)}
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
    </div>
  );
};

export default CourseContainer;
