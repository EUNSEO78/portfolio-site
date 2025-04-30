import BackgroundVideo from "@/components/common/BackgroundVideo";
import "../../styles/shiningText.css";

const Hero = () => {
  return (
    <section id="hero-section" className="relative w-screen h-screen">
      <BackgroundVideo src="https://assets.website-files.com/63f5d378a903c2a12583ce2f/64132dde932dbe26445541a5_BG-transcode.mp4" />
      <div className=" flex flex-col gap-7 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <em className="shining-text text-9xl leading-32">
          PORTPOLIO <br /> WEBSITE
        </em>
        <p className="shining-text text-xl mt-4">
          Welcome to EUNSEO's Personal Portfolio website
        </p>
      </div>
    </section>
  );
};

export default Hero;
