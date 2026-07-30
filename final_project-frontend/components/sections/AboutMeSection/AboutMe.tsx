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
            정보보안 | 취약점 진단·분석
          </div>

          <div className="text-lg lg:text-base md:text-sm sm:text-xs leading-relaxed text-white">
            공격자의 관점에서 취약점을 분석하고, 원인과 위험성을 파악하여 개선
            방안을 도출하는 보안 인재를 목표로 하고 있습니다.
            <br />
            <br />웹 개발 실습 과정에서 발생한 서버 오류와 데이터 무결성 문제를
            해결하며 <strong className="text-green-300">로그 분석</strong>과
            <strong className="text-green-300"> 서버 설정 점검</strong>의
            중요성을 경험했습니다. 이를 계기로 시스템의 문제를 단순히 해결하는
            것을 넘어, 보안 관점에서 취약점을 분석하고 사전에 예방하는 분야에
            관심을 가지게 되었습니다.
            <br />
            <br />
            이후 가상화 환경에서{" "}
            <strong className="text-green-300">Ubuntu Server</strong>를 구축하고{" "}
            <strong className="text-green-300">SSH 접근 제어</strong>,
            <strong className="text-green-300"> 계정 보안</strong>,
            <strong className="text-green-300"> UFW 방화벽</strong>,
            <strong className="text-green-300"> Fail2Ban</strong>,
            <strong className="text-green-300"> PAM 기반 인증 정책</strong> 등을
            직접 구성했습니다. 또한
            <strong className="text-green-300"> Kali Linux</strong>를 활용한
            공격 시나리오를 통해 보안 설정의 효과를 검증하며 인프라 취약점
            진단에 필요한 기초 역량을 쌓았습니다.
            <br />
            <br />
            또한 Python 기반{" "}
            <strong className="text-green-300">
              SSH 침입 탐지 및 자동 차단 시스템
            </strong>
            을 구현하며 로그인 실패 로그 분석, Brute Force 공격 탐지, 공격 IP
            자동 차단, 실시간 알림 및 자동화된 대응 과정을 직접 경험했습니다.
            <br />
            <br />
            현재는{" "}
            <strong className="text-green-300">
              PortSwigger Web Security Academy
            </strong>
            를 통해 SQL Injection 등 웹 취약점의 원리와 공격 과정을 학습하며 웹
            및 인프라 취약점 진단·분석 역량을 함께 강화하고 있습니다.
            <br />
            <br />
            기술적 취약점을 발견하는 것에 그치지 않고,
            <strong className="text-green-300">
              {" "}
              취약점의 원인과 위험성을 분석하여 실질적인 개선 방안을 제시할 수
              있는 보안 전문가
            </strong>
            로 성장하고자 합니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
