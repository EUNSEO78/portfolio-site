"use client";

import GuestbookCard from "@/components/guestbook/GuestbookCard";
import GuestbookHeader from "@/components/guestbook/GuestbookHeader";
import { Guestbook } from "@/types/guestbook";
import { getGuestbooks } from "@/utils/api";
import { useEffect, useState } from "react";

const GuestbookPage = () => {
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);

  useEffect(() => {
    getGuestbooks().then((guestbooks) => setGuestbooks(guestbooks));
  }, []);

  return (
    <main className="w-screen h-fit bg-[#1d2025]/80">
      <div className="w-full max-w-[80%] mx-auto pt-36">
        <GuestbookHeader />
        <div className="w-full max-w-[80%] mx-auto grid grid-cols-3 gap-6">
          {guestbooks.map((guestbook) => (
            <GuestbookCard key={guestbook.id} guestbook={guestbook} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default GuestbookPage;
