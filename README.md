# 📌 Portfolio-site

![Tech Stack](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![NextJS](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

React와 NestJS 기반의 풀스택 포트폴리오 웹 애플리케이션입니다.
사용자는 방명록에 글을 작성하고 댓글을 남길 수 있으며,TailwindCSS를 이용한 반응형 UI로 다양한 디바이스에서도 안정적인 사용이 가능합니다.

---

## 🔧 기술 스택

### Frontend

- **React**
- **Next.js**
- **TypeScript**
- **TailwindCSS**

### Backend

- **Node.js**
- **NestJS**
- **TypeORM + MySQL**

---

## ✨ 주요 기능

- ✅ 방명록 작성 및 삭제
- ✅ 댓글 작성 및 삭제
- ✅ 반응형 디자인

---

## 📸 데모

<img src="/final_project-frontend/public/portfolio-site-image.png" alt="Portfolio Demo" width="100%" />

---

## 🚀 배포 인프라

| 서비스       | 역할           | 플랫폼/주소                                                                                                       |
| ------------ | -------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Frontend** | 정적 웹 호스팅 | [Vercel](https://vercel.com) ([portfolio-site-two-swart.vercel.app](https://portfolio-site-two-swart.vercel.app)) |
| **Backend**  | API Server     | Render                                                                                                            |
| **Database** | MySQL          | Railway                                                                                                           |

---

## 🗂️ 프로젝트 구조 예시

```
portfolio-site/
├── final_project-frontend/      # 프론트엔드(Next.js)
│   ├── public/
│   ├── app/
│   ├── components/
│   ├── utils/
│   └── ...
├── final_project-backend/       # 백엔드(NestJS)
│   ├── src/
│   │   ├── guestbooks/
│   │   ├── comments/
│   │   ├── app.module.ts
│   │   └── ...
│   └── ...
├── README.md
└── ...
```
