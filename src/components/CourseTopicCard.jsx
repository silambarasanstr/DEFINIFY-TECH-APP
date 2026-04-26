import React from "react";
import { Edit2, Trash2, ChevronDown } from "lucide-react";

const CourseTopicCard = ({
  index,
  topic,
  onEdit,
  onDelete,
  onClick,
  isOpen,
}) => {
  const descriptions = Array.isArray(topic.definition)
    ? topic.definition.map((desc, i) => (
        <p key={i} className="text-sm text-gray-600 leading-relaxed">
          • {desc}
        </p>
      ))
    : [
        <p key="single" className="text-sm text-gray-600">
          {topic.definition}
        </p>,
      ];

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
        className="flex justify-between items-center w-full px-3 py-2 cursor-pointer"
      >
        <h3 className="font-bold text-xs">
          {index}. {topic.title}
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
        <div className="w-full px-3 py-2 space-y-2">
          {/* Definition */}
          <div className="space-y-1">{descriptions}</div>

          {/* Types Title */}

          {topic.typesTitle && (
            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
              {topic.typesTitle}
            </div>
          )}

          {/* Types */}
          {topic.types?.length > 0 && (
            <div className="grid gap-2 mb-3">{typesUI}</div>
          )}

          {/* ACTIONS */}
          <div className="flex gap-2 pt-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(topic);
              }}
              className="flex items-center gap-1 px-2 py-1 text-xs rounded border border-blue-200 text-blue-600 hover:bg-blue-50 transition"
            >
              <Edit2 className="w-3.5 h-3.5" />
              Edit
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(topic.id);
              }}
              className="flex items-center gap-1 px-2 py-1 text-xs rounded border border-red-200 text-red-600 hover:bg-red-50 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseTopicCard;
