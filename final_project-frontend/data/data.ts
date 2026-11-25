import { Project } from "@/types/type";

export const MainProjectsData = [
   {
    src: "https://assets.website-files.com/63f5d378a903c2a12583ce2f/641319fe73926c0e5bc81ccf_ver%202-transcode.mp4",
    subtitle: "Security · Web Vulnerability Assessment",
    title: "DVWA Web Vulnerability Assessment & Bypass",
    github: "https://github.com/EUNSEO78/dvwa-web-vulnerability-assessment",
    contribution: "100",
    hashtags: [
      "#OWASP Top 10:2025",
      "#OWASP WSTG v4.2",
      "#DVWA",
      "#Burp Suite",
      "#Kali Linux",
      "#Ubuntu Server",
    ],
    description:
      "OWASP Top 10:2025 및 WSTG v4.2를 기반으로 DVWA 웹 애플리케이션의 주요 취약점을 진단했습니다. Burp Suite를 활용한 HTTP 요청·응답 분석과 블랙박스 기반 취약점 재현을 수행하고, Medium 단계의 방어 로직 우회 검증 후 소스 코드 분석을 통해 취약점 발생 원인과 방어 로직을 확인했습니다. 이를 바탕으로 공격 영향을 분석하고 대응 방안을 도출했습니다.",
  },
];

export const SideProjectsData: Project[] = [
  {
    id: 1,
    src: "ssh-intrusion-detection-image",
    title: "SSH Intrusion Detection & Auto-Blocking System",
    description:
      "Python으로 SSH 로그인 실패 로그를 분석하여 Brute Force 공격을 탐지하고, 임계값을 초과한 공격 IP를 UFW를 통해 자동 차단하는 보안 자동화 시스템을 구현했습니다. Discord Webhook 기반 알림과 systemd 서비스 등록을 적용하고, 공격 시나리오를 통해 로그인 실패 탐지 및 IP 차단 과정을 검증했습니다.",
    tech: [
      "Python",
      "Ubuntu Server",
      "Kali Linux",
      "UFW",
      "OpenSSH",
      "Discord Webhook",
      "systemd",
    ],
    github: "https://github.com/EUNSEO78/ssh-intrusion-detection-system",
  },
  {
    id: 2,
    src: "hardened-linux-server-image",
    title: "Hardening Linux Server",
    description:
      "Ubuntu Server 환경에서 SSH 접근 제어, 계정 보안, UFW 방화벽, Fail2Ban, PAM 기반 인증 정책 등을 적용하여 서버 보안 하드닝을 수행했습니다. Kali Linux를 활용한 공격 시나리오를 통해 Brute Force 방어, root 로그인 제한 및 서버 보안 설정의 적용 여부를 검증하며 Linux 인프라 보안 역량을 쌓았습니다.",
    tech: [
      "VirtualBox",
      "Ubuntu Server",
      "Kali Linux",
      "OpenSSH",
      "UFW",
      "Fail2Ban",
      "PAM",
    ],
    github: "https://github.com/EUNSEO78/hardened-linux-server",
  },
  {
    id: 3,
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
