# 📌 Portfolio-site

![Tech Stack](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![NextJS](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

React(Next.js)와 NestJS 기반의 풀스택 웹 애플리케이션으로,
방명록 및 댓글 기능을 중심으로 API 설계와 데이터 흐름을 구현한 프로젝트입니다.

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

- ✅ 방명록 작성 / 조회 / 삭제
- ✅ 댓글 작성 / 조회 / 삭제
- ✅ API 응답 구조 통일 (NestJS Interceptor 적용)
- ✅ 반응형 디자인

---

## 📸 데모

<img src="/final_project-frontend/public/portfolio-site-image.png" alt="Portfolio Demo" width="100%" />

---

## 📚 Notion 정리

프로젝트 설계 및 문제 해결 과정은 아래에서 확인할 수 있습니다.  
👉 https://www.notion.so/34f24cb4abc681fb98c7c311e7d6cad7

---

## 🚀 배포 인프라

| 서비스       | 역할           | 플랫폼/주소                                                                                                       |
| ------------ | -------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Frontend** | 정적 웹 호스팅 | [Vercel](https://vercel.com) ([portfolio-site-two-swart.vercel.app](https://portfolio-site-two-swart.vercel.app)) |
| **Backend**  | API Server     | Render (예정)                                                                                                     |
| **Database** | MySQL          | Railway (예정)                                                                                                    |

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
