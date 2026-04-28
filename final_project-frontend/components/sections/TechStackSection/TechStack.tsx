import { stacks, security_tools } from "@/data/data";
import StackCard from "./components/StackCard";

const TechStack = () => {
  return (
    <section
      id="tech-stacks-page"
      className="w-full bg-[#1d2025] text-white py-24 px-4 sm:px-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* 🔥 Security 먼저 */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-400 mb-12 border-b border-[#494c51] pb-4">
          Tech Stack
        </h2>

        <h3 className="text-green-300 text-xl font-semibold text-center mb-6">
          Security Tools
        </h3>

        <ul className="flex flex-wrap justify-center gap-6 mb-12">
          {security_tools.map((v, i) => (
            <StackCard tech={v} key={i} />
          ))}
        </ul>

        {/* 구분선 */}
        <hr className="border-[#494c51] my-10" />

        {/* 🔧 Dev Stack */}
        <h3 className="text-white text-xl font-semibold text-center mb-6">
          Development Stack
        </h3>

        <ul className="flex flex-wrap justify-center gap-6">
          {stacks.map((v, i) => (
            <StackCard tech={v} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
