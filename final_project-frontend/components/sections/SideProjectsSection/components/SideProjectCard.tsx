import { Project } from "@/types/type";

const SideProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="w-[300px] h-64 bg-[#2a2d34] rounded-xl p-6 cursor-pointer hover:bg-[#353840] transition sm:w-1/2 md:w-1/3 lg:w-1/4"
  >
    <span className="text-xl font-bold">{project.title}</span>
    <p className="mt-4 text-sm">{project.description}</p>
    <div className="mt-2 flex flex-wrap gap-2">
      {project.tech.map((tech, i) => (
        <span
          key={i}
          className="text-xs bg-[#3a3d44] text-green-300 px-2 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default SideProjectCard;
