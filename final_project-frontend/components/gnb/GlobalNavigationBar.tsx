"use client";

import { useRouter } from "next/navigation";
import ClickButton from "../common/ClickButton";

const GlobalNavigationBar = () => {
  const router = useRouter();

  const goToGuestBook = () => {
    router.push("/guestbook");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="fixed bottom-8 sm:bottom-12 p-4 bg-[rgba(0,0,0,0.5)] text-white flex flex-wrap justify-center gap-3 rounded-2xl z-30 max-w-[90%] sm:max-w-fit">
        <ClickButton
          value="About Me"
          github="#about-me-page"
          borderColor="white"
          hoverBgColor="white"
          hoverTextColor="hover:text-black"
        />

        <ClickButton
          value="Main Project"
          github="#main-projects-page"
          borderColor="white"
          hoverBgColor="white"
          hoverTextColor="hover:text-black"
        />

        <ClickButton
          value="Side Project"
          github="#side-projects-page"
          borderColor="white"
          hoverBgColor="white"
          hoverTextColor="hover:text-black"
        />

        <ClickButton
          value="Tech Stack"
          github="#tech-stacks-page"
          borderColor="white"
          hoverBgColor="white"
          hoverTextColor="hover:text-black"
        />

        <ClickButton
          value="Go Top"
          github="#hero-section"
          borderColor="green"
          hoverBgColor="green"
        />

        <ClickButton
          value="GuestBook"
          borderColor="green"
          hoverBgColor="green"
          onClick={goToGuestBook}
        />
      </div>
    </div>
  );
};

export default GlobalNavigationBar;
