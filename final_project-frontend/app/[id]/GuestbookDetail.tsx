"use client";

import CommentSection from "@/components/comments/CommentSection";
import DeleteButton from "@/components/guestbooks/DeleteButtom";
import GuestbookHeader from "@/components/guestbooks/GuestbookHeader";
import { GuestbookDetailProps } from "@/types/comment";

const GuestbookDetail = ({ guestbook }: GuestbookDetailProps) => {
  return (
    <div className="min-h-screen bg-[#1d2025] text-white rounded-lg shadow-md">
      <div className="w-full max-w-[80%] mx-auto pt-36">
        <GuestbookHeader />
        <div className="w-[500px] mx-auto p-16  bg-white text-black rounded-2xl flex flex-col gap-13">
          <div className="flex gap-2 text-[#2dcf6c] font-black">
            <span>❤️{guestbook.likes}</span>
            <span>👀{guestbook.views}</span>
          </div>
          <div className="flex flex-col gap-3">
            <b className="border-b-2 border-b-[#2dcf6c]">NAME</b>
            <h3>{guestbook.author}</h3>
          </div>
          <div className="flex flex-col gap-3">
            <b className="border-b-2 border-b-[#2dcf6c]">CONTENTS</b>
            <p>{guestbook.content}</p>
          </div>
          <DeleteButton guestbookId={guestbook.id} />
        </div>
        <CommentSection guestbookId={guestbook.id} />
      </div>
    </div>
  );
};

export default GuestbookDetail;
