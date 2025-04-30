import BackgroundVideo from "@/components/common/BackgroundVideo";
import { BackgroundVideoProps, ProjectCardInfoProps } from "@/types/type";
import ProjectCardInfo from "../subcomponents/ProjectCardInfo";

type ProjectCardMainProps = BackgroundVideoProps & ProjectCardInfoProps;

const ProjectCardMain = ({
  src,
  subtitle,
  title,
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
        contribution={contribution}
        hashtags={hashtags}
        description={description}
      />
    </>
  );
};

export default ProjectCardMain;
