import { Project } from "@/types/type";

const ModalContent = ({ project }: { project: Project }) => (
  <div className="flex flex-col gap-4">
    <img
      src={`/${project.src}.png`}
      alt=""
      className="rounded-xl object-cover w-full h-40"
    />

    <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>

    <p className="text-sm text-gray-700 leading-relaxed">
      {project.description}
    </p>

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

    <div className="mt-2">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
      >
        GitHub Repository
      </a>
    </div>
  </div>
);

export default ModalContent;
