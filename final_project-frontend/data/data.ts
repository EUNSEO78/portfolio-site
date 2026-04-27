import { Project } from "@/types/type";

export const MainProjectsData = [
  {
    src: "https://assets.website-files.com/63f5d378a903c2a12583ce2f/641319fe73926c0e5bc81ccf_ver%202-transcode.mp4",
    subtitle: "Security",
    title: "Hardening Linux Server",
    contribution: "100",
    hashtags: [
      "#VirtualBox",
      "#Ubuntu Server 22.04",
      "#Kali Linux",
      "#UFW",
      "#Fail2Ban",
      "#PAM (faillock, pwquality)",
    ],
    description:
      "Linux 서버 환경에서 보안 설정(Hardening)을 적용하고, 공격 시나리오를 통해 실제 방어 효과를 검증한 프로젝트입니다.",
  },
];

export const SideProjectsData: Project[] = [
  {
    id: 1,
    src: "portfolio",
    title: "portfolio-site",
    description:
      "NestJS 기반 API 서버와 MySQL을 연동하여 방명록/댓글 기능을 구현하고, 서버 구조 및 인증 흐름을 학습한 프로젝트입니다.",
    tech: [
      "JavaScript",
      "NodeJS",
      "NestJS",
      "React",
      "TypeScript",
      "NextJS",
      "TailwindCSS",
    ],
    github: "https://github.com/EUNSEO78/portfolio-site",
  },
  {
    id: 2,
    src: "todolist",
    title: "ToDoList_React",
    description:
      "React와 TypeScript로 만든 할 일 목록 앱으로, 상태 관리와 컴포넌트 재사용성에 중점을 두었습니다.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/EUNSEO78/todolist_react",
  },
];

export const stacks = [
  "Linux",
  "Node.js",
  "MySQL",
  "Git",
  "GitHub",
  "TypeScript",
  "Nest.js",
  "Express.js",
  "Prisma",
];

export const security_tools = [
  "SSH",
  "UFW (Firewall)",
  "Fail2Ban",
  "PAM (faillock, pwquality)",
];
