import { Project } from "@/types/type";

const ModalContent = ({ project }: { project: Project }) => (
  <div className="w-full">
    <img src={`/${project.src}.png`} alt="" />
    <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
    <a
      href={project.page}
      target="_blank"
      className="test-xl font-bold text-blue-900"
    >
      {project.page}
    </a>
    <p className="mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((v, i) => (
        <span
          key={i}
          className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
        >
          {v}
        </span>
      ))}
    </div>
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded-lg text-center"
    >
      GitHub Repository
    </a>
  </div>
);

export default ModalContent;
