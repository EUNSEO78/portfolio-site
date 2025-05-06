"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createGuestbook } from "@/utils/api";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    author: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createGuestbook(formData);
      if (response.statusCode === 201) {
        router.push("/guestbook");
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        alert("❌ 입력란을 다시 확인하세요");
      } else {
        alert("❌ 알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <div className="mb-6">
        <label htmlFor="author" className="block text-sm font-medium mb-2">
          작성자
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="이름을 입력해주세요"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="content" className="block text-sm font-medium mb-2">
          내용
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base h-50 sm:h-42 md:h-38 lg:h-34"
          placeholder="방명록 내용을 입력해주세요"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.push("/guestbook")}
          className="px-6 py-2 border border-gray-300 text-white rounded-md hover:bg-gray-50 hover:text-black"
        >
          취소
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#2dcf6c] text-white rounded-md hover:bg-[#2dcf6c]/50"
        >
          등록
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
