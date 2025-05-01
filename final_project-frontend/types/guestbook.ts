export interface Guestbook {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  comments?: Comment[];
  likes: number;
  views: number;
}

export interface GuestbookCardProps {
  guestbook: Guestbook;
}
