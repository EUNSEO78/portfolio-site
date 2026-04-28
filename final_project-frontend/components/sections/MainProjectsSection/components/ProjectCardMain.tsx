import BackgroundVideo from "@/components/common/BackgroundVideo";
import { ProjectCardMainProps } from "@/types/type";
import ProjectCardInfo from "../subcomponents/ProjectCardInfo";

const ProjectCardMain = ({
  src,
  subtitle,
  title,
  github,
  contribution,
  hashtags,
  description,
}: ProjectCardMainProps) => {
  return (
    <>
      <BackgroundVideo src={src} />
      <ProjectCardInfo
        subtitle={subtitle}
        title={title}
        github={github}
        contribution={contribution}
        hashtags={hashtags}
        description={description}
      />
    </>
  );
};

export default ProjectCardMain;
