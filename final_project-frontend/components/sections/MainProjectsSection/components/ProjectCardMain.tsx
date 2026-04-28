import BackgroundVideo from "@/components/common/BackgroundVideo";
import { ProjectCardMainProps } from "@/types/type";
import ProjectCardInfo from "../subcomponents/ProjectCardInfo";

const ProjectCardMain = ({
  src,
  subtitle,
  title,
  href,
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
        href={href}
        contribution={contribution}
        hashtags={hashtags}
        description={description}
      />
    </>
  );
};

export default ProjectCardMain;
