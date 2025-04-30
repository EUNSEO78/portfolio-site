import BackgroundVideo from "../common/BackgroundVideo";

const Footer = () => {
  return (
    <footer className=" relative w-screen h-screen text-white ">
      <BackgroundVideo src="https://assets.website-files.com/63f5d378a903c2a12583ce2f/64132dde932dbe26445541a5_BG-transcode.mp4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-11/12 -translate-y-1/2 transform text-left flex flex-col gap-44 ">
        <b className="text-7xl">Choi Eun Seo</b>
        <div className="flex flex-col gap-10">
          <strong>Email: dmstjalstj4@gmail.com</strong>
          <div className="flex items-end justify-between">
            <a
              href="https://github.com/EUNSEO78"
              target="_blank"
              title="github url"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
                className="bg-white rounded-2xl w-20 h-20"
              />
            </a>
            <span className="text-white/30">
              © 2024 Choi-EunSeo All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
