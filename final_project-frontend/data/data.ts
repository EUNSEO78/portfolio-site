import { Project } from "@/types/type";

export const MainProjectsData = [
  {
    src: "https://assets.website-files.com/63f5d378a903c2a12583ce2f/641319fe73926c0e5bc81ccf_ver%202-transcode.mp4",
    subtitle: "Security",
    title: "SSH Intrusion Detection & Auto-Blocking System",
    github: "https://github.com/EUNSEO78/ssh-intrusion-detection-system",
    contribution: "100",
    hashtags: [
      "#Python",
      "#Ubuntu Server 24.04",
      "#Kali Linux",
      "#UFW",
      "#OpenSSH",
      "#Discord Webhook",
      "#systemd",
    ],
    description:
      "SSH 로그인 실패 로그를 실시간으로 모니터링하여 Brute Force 공격을 탐지하고, 일정 횟수 이상 공격이 발생하면 UFW를 통해 공격 IP를 자동 차단하는 보안 자동화 프로젝트입니다. Discord Webhook을 이용한 실시간 알림과 systemd 기반 서비스 자동 실행을 구현하여 실제 공격 시나리오를 통해 탐지, 차단, 자동 해제까지 검증했습니다.",
  },
  {
    src: "https://assets.website-files.com/63f5d378a903c2a12583ce2f/641319fe73926c0e5bc81ccf_ver%202-transcode.mp4",
    subtitle: "Security",
    title: "Hardening Linux Server",
    github: "https://github.com/EUNSEO78/hardened-linux-server",
    contribution: "100",
    hashtags: [
      "#VirtualBox",
      "#Ubuntu Server 22.04",
      "#Kali Linux",
      "#OpenSSH",
      "#UFW",
      "#Fail2Ban",
      "#PAM (faillock, pwquality)",
    ],
    description:
      "Linux 서버 환경에서 SSH 접근 제어, UFW 방화벽 설정, Fail2Ban, PAM 기반 인증 정책 등을 적용하여 보안 설정(Hardening)을 구성한 프로젝트입니다. Kali Linux를 활용한 공격 시나리오(Brute Force 등)를 통해 설정된 보안 정책의 실제 방어 효과를 검증했습니다.",
  },
];

export const SideProjectsData: Project[] = [
  {
    id: 1,
    src: "portfolio-site-image",
    title: "portfolio-site",
    description:
      "NestJS 기반 API 서버와 MySQL을 연동하여 방명록 및 댓글 기능을 구현한 프로젝트입니다. 데이터 처리 과정과 API 구조를 설계하면서 서버 동작 흐름과 기본적인 보안 고려 사항을 함께 학습했습니다.",
    tech: [
      "JavaScript",
      "Node.js",
      "NestJS",
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
    ],
    github: "https://github.com/EUNSEO78/portfolio-site",
  },
];

export const stacks = [
  "Linux",
  "Node.js",
  "MySQL",
  "Git",
  "GitHub",
  "TypeScript",
  "NestJS",
  "Express",
  "Prisma",
];

export const security_tools = ["SSH", "UFW", "Fail2Ban", "PAM"];
