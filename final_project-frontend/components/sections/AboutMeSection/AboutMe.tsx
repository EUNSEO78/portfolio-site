
const AboutMe = () => {
  return (
    <section
      id="about-me-page"
      className="w-screen min-h-screen bg-[#1d2025] text-white flex justify-center items-center px-4 py-20"
    >
      <div className="w-full max-w-[80%] md:max-w-[90%]">
        <div className="pb-6 font-semibold">About Me</div>

        <div className="py-32 md:py-24 sm:py-12 border-y border-y-[#494c51]">
          <div className="text-green-500 text-4xl lg:text-6xl md:text-4xl sm:text-3xl pb-16 md:pb-12 sm:pb-6 font-bold">
            정보보안 | 웹 취약점 진단·모의해킹
          </div>

          <div className="text-lg lg:text-base md:text-sm sm:text-xs leading-relaxed text-white">
            웹 애플리케이션을 중심으로 보안 취약점을 발견하고,
            공격 과정을 재현하여 원인과 위험성을 분석하는 보안 인재를
            목표로 하고 있습니다.

            <br />
            <br />
            웹 개발 실습 과정에서 발생한 서버 오류를 로그 분석과
            서버 설정 점검을 통해 해결하며 시스템 동작 원리에
            관심을 가지게 되었습니다. 이를 계기로 기능 구현을 넘어
            서비스의 보안 취약점을 분석하고 개선하는 분야로
            관심을 확장했습니다.

            <br />
            <br />
            <strong className="text-green-300">
              OWASP Top 10:2025 및 WSTG v4.2
            </strong>
            를 기반으로 웹 애플리케이션 취약점 진단 프로젝트를
            수행했습니다.
            <strong className="text-green-300">
              {" "}DVWA 기반 웹 취약점 진단 및 방어 로직 우회 검증 프로젝트
            </strong>
            에서 Burp Suite를 활용한 HTTP 요청·응답 분석,
            블랙박스 기반 취약점 재현, Medium 단계의 방어 로직
            우회 검증과 소스 코드 분석을 진행했습니다.
            이를 통해 취약점의 발생 원인과 공격 영향을 분석하고
            대응 방안을 도출하는 경험을 쌓았습니다.

            <br />
            <br />
            또한 가상화 환경에서
            <strong className="text-green-300"> Ubuntu Server</strong>를 구축하고
            SSH 접근 제어, 계정 보안, UFW 방화벽, Fail2Ban,
            PAM 기반 인증 정책 등을 적용하며 Linux 서버 보안 설정을
            직접 실습했습니다.

            <br />
            <br />
            Python 기반
            <strong className="text-green-300">
              {" "}SSH 침입 탐지 및 자동 차단 시스템
            </strong>
            을 구현하며 로그인 실패 로그 분석, Brute Force 공격 탐지,
            공격 IP 자동 차단 및 Discord 알림을 통한 자동화된 대응
            과정을 경험했습니다.

            <br />
            <br />
            앞으로 웹 애플리케이션을 중심으로 모바일 및 시스템·인프라
            보안 영역까지 진단 역량을 확장하고,
            <strong className="text-green-300">
              {" "}취약점 발견부터 원인 분석, 공격 영향도 평가,
              실질적인 개선 방안 제시까지 수행할 수 있는 보안 전문가
            </strong>
            로 성장하고자 합니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
