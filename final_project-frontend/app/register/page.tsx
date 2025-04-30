"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createGuestbook } from "@/utils/api";
import GuestbookHeader from "@/components/guestbook/GuestbookHeader";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    author: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createGuestbook(formData);
      if (response.status === 201) {
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
    <main className="h-screen bg-[#1d2025] text-white rounded-lg shadow-md">
      <div className="w-full max-w-[80%] mx-auto pt-36">
        <GuestbookHeader />
        <div>
          <div className="w-fit text-[20px] rounded-2xl font-bold mb-12 p-3 bg-[#2dcf6c]">
            방명록 작성
          </div>
          <form onSubmit={handleSubmit} className="mx-auto">
            <div className="mb-6">
              <label
                htmlFor="author"
                className="block text-sm font-medium mb-2"
              >
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
              <label
                htmlFor="content"
                className="block text-sm font-medium mb-2"
              >
                내용
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
        </div>
      </div>
    </main>
  );
}
