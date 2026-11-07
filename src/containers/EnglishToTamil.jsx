import { communicationData } from "../data/courseData";

const EnglishToTamil = () => {
  return (
    <div className="space-y-3">
      {communicationData.EnglishToTamil.length > 0 ? (
        communicationData.EnglishToTamil.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700"
          >
            <span className="flex items-center justify-center bg-gray-200 text-gray-700 font-bold text-xs h-6 w-6 rounded-full shrink-0">
              {index + 1}
            </span>

            <div className="flex flex-col gap-1 flex-1">
              <div className="font-semibold text-gray-900">{item.tamil}</div>

              <div className="text-gray-600 font-semibold">{item.english}</div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-500 text-center py-4">No data available</div>
      )}
    </div>
  );
};

export default EnglishToTamil;
