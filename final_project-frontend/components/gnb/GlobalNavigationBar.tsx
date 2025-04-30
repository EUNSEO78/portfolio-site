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
      <div className="fixed bottom-16 p-5 bg-[rgba(0,0,0,0.5)] text-white flex gap-3 rounded-2xl z-30">
        <a href="#about-me-page">
          <ClickButton
            value="About Me"
            borderColor="white"
            hoverBgColor="white"
            hoverTextColor="hover:text-black"
          />
        </a>
        <a href="#main-projects-page">
          <ClickButton
            value="Main Project"
            borderColor="white"
            hoverBgColor="white"
            hoverTextColor="hover:text-black"
          />
        </a>
        <a href="#side-projects-page">
          <ClickButton
            value="Side Project"
            borderColor="white"
            hoverBgColor="white"
            hoverTextColor="hover:text-black"
          />
        </a>
        <a href="#tech-stacks-page">
          <ClickButton
            value="Tech Stack"
            borderColor="white"
            hoverBgColor="white"
            hoverTextColor="hover:text-black"
          />
        </a>
        <a href="#hero-section">
          <ClickButton
            value="Go Top"
            borderColor="green"
            hoverBgColor="green"
          />
        </a>
        <div>
          <ClickButton
            value="GuestBook"
            borderColor="green"
            hoverBgColor="green"
            onClick={goToGuestBook}
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalNavigationBar;
