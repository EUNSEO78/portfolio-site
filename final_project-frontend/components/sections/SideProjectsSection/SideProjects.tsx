"use client";

import { useState } from "react";
import Modal from "./components/Modal";
import "../../styles/scrollbar.css";
import { Project } from "@/types/type";
import SideProjectCard from "./components/SideProjectCard";
import ModalContent from "./components/ModalContent";
import { SideProjectsData } from "@/data/data";

const SideProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="side-projects-page"
      className="w-screen bg-[#1d2025] text-white pt-[100px] sm:pt-[150px] pb-8"
    >
      <div className="h-20 pb-6 mb-16 font-bold border-b border-b-[#494c51] flex justify-center items-end">
        <span>Side Project</span>
      </div>
      <div className="overflow-x-auto pb-8">
        <div className="flex gap-6 px-2 sm:px-8 min-w-max flex-wrap justify-center sm:flex-nowrap">
          {SideProjectsData.map((project) => (
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
