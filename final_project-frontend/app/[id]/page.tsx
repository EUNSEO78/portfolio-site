import GuestbookDetail from "./GuestbookDetail";
import { getGuestbook } from "@/utils/api";

const Page = async ({ params }: { params: { id: any } }) => {
  const { id } = await params;
  const guestbook = await getGuestbook(id);
  return <GuestbookDetail guestbook={guestbook} />;
};

export default Page;
