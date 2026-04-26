import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";

const TopicForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    definition: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.definition) return;
    onSubmit(formData);
    setFormData({ title: "", definition: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-8 rounded-3xl border border-slate-800  space-y-6 w-2xl"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
          <Plus className="w-5 h-5 text-primary-500" />
        </div>
        <h2 className="text-2xl font-bold ">
          {initialData ? "Edit Topic" : "Add New Topic"}
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Topic Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. JSX, React Router"
            className="w-full  border border-slate-800 rounded-xl px-4 py-3  placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Definition
          </label>
          <textarea
            name="definition"
            value={formData.definition}
            onChange={handleChange}
            placeholder="What is this topic about?"
            className="w-full  border border-slate-800 rounded-xl px-4 py-3  placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all h-32 resize-none"
            required
          />
        </div>
      </div>

      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          className="flex-1 bg-primary-600  text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary-500/20 active:scale-95 cursor-pointer"
        >
          {initialData ? "Update Topic" : "Add Topic"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 border border-slate-700   rounded-xl transition-all cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TopicForm;
