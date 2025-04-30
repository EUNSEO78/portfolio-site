"use client";
import useCurrentTime from "@/hooks/useCurrentTime";
import useTodayDate from "@/hooks/useTodayDate";
import CurrentDateTime from "./subcomponents/CurrentDateTime";

const Header = () => {
  const currentTime = useCurrentTime();
  const todayDate = useTodayDate();
  return (
    <header className="w-screen fixed top-0 left-0 z-50 text-white">
      <nav className="w-full max-w-[90%] mx-auto py-7 flex justify-between items-center">
        <b className="text-4xl">CHOI</b>
        <div className="flex flex-col gap-0.5">
          <CurrentDateTime label="KOR" value={currentTime} ml="10px" />
          <CurrentDateTime label="TODAY" value={todayDate} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
