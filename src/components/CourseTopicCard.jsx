import React from "react";
import { ChevronDown } from "lucide-react";

const CourseTopicCard = ({ index, topic, onClick, isOpen }) => {
  const descriptions = Array.isArray(topic.definition) ? (
    topic.definition.map((desc, i) => (
      <p key={i} className="text-sm text-gray-600 leading-relaxed">
        ✅ {desc}
      </p>
    ))
  ) : topic.definition ? (
    <p className="text-sm text-gray-600">✅ {topic.definition}</p>
  ) : null;

  const typesUI = topic.types?.map((type, i) => (
    <div
      key={i}
      className="p-3 rounded-xl border bg-gray-50 hover:bg-gray-100 transition"
    >
      <h4 className="font-semibold text-sm text-gray-800">{type.name}</h4>
      <p className="text-xs text-gray-600 mt-1">{type.description}</p>
    </div>
  ));

  return (
    <div className="w-full border border-gray-300 shadow rounded">
      {/* HEADER */}
      <div
        onClick={onClick}
        className="flex justify-between items-center w-full px-3 py-2 cursor-pointer bg-gray-100 rounded"
      >
        <h3 className="font-bold text-xs flex gap-3 items-center">
          <span className="border border-gray-300 bg-gray-100  rounded-full flex justify-center items-center  w-6 h-6  p-1">
            {index}
          </span>
          {topic.title}
        </h3>

        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* CONTENT */}
      {isOpen && (
        <div className="px-4 py-3 space-y-3">
          {/* Definition */}
          {descriptions && <div className="space-y-1">{descriptions}</div>}

          {/* Types Title */}
          {topic.typesTitle && (
            <div className="text-xs font-semibold text-gray-500 uppercase">
              {topic.typesTitle}
            </div>
          )}

          <pre className="text-sm text-gray-600 font-semibold">{topic.example}</pre>
        </div>
      )}
    </div>
  );
};

export default CourseTopicCard;
