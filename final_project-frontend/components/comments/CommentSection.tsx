// components/comments/CommentSection.tsx

"use client";

import { useEffect, useState } from "react";
import { getComments, createComment } from "@/utils/api";
import { Comment } from "@/types/comment";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

const CommentSection = ({ guestbookId }: { guestbookId: number }) => {
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
        loadComments();
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
    <section className="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
      <div className="w-full lg:w-1/2">
        <CommentForm onSubmit={handleCreateComment} />
      </div>
      <div className="w-full lg:w-1/2">
        <CommentList
          comments={comments}
          onDelete={handleDeleteComment}
          onLikeUpdate={handleLikeUpdate}
        />
      </div>
    </section>
  );
};

export default CommentSection;
