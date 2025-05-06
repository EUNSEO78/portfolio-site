import Link from "next/link";
import React from "react";

const GuestbookHeader = () => {
  return (
    <header className="text-white mb-10 pb-6 border-b border-white/20 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-center sm:text-left">
        방명록 📒
      </h1>

      <nav className="flex flex-col sm:flex-row sm:flex-wrap gap-3 items-center sm:items-end justify-center sm:justify-end">
        <Link
          href="/"
          className="min-w-[120px] text-sm sm:text-base px-5 py-2 rounded-xl bg-[#2c2f36] hover:bg-[#2dcf6c]/20 border border-[#2dcf6c] text-white transition-all duration-200 text-center"
        >
          Main Home
        </Link>
        <Link
          href="/guestbook"
          className="min-w-[120px] text-sm sm:text-base px-5 py-2 rounded-xl bg-[#2c2f36] hover:bg-[#2dcf6c]/20 border border-[#2dcf6c] text-white transition-all duration-200 text-center"
        >
          Guestbook Main
        </Link>
        <Link
          href="/register"
          className="min-w-[120px] text-sm sm:text-base px-5 py-2 rounded-xl bg-[#2dcf6c] hover:bg-[#2dcf6c]/70 text-black font-semibold transition-all duration-200 text-center"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default GuestbookHeader;
