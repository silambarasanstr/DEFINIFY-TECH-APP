import { communicationData } from "../data/courseData";

const EnglishToTamil = () => {
  return (
    <div className="flex flex-row  gap-3">
      <div className="space-y-3">
        {communicationData?.EnglishToTamil?.length > 0 ? (
          <>
            {communicationData.EnglishToTamil.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700"
              >
                <span className="flex items-center justify-center bg-gray-200 text-gray-700 font-bold text-xs h-6 w-6 rounded-full shrink-0">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="font-semibold text-gray-900">
                    {item.tamil}
                  </div>
                  <div className="text-gray-600">{item.english}</div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-gray-500 text-center py-4">
            No data available
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 bg-gray-100 p-5 border border-gray-300 rounded-lg">
        <div>Add New Items</div>
        <form className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Enter Tamil text"
              className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter English text"
              className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add New Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnglishToTamil;
