"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCardMain from "./components/ProjectCardMain";
import { MainProjectsData } from "@/data/data";

gsap.registerPlugin(ScrollTrigger);

const setupScrollAnimations = () => {
  gsap.utils.toArray(".panel").forEach((panel: any) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: true,
      pinSpacing: false,
      end: () => "+=" + panel.offsetHeight,
    });
  });
};

const MainProjects = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setupScrollAnimations();
      gsap.to(".panel", { opacity: 1, duration: 0.3, delay: 0.1 });
      ScrollTrigger.refresh();
    }, 100);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
    // return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-screen bg-[#1d2025] text-white">
      <div className="h-20 pb-6 mb-16 border-b border-b-[#494c51] flex justify-center items-end">
        <span>Main Project</span>
      </div>
      <div id="main-projects-page">
        {MainProjectsData.map((project, index) => (
          <article
            key={index}
            className="panel opacity-0 transition-opacity bg-[#1d2025] h-screen flex items-center justify-center text-white"
          >
            <ProjectCardMain {...project} />
          </article>
        ))}
      </div>

      {/* 스크롤 여백 확보용 */}
      <div className="h-screen bg-black flex items-center justify-center"></div>
    </section>
  );
};

export default MainProjects;
