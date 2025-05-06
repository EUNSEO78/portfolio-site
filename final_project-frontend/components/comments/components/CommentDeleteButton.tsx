"use client";
import { MouseEvent } from "react";
import { removeComment } from "@/utils/api";
import { CommentDeleteButtonProps } from "@/types/comment";

const CommentDeleteButton = ({
  commentId,
  onDeleteSuccess,
}: CommentDeleteButtonProps) => {
  const handleDelete = async (e: MouseEvent) => {
    e.preventDefault();

    const confirmed = window.confirm("정말로 이 글을 삭제하시겠습니까?");
    if (!confirmed) return;

    try {
      await removeComment(commentId);
      alert("글이 삭제되었습니다.");
      onDeleteSuccess();
    } catch (err) {
      console.error("삭제 실패", err);
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <button
      className="px-3 py-1 text-xs font-bold text-white bg-green-500 rounded hover:bg-green-600 transition"
      onClick={handleDelete}
    >
      삭제
    </button>
  );
};

export default CommentDeleteButton;
