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
            정보보안 엔지니어
          </div>
          <div className="text-lg lg:text-base md:text-sm sm:text-xs leading-relaxed text-white">
            안녕하세요! 정보보안 엔지니어를 목표로 하고 있는
            <strong className="text-green-300"> 최은서</strong>입니다.
            <br />
            <br />
            개발 실습 과정에서 발생한 서버 오류를 해결하며
            <strong className="text-green-300"> 로그 분석</strong>과
            <strong className="text-green-300"> 서버 설정 점검</strong>의
            중요성을 경험했고, 이를 계기로 인프라 취약점을 진단하고 보호하는
            <strong className="text-green-300"> 정보보안</strong> 분야에 관심을
            갖게 되었습니다.
            <br />
            <br />
            현재 가상화 환경에서
            <strong className="text-green-300"> 권한 관리</strong>,
            <strong className="text-green-300"> 접근 제한</strong>,
            <strong className="text-green-300"> SSH 설정</strong>,
            <strong className="text-green-300"> UFW 방화벽 설정</strong> 등을
            직접 실습하고 문서화하며 인프라 보안 및 하드닝 역량을 쌓고 있습니다.
            또한 <strong className="text-green-300">Kali Linux</strong>를 활용해
            직접 공격을 해보며 공격자의 관점에서 취약점을 분석하는 능력을 기르고
            있습니다. 최근에는 우분투 서버 로그 기반의{" "}
            <strong className="text-green-300">
              SSH 브루트 포스 공격 탐지 및 자동 차단 시스템
            </strong>
            을 구현하며 보안 자동화와 로그 분석 역량을 확장하고 있습니다.
            <br />
            <br />
            단순히 보안 설정을 적용하는 것을 넘어, 공격과 방어의 구조적 원리를
            이해하여 근본적인 해결 방법을 찾기 위해 꾸준히 학습하고 기록하고
            있습니다.
            <br />
            <br />
            이러한 경험을 바탕으로{" "}
            <strong className="text-green-300">
              보안 사고를 사전에 예방하고 신뢰할 수 있는 보안 전문가
            </strong>
            로 성장하는 것이 목표입니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
