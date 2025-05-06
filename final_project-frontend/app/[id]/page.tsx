export const dynamic = "force-dynamic";

import GuestbookDetail from "./GuestbookDetail";
import { getGuestbook } from "@/utils/api";

type PageProps = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const guestbook = await getGuestbook(params.id);
  return <GuestbookDetail guestbook={guestbook} />;
};
export default Page;
