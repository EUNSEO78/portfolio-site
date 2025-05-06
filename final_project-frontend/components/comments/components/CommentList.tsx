// components/comments/components/CommentList.tsx

import { CommentListProps } from "@/types/comment";
import CommentDeleteButton from "./CommentDeleteButton";
import { likeComment } from "@/utils/api";

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
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 border-b pb-1 border-amber-100">
        댓글 목록
      </h2>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="mb-5 p-4 bg-white text-black rounded-lg shadow-md flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold">
              <span className="text-green-500">{comment.author}</span> 님의 댓글
            </div>
            <button
              onClick={() => handleLike(comment.id)}
              className="text-sm hover:font-bold hover:text-green-500 transition"
            >
              ❤️ {comment.likes}
            </button>
          </div>
          <div className="text-base break-words">{comment.content}</div>
          <div className="text-xs text-gray-500">
            {new Date(comment.createdAt).toLocaleString()}
          </div>
          <div className="mt-1">
            <CommentDeleteButton
              commentId={comment.id}
              onDeleteSuccess={() => onDelete(comment.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
