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
            안녕하세요! 서버 보안 엔지니어를 목표로 하고 있는 최은서입니다.
            <br />
            <br />
            Linux 환경에서 사용자 권한 관리, SSH 설정, 방화벽(UFW) 구성, 로그
            분석 등을 직접 실습하며 서버 보안 환경을 구성해본 경험이 있습니다.
            <br />
            특히, <strong className="text-green-300">OS Hardening</strong>,{" "}
            <strong className="text-green-300">Access Control</strong>,{" "}
            <strong className="text-green-300">Network Security</strong>에
            관심을 가지고 있으며, 보안 설정을 단순히 적용하는 것을 넘어 구조와
            원리를 이해하는 데 집중하고 있습니다.
            <br />
            <br />
            또한, NestJS 기반 API 서버를 구성하면서 인증(JWT)과 데이터 보호
            측면에서 보안을 고려하여 서버를 설계해본 경험이 있습니다.
            <br />
            <br />
            이러한 경험을 바탕으로 서버 보안 설정과 취약점 분석을 통해 안전하고
            신뢰할 수 있는 시스템 환경을 구축할 수 있는 보안 엔지니어로 성장해
            나가고자 합니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
