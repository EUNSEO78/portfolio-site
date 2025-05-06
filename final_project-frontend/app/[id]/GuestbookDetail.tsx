"use client";

import CommentSection from "@/components/comments/CommentSection";
import DeleteButton from "@/components/guestbooks/DeleteButtom";
import GuestbookHeader from "@/components/guestbooks/GuestbookHeader";
import { GuestbookDetailProps } from "@/types/comment";

const GuestbookDetail = ({ guestbook }: GuestbookDetailProps) => {
  return (
    <div className="min-h-screen bg-[#1d2025] text-white">
      <div className="w-full max-w-[90%] sm:max-w-[80%] mx-auto pt-36">
        <GuestbookHeader />

        <section className="w-full max-w-3xl mx-auto bg-white text-black rounded-2xl px-6 py-8 sm:px-10 sm:py-12 shadow-xl flex flex-col gap-8">
          <div className="flex gap-6 text-[#2dcf6c] font-bold text-sm sm:text-base">
            <span className="flex items-center gap-1">
              ❤️ {guestbook.likes}
            </span>
            <span className="flex items-center gap-1">
              👀 {guestbook.views}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <b className="border-b-2 border-b-[#2dcf6c] text-sm sm:text-base">
              NAME
            </b>
            <h3 className="text-base sm:text-lg">{guestbook.author}</h3>
          </div>

          <div className="flex flex-col gap-2">
            <b className="border-b-2 border-b-[#2dcf6c] text-sm sm:text-base">
              CONTENTS
            </b>
            <p className="text-base sm:text-lg leading-relaxed">
              {guestbook.content}
            </p>
          </div>

          <div className="flex justify-end">
            <DeleteButton guestbookId={guestbook.id} />
          </div>
        </section>

        <CommentSection guestbookId={guestbook.id} />
      </div>
    </div>
  );
};

export default GuestbookDetail;
