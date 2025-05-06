import GuestbookDetail from "./GuestbookDetail";
import { getGuestbook } from "@/utils/api";

const Page = async ({ params }: { params: { id: string } }) => {
  // const { id } = params;
  const guestbook = await getGuestbook(params.id);
  return <GuestbookDetail guestbook={guestbook} />;
};

export default Page;
