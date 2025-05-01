import { CommentFormProps } from "@/types/comment";
import React, { useState } from "react";

export default function CommentForm({ onSubmit }: CommentFormProps) {
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
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-black border-b border-b-amber-50">
        댓글 작성
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="작성자"
          className="p-6 text-xl border rounded"
          required
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="내용"
          className="p-10 text-xl border rounded"
          required
        />
        <button type="submit" className="bg-green-500 text-white py-2 rounded">
          댓글 등록
        </button>
      </form>
    </div>
  );
}
