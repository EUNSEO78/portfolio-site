import { CommentFormProps } from "@/types/comment";
import React, { useState } from "react";

const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [formData, setFormData] = useState({ author: "", content: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ author: "", content: "" });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold border-b pb-1 border-amber-100">
        댓글 작성
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="작성자"
          className="p-3 text-base border rounded"
          required
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="내용"
          rows={5}
          className="p-3 text-base border"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded font-semibold hover:bg-green-600 transition"
        >
          댓글 등록
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
