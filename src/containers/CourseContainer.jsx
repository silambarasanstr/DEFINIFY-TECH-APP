import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../data/courseData";
import CourseTopicCard from "../components/CourseTopicCard";
import { BookOpen, ChevronRight, Calendar, Clock, List } from "lucide-react";
import { Loader2 } from "lucide-react";

const formatCourseName = (id) => {
  if (!id) return "";

  return id
    .replace("js", " JS")
    .replace("_", "/")
    .replace(/and/g, " ")
    .replace(" _", "")
    .replace(/^\w/, (c) => c.toUpperCase());
};

const CourseContainer = () => {
  const { courseId } = useParams();

  const [activeTopic, setActiveTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const topics = useMemo(() => {
    // const data = courseId ? courseData?.[courseId] : null;
    const data = courseData[courseId];
    // return Array.isArray(data) ? data : [];
    return data;
  }, [courseId]);

  // const otherTopics = () => {
  //   const Otherdata = communicationData;
  //   return Otherdata;
  // };

  const activeIndex =
    activeTopic?.courseId === courseId ? activeTopic.index : null;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [courseId]);

  const handleClick = (index) => {
    setActiveTopic((prev) =>
      prev?.courseId === courseId && prev.index === index
        ? null
        : { courseId, index }
    );
  };

  if (!courseId) return null;

  const courseName = formatCourseName(courseId);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
        <Loader2 size={30} className="animate-spin text-indigo-600" />
        <p className="font-medium text-gray-500">Loading topics...</p>
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

            <h1 className="text-3xl font-bold">{courseName} Course </h1>
          </div>
        </div>
      </div>

      {/* Topics */}
      {topics.length > 0 ? (
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <CourseTopicCard
              key={topic.id ?? index}
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
