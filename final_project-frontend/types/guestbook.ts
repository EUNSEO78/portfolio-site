export type Guestbook = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  comments?: Comment[];
  likes: number;
  views: number;
};

export type Comment = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  guestbookId: number;
};
