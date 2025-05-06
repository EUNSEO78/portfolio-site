import { MdAttachEmail } from "react-icons/md";
import BackgroundVideo from "../common/BackgroundVideo";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";

const copy = async (text: string) => {
  await navigator.clipboard.writeText(text);
  alert(`${text} 클립보드에 복사되었습니다.`);
};

const Footer = () => {
  return (
    <footer className=" relative w-screen h-[120vh] text-white ">
      <BackgroundVideo src="https://assets.website-files.com/63f5d378a903c2a12583ce2f/64132dde932dbe26445541a5_BG-transcode.mp4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-11/12 -translate-y-1/2 transform text-left flex flex-col gap-40 ">
        <b className="text-7xl">Choi Eun Seo</b>
        <div className="flex flex-col gap-4">
          <button
            className="flex gap-3"
            onClick={() => copy("dmstjalstj4@gmail.com")}
          >
            <MdAttachEmail className="text-2xl" />
            <span> dmstjalstj4@gmail.com</span>
          </button>
          <button className="flex gap-3" onClick={() => copy("010-4136-5940")}>
            <FaPhoneAlt className="text-2xl" />
            <span>010-4136-5940</span>
          </button>
          <a
            href="https://github.com/EUNSEO78"
            target="_blank"
            title="github url"
            className="flex gap-3 items-center"
          >
            <FaGithub className="text-3xl" />
            <span>Github</span>
          </a>
          <span className="text-white/30">
            © 2024 Choi-EunSeo All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
