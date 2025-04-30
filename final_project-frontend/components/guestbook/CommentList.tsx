import { Comment } from "@/types/guestbook";
import CommentDeleteButton from "./CommentDeleteButton";
import { useState } from "react";
import { likeComment } from "@/utils/api";

interface CommentListProps {
  comments: Comment[];
  onDelete: (commentId: number) => void;
  onLikeUpdate: (commentId: number, newLikes: number) => void;
}

export default function CommentList({
  comments,
  onDelete,
  onLikeUpdate,
}: CommentListProps) {
  const handleLike = async (commentId: number) => {
    const likedKey = `liked_comment_${commentId}`;
    if (localStorage.getItem(likedKey)) {
      alert("이미 좋아요를 누르셨습니다.");
      return;
    }

    try {
      const updated = await likeComment(commentId);
      onLikeUpdate(commentId, updated.likes);
      localStorage.setItem(likedKey, "true");
    } catch (err) {
      console.error("좋아요 실패", err);
    }
  };

  return (
    <div className="w-full mt-6">
      <h4 className="font-bold mb-2">댓글</h4>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="mb-4 border p-3 rounded flex flex-col gap-1.5"
        >
          <div className="text-[20px] font-extrabold flex justify-between items-center">
            <div>
              <span className="text-green-500 mr-2">{comment.author}</span>
              <span>님의 댓글</span>
            </div>
            <button
              onClick={() => handleLike(comment.id)}
              className="flex items-center space-x-1 hover:font-bold hover:text-[#2dcf6c]"
            >
              ❤️ {comment.likes}
            </button>
          </div>
          <div className="text-xl">{comment.content}</div>
          <div className="text-xs text-gray-500">
            {new Date(comment.createdAt).toLocaleString()}
          </div>
          <CommentDeleteButton
            commentId={comment.id}
            onDeleteSuccess={() => onDelete(comment.id)}
          />
        </div>
      ))}
    </div>
  );
}
