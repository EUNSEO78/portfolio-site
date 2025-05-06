export const dynamic = "force-dynamic";

import GuestbookDetail from "./GuestbookDetail";
import { getGuestbook } from "@/utils/api";

// type PageProps = {
//   params: {
//     id: string;
//   };
// };

type IParams = Promise<{ id: string }>;

const Page = async (props: { params: IParams }) => {
  const params = await props.params;
  const id = params.id;
  const guestbook = await getGuestbook(id);
  return <GuestbookDetail guestbook={guestbook} />;
};
export default Page;
