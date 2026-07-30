import { Project } from "@/types/type";

export const MainProjectsData = [
  {
    src: "https://assets.website-files.com/63f5d378a903c2a12583ce2f/641319fe73926c0e5bc81ccf_ver%202-transcode.mp4",
    subtitle: "Security · Detection & Automation",
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
      "SSH 로그인 실패 로그를 분석하여 Brute Force 공격을 탐지하고, 임계값을 초과한 공격 IP를 UFW를 통해 자동 차단하는 보안 자동화 시스템을 구현했습니다. Discord Webhook 기반 실시간 알림과 systemd 서비스 등록을 적용하고, 실제 공격 시나리오를 통해 공격 탐지 → IP 차단 → 차단 해제의 전체 대응 과정을 검증했습니다.",
  },
  {
    src: "https://assets.website-files.com/63f5d378a903c2a12583ce2f/641319fe73926c0e5bc81ccf_ver%202-transcode.mp4",
    subtitle: "Security · Infrastructure Hardening",
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
      "Linux 서버 환경에서 SSH 접근 제어, 계정 보안, UFW 방화벽, Fail2Ban, PAM 기반 인증 정책 등을 적용하여 서버 보안 하드닝을 구성했습니다. Kali Linux를 활용한 Brute Force 공격 시나리오를 수행하고 보안 정책의 실제 방어 효과를 검증하며 인프라 취약점 진단과 보안 설정 검증에 필요한 기초 역량을 쌓았습니다.",
  },
];

export const SideProjectsData: Project[] = [
  {
    id: 1,
    src: "portfolio-site-image",
    title: "portfolio-site",
    description:
      "NestJS 기반 API 서버와 MySQL을 연동하여 방명록 및 댓글 기능을 구현한 웹 프로젝트입니다. API와 데이터베이스 간의 데이터 처리 흐름을 직접 구현하며 웹 애플리케이션의 구조와 동작 원리를 이해했습니다. 이러한 개발 경험을 바탕으로 웹 애플리케이션의 동작 구조를 이해하고 취약점을 분석하는 기반을 마련했습니다.",
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

export const stacks = ["Linux", "Git", "GitHub", "Ubuntu Server", "Kali Linux"];

export const security_tools = ["SSH", "UFW", "Fail2Ban", "PAM", "Burp Suite"];
