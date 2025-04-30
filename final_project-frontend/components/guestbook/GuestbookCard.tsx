import { Guestbook } from "@/types/guestbook";
import { likeGuestbook, viewGuestbook } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface GuestbookCardProps {
  guestbook: Guestbook;
}

export default function GuestbookCard({ guestbook }: GuestbookCardProps) {
  const [likes, setLikes] = useState(guestbook.likes);
  const [views, setViews] = useState(guestbook.views);
  const router = useRouter();

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    // handleView 막기
    e.stopPropagation();

    const likedKey = `liked_guestbook_${guestbook.id}`;
    if (localStorage.getItem(likedKey)) {
      alert("이미 좋아요 누르셨습니다.");
      return;
    }

    try {
      const updated = await likeGuestbook(guestbook.id);
      setLikes(updated.likes);
      localStorage.setItem(likedKey, "true");
    } catch (err) {
      console.error("좋아요 실패", err);
    }
  };

  const handleView = async () => {
    const updated = await viewGuestbook(guestbook.id);
    setViews(updated.views);
    router.push(`/${guestbook.id}`);
  };

  return (
    <Link href={`/${guestbook.id}`}>
      <div
        className="bg-[#182120] text-white rounded-lg shadow-md p-6 hover:scale-105"
        onClick={handleView}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {guestbook.author}
            </h3>
            <p className="text-sm text-gray-400">{guestbook.createdAt}</p>
          </div>
          <button
            className="flex items-center space-x-1 hover:font-bold hover:text-[#2dcf6c]"
            onClick={handleLike}
          >
            <span>❤️{likes}</span>
          </button>
        </div>
        <p className="text-white">{guestbook.content}</p>
        <p className="text-[14px] text-[#2dcf6c]">views: {views}</p>
      </div>
    </Link>
  );
}
