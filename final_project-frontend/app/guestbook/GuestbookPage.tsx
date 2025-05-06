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
    <main className="w-full min-h-screen bg-[#1d2025] pt-36 px-4">
      <div className="max-w-6xl mx-auto">
        <GuestbookHeader />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {guestbooks.map((guestbook) => (
            <GuestbookCard key={guestbook.id} guestbook={guestbook} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default GuestbookPage;
