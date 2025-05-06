import { Project } from "@/types/type";

export const MainProjectsData = [
  {
    src: "https://assets.website-files.com/63f5d378a903c2a12583ce2f/641319fe73926c0e5bc81ccf_ver%202-transcode.mp4",
    subtitle: "Create",
    title: "MY PORTFOLIO",
    contribution: "100",
    hashtags: [
      "#JavaScript",
      "#NodeJS",
      "#NestJS",
      "#React",
      "#TypeScript",
      "#NextJS",
      "#TailwindCSS",
    ],
    description:
      "React와 NestJS로 구현한 풀스택 포트폴리오로, 방명록과 댓글 기능 및 반응형 UI를 제공합니다.",
  },
  {
    src: "https://uploads-ssl.webflow.com/6481baa8b4e61d7cb8a9f0a0/64980d39c97910472fbfa13f_HeroVideo_04_compressed-transcode.mp4",
    subtitle: "Clone",
    title: "TEAMPRO(미정)",
    contribution: "100",
    hashtags: [
      "#JavaScript",
      "#NodeJS",
      "#NestJS",
      "#React",
      "#TypeScript",
      "#NextJS",
      "#TailwindCSS",
    ],
    description:
      "React를 활용한 프론트 개발과 Node.js를 활용한 백엔드 개발에 중점을 둔 팀 프로젝트입니다.",
  },
];

export const SideProjectsData: Project[] = [
  {
    id: 1,
    src: "todolist",
    title: "ToDoList_React",
    description:
      "React와 TypeScript로 만든 할 일 목록 앱으로, 상태 관리와 컴포넌트 재사용성에 중점을 두었습니다.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/EUNSEO78/todolist_react",
  },
  {
    id: 2,
    src: "vegastar",
    title: "vegastar_clone",
    description:
      "Vegastar 공식 웹사이트를 클론한 프로젝트로, GSAP과 Swiper를 활용한 애니메이션 효과와 반응형 인터랙션 구현에 집중했습니다.",
    tech: ["React", "JavaScript", "GSAP", "Swiper"],
    github: "https://github.com/EUNSEO78/vegastar_clone",
  },
  {
    id: 3,
    src: "publishPortpolio",
    title: "publishing_portfolio",
    description:
      "HTML, CSS, JavaScript를 활용해 다양한 레이아웃과 애니메이션을 구현한 퍼블리싱 중심 포트폴리오입니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EUNSEO78/publishing_portfolio",
  },
  {
    id: 4,
    src: "cafe1",
    title: "cafe1",
    description: "간단한 반응형 구현을 목적으로 한 프로젝트 입니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EUNSEO78/cafe1",
  },
  {
    id: 6,
    src: "twosome",
    title: "project_twosome2",
    description:
      "Twosome Place 웹사이트를 클론한 팀 프로젝트입니다. Firebase를 통한 사용자 인증과 Next.js 기반 SSR 환경에서의 개발 경험을 쌓았습니다.",
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
    src: "hyundai",
    title: "HyundaiCarPage",
    page: "https://jiheon0928.github.io/HyundaiCarPage/",
    description:
      "Hyundai 웹사이트를 클론한 팀 프로젝트로, 깔끔한 HTML 구조와 슬라이더 구현에 집중했습니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jiheon0928/HyundaiCarPage",
  },
];

export const stacks = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MySQL",
  "Nest.js",
  "Express.js",
  "Prisma",
  "Git",
  "VS Code",
  "GitHub",
];
