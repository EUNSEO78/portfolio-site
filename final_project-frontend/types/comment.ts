import { Guestbook } from "./guestbook";

export interface Comment {
  id: number;
  author: string;
  content: string;
  likes: number;
  createdAt: string;
  guestbookId: number;
}

export interface GuestbookDetailProps {
  guestbook: Guestbook;
}

export interface CommentDeleteButtonProps {
  commentId: number;
  onDeleteSuccess: () => void;
}

export interface CommentFormProps {
  onSubmit: (formData: { author: string; content: string }) => void;
}

export interface CommentListProps {
  comments: Comment[];
  onDelete: (commentId: number) => void;
  onLikeUpdate: (commentId: number, newLikes: number) => void;
}
