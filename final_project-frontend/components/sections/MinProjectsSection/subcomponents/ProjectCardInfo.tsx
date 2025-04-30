import ClickButton from "@/components/common/ClickButton";
import { ProjectCardInfoProps } from "@/types/type";

const ProjectCardInfo = ({
  subtitle,
  title,
  contribution,
  hashtags,
  description,
}: ProjectCardInfoProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center flex flex-col items-center gap-6 px-4">
      <div className="flex flex-col gap-2">
        <em
          style={{ fontFamily: "Mazius, sans-serif", whiteSpace: "pre-wrap" }}
          className="text-5xl"
        >
          {subtitle}
        </em>
        <h2 className="text-8xl font-bold">{title}</h2>
      </div>
      <ClickButton value="Go Site" borderColor="green" hoverBgColor="green" />
      <div className="flex flex-col gap-4 items-center text-base">
        <div className="flex gap-4 flex-wrap justify-center">
          <span>
            <strong>기여도:</strong> {contribution}%
          </span>
          <ul className="flex gap-2 flex-wrap text-green-300">
            {hashtags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <p className="text-center text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCardInfo;
