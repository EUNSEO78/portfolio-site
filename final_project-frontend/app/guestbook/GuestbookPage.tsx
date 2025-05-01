"use client";

import GuestbookCard from "@/components/guestbooks/GuestbookCard";
import GuestbookHeader from "@/components/guestbooks/GuestbookHeader";
import { Guestbook } from "@/types/guestbook";
import { useEffect, useState } from "react";
import { getGuestbooks } from "@/utils/api";

const GuestbookPage = () => {
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);

  useEffect(() => {
    getGuestbooks().then(setGuestbooks);
  }, []);

  return (
    <main className="w-screen min-h-screen bg-[#1d2025]/80">
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
