"use client";
import { BackgroundVideoProps } from "@/types/type";

const BackgroundVideo = ({ src }: BackgroundVideoProps) => {
  return (
    <video
      muted
      playsInline
      autoPlay
      loop
      className="w-full h-full object-cover brightness-50"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
