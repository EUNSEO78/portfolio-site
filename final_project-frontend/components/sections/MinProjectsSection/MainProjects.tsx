"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCardMain from "./components/ProjectCardMain";

const projects = [
  {
    src: "https://assets.website-files.com/63f5d378a903c2a12583ce2f/641319fe73926c0e5bc81ccf_ver%202-transcode.mp4",
    subtitle: "Create",
    title: "MY PORTFOLIO",
    contribution: "100",
    hashtags: [
      "#JAVASCRIPT",
      "#NODE.JS",
      "#NEST.JS",
      "#REACT",
      "#TYPESCRIPT",
      "#NEXT.JS",
      "#TAILWIND",
    ],
    description:
      "React를 활용한 프론트 개발과 Node.js를 활용한 백엔드 개발에 중점을 둔 포트폴리오입니다.",
  },
  {
    src: "https://uploads-ssl.webflow.com/6481baa8b4e61d7cb8a9f0a0/64980d39c97910472fbfa13f_HeroVideo_04_compressed-transcode.mp4",
    subtitle: "Clone",
    title: "TEAMPRO(미정)",
    contribution: "100",
    hashtags: [
      "#JAVASCRIPT",
      "#NODE.JS",
      "#NEST.JS",
      "#REACT",
      "#TYPESCRIPT",
      "#NEXT.JS",
      "#TAILWIND",
    ],
    description:
      "React를 활용한 프론트 개발과 Node.js를 활용한 백엔드 개발에 중점을 둔 팀 프로젝트입니다.",
  },
];

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
    setupScrollAnimations();
    gsap.to(".panel", { opacity: 1, duration: 0.3, delay: 0.1 });
  }, []);

  return (
    <section className="w-screen bg-[#1d2025] text-white">
      <div className="h-20 pb-6 mb-16 border-b border-b-[#494c51] flex justify-center items-end">
        <span>Main Project</span>
      </div>
      <div id="main-projects-page">
        {projects.map((project, index) => (
          <article
            key={index}
            className="panel opacity-0 transition-opacity bg-[#1d2025] h-screen flex items-center justify-center text-white"
          >
            <ProjectCardMain {...project} />
          </article>
        ))}
      </div>

      {/* 스크롤 여백 확보용 dummy div */}
      <div className="h-screen bg-black flex items-center justify-center"></div>
    </section>
  );
};

export default MainProjects;
