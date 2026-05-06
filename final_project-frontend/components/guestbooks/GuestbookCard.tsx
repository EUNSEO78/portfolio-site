import { GuestbookCardProps } from "@/types/guestbook";
import { likeGuestbook, viewGuestbook } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const GuestbookCard = ({ guestbook }: GuestbookCardProps) => {
  const [likes, setLikes] = useState(guestbook.likes);
  const [views, setViews] = useState(guestbook.views);
  const router = useRouter();

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const likedKey = `liked_guestbook_${guestbook.id}`;
    if (localStorage.getItem(likedKey)) {
      alert("이미 좋아요를 누르셨습니다.");
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
    <Link href={`/${guestbook.id}`} className="block">
      <div
        onClick={handleView}
        className="bg-[#2b2f36] text-white rounded-2xl shadow-lg hover:shadow-2xl px-5 py-6 transition-transform hover:scale-[1.02] duration-300 h-full flex flex-col justify-between"
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-green-400">
              {guestbook.author}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(guestbook.createdAt).toLocaleString()}
            </p>
          </div>
          <button
            className="text-sm text-pink-400 hover:text-pink-300 transition-colors"
            onClick={handleLike}
          >
            ❤️ {likes}
          </button>
        </div>
        <p className="text-sm text-white mt-2">{guestbook.content}</p>
        <p className="text-xs text-green-400 mt-4 text-right">
          👀 {views} views
        </p>
      </div>
    </Link>
  );
};

export default GuestbookCard;
