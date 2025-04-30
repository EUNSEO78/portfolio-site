"use client";
import { useEffect, useState } from "react";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("ko-KR"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

export default useCurrentTime;
