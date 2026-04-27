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
            Server Security & Linux Systems
          </div>
          <div className="text-lg lg:text-base md:text-sm sm:text-xs leading-relaxed text-white">
            안녕하세요! 정보보안을 목표로 하고 있는 최은서입니다.
            <br />
            <br />
            Linux 환경에서 사용자 권한 관리, SSH 설정, 방화벽 구성, 로그 분석 등{" "}
            <strong className="text-green-300">서버 하드닝(Hardening)</strong>
            에 관심이 있으며,
            <br />
            <strong className="text-green-300">OS Hardening</strong>,{" "}
            <strong className="text-green-300">Access Control</strong>,{" "}
            <strong className="text-green-300">Network Security</strong>를
            중심으로 서버 보안 구조를 이해하고 적용하는 것을 목표로 하고
            있습니다.
            <br />
            <br />
            서버 보안 설정과 취약점 분석을 통해 안전한 시스템 환경을 구축하고
            운영할 수 있는 보안 엔지니어로 성장하는 것이 목표입니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
