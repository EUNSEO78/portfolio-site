"use client";

import { useEffect, useState } from "react";
import { getComments, createComment } from "@/utils/api";
import { Comment } from "@/types/comment";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

export default function CommentSection({
  guestbookId,
}: {
  guestbookId: number;
}) {
  const [comments, setComments] = useState<Comment[]>([]);

  const loadComments = async () => {
    try {
      const data = await getComments(guestbookId);
      setComments(data);
    } catch (error) {
      console.error("댓글 로딩 실패", error);
    }
  };

  useEffect(() => {
    loadComments();
  }, [guestbookId]);

  const handleCreateComment = async (formData: {
    author: string;
    content: string;
  }) => {
    try {
      const response = await createComment({ guestbookId, ...formData });
      if (response.statusCode === 201) {
        loadComments(); // ✅ 새로고침
      }
    } catch (error) {
      alert("댓글 작성 중 오류 발생");
    }
  };

  const handleDeleteComment = (commentId: number) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  const handleLikeUpdate = (commentId: number, newLikes: number) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId ? { ...comment, likes: newLikes } : comment
      )
    );
  };

  return (
    <div className="py-10 flex gap-12">
      <CommentForm onSubmit={handleCreateComment} />
      <CommentList
        comments={comments}
        onDelete={handleDeleteComment}
        onLikeUpdate={handleLikeUpdate}
      />
    </div>
  );
}
