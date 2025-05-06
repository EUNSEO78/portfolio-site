"use client";
import { MouseEvent } from "react";
import { removeGuestbook } from "@/utils/api";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  guestbookId: number;
}

export default function DeleteButton({ guestbookId }: DeleteButtonProps) {
  const router = useRouter();
  const handleDelete = async (e: MouseEvent) => {
    e.preventDefault();

    const confirmed = window.confirm("정말로 이 글을 삭제하시겠습니까?");
    if (!confirmed) return;

    try {
      await removeGuestbook(guestbookId);
      router.push("/guestbook");
      alert("글이 삭제되었습니다.");
    } catch (err) {
      console.error("삭제 실패", err);
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <button
      className="px-5 py-2 bg-red-500 hover:bg-red-400 text-white font-bold rounded-xl transition-colors duration-200"
      onClick={handleDelete}
    >
      삭제
    </button>
  );
}
