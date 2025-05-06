const AboutMe = () => {
  return (
    <section
      id="about-me-page"
      className="w-screen h-screen bg-[#1d2025] text-white flex justify-center items-center px-4"
    >
      <div className="w-full max-w-[80%] md:max-w-[90%]">
        <div className="pb-6 text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold">
          About Me
        </div>
        <div className="py-32 md:py-24 sm:py-12 border-y border-y-[#494c51]">
          <div className="text-green-500 text-4xl lg:text-6xl md:text-4xl sm:text-3xl pb-16 md:pb-12 sm:pb-6 font-bold">
            Backend Development
          </div>
          <div className="text-lg lg:text-base md:text-sm sm:text-xs leading-relaxed text-white">
            안녕하세요! 백엔드 개발자를 목표로 하고 있는 최은서입니다.
            <br />
            <br />
            Node.js 기반의 웹 백엔드 개발에 관심이 많으며,
            <br />
            <strong className="text-green-300">Express</strong>,{" "}
            <strong className="text-green-300">Prisma</strong>,{" "}
            <strong className="text-green-300">MySQL</strong>을 활용한 REST API
            구현과
            <strong className="text-green-300"> NestJS</strong>를 통한 구조적인
            서버 아키텍처 설계도 공부하고 있습니다.
            <br />
            <br />
            데이터를 다루고 문제를 해결하는 과정에서 재미를 느끼고 있으며,
            유지보수성과 확장성을 고려한 백엔드 서비스를 만드는 것이 목표입니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
