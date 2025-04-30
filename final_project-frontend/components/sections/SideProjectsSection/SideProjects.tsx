"use client";

import { useState } from "react";
import Modal from "./components/Modal";
import "../../styles/scrollbar.css";
import { Project } from "@/types/type";
import SideProjectCard from "./components/SideProjectCard";
import ModalContent from "./components/ModalContent";

const projects: Project[] = [
  {
    id: 1,
    title: "ToDoList_React",
    description: "React를 사용해서 만든 간단한 ToDoList 애플리케이션입니다.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/EUNSEO78/todolist_react",
  },
  {
    id: 2,
    title: "vegastar_clone",
    description: "Vegastar 사이트를 클론한 프로젝트입니다.",
    tech: ["React", "JavaScript", "GSAP", "Swiper"],
    github: "https://github.com/EUNSEO78/vegastar_clone",
  },
  {
    id: 3,
    title: "publishing_portfolio",
    description: "퍼블리싱 포트폴리오 사이트입니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EUNSEO78/publishing_portfolio",
  },
  {
    id: 4,
    title: "cafe1",
    description: "간단한 반응형 구현을 목적으로 한 프로젝트 입니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EUNSEO78/cafe1",
  },
  {
    id: 6,
    title: "project_twosome2",
    description: "Twosome2 클론 팀 프로젝트입니다.",
    tech: [
      "FireBase",
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind",
    ],
    github: "https://github.com/juntae-123/project_twosome2",
  },
  {
    id: 7,
    title: "HyundaiCarPage",
    description: "Hyundai 차량 웹페이지 클론 팀 프로젝트입니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jiheon0928/HyundaiCarPage",
  },
];

const SideProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="side-projects-page"
      className="w-screen bg-[#1d2025] text-white pt-[200px]"
    >
      <div className="h-20 pb-6 mb-16 border-b border-b-[#494c51] flex justify-center items-end">
        <span>Side Project</span>
      </div>
      <div className="overflow-x-auto pb-8">
        <div className="flex gap-6 px-8 min-w-max">
          {projects.map((project) => (
            <SideProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ModalContent project={selectedProject} />}
      </Modal>
    </section>
  );
};

export default SideProjects;
