import Link from "next/link";
import React from "react";

const GuestbookHeader = () => {
  return (
    <div className=" text-white font-bold mb-8 pb-7 border-b border-b-white/30 flex justify-between items-center">
      <h1 className="text-3xl">방명록</h1>
      <div className="flex gap-3">
        <Link
          href="/"
          className="text-2xl border border-[#2dcf6c] rounded-[2px] p-3 hover:bg-[#2dcf6c]/50"
        >
          MainHome
        </Link>
        <Link
          href="/guestbook"
          className="text-2xl border border-[#2dcf6c] rounded-[2px] p-3 hover:bg-[#2dcf6c]/50"
        >
          Main
        </Link>
        <Link
          href="/register"
          className="text-2xl bg-[#2dcf6c] rounded-[2px] p-3 hover:bg-[#2dcf6c]/50"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default GuestbookHeader;
