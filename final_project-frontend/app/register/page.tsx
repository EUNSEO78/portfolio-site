import GuestbookHeader from "@/components/guestbooks/GuestbookHeader";
import RegisterForm from "./Registerform";

const RegisterPage = () => {
  return (
    <main className="h-screen bg-[#1d2025] text-white rounded-lg shadow-md">
      <div className="w-full max-w-[80%] mx-auto pt-36">
        <GuestbookHeader />
        <div>
          <div className="w-fit text-[20px] rounded-2xl font-bold mb-12 p-3 bg-[#2dcf6c]">
            방명록 작성
          </div>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
