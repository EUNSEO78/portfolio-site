import BackgroundVideo from "@/components/common/BackgroundVideo";
import "../../styles/shiningText.css";

const Hero = () => {
  return (
    <section id="hero-section" className="relative w-screen h-screen">
      <BackgroundVideo src="https://assets.website-files.com/63f5d378a903c2a12583ce2f/64132dde932dbe26445541a5_BG-transcode.mp4" />
      <div className="flex flex-col gap-7 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center">
        <em className="shining-text text-5xl sm:text-6xl md:text-8xl lg:text-9xl ">
          PORTPOLIO <br /> WEBSITE
        </em>
        <p className="shining-text text-base sm:text-lg md:text-xl mt-4">
          Welcome to EUNSEO's Personal Portfolio website
        </p>
      </div>
    </section>
  );
};

export default Hero;
