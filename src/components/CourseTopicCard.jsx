import React from "react";
import { ChevronDown } from "lucide-react";

const CourseTopicCard = ({ index, topic, onClick, isOpen }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow">
      {/* Header */}
      <button
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-between bg-gray-50 px-3 py-2 text-left transition hover:bg-gray-100"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
            {index}
          </div>

          <h3 className="text-[13px] font-semibold text-gray-800">
            {topic.title}
          </h3>
        </div>

        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Body */}
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 border-t border-gray-100 px-3 py-3">
            {/* Definition */}
            {topic.definition && (
              <div>
                <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Definition
                </h4>

                {Array.isArray(topic.definition) ? (
                  <div className="space-y-1.5">
                    {topic.definition.map((desc, i) => (
                      <div
                        key={i}
                        className="flex gap-2 rounded-md bg-gray-50"
                      >
                        <span className="text-xs">✅</span>
                        <p className="text-xs leading-5 text-gray-700">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-md bg-gray-50 px-2 py-2">
                    <p className="text-xs leading-5 text-gray-700">
                      ✅ {topic.definition}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Types */}
            {topic.types?.length > 0 && (
              <div>
                <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  {topic.typesTitle || "Types"}
                </h4>

                <div className="grid gap-2 md:grid-cols-2">
                  {topic.types.map((type, i) => (
                    <div
                      key={i}
                      className="rounded-md border border-gray-200 bg-gray-50 p-2.5 transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      <h5 className="text-[13px] font-semibold text-gray-800">
                        {type.name}
                      </h5>

                      <p className="mt-1 text-xs leading-5 text-gray-600">
                        {type.description}
                      </p>

                 
                    </div>
                  ))}

             
                </div>
              </div>
            )}

            {/* Example */}
            {topic.example && (
              <div>
                <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </h4 >

                <pre className="overflow-x-auto rounded-md bg-slate-900 p-3 text-xs leading-5 text-green-400">
                  <code>{topic.example}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTopicCard;