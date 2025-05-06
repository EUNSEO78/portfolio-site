import { stacks } from "@/data/data";
import StackCard from "./components/StackCard";

const TechStack = () => {
  return (
    <section
      id="tech-stacks-page"
      className="w-full bg-[#1d2025] text-white py-24 px-4 sm:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-400 mb-12 border-b border-[#494c51] pb-4">
          Tech Stack
        </h2>

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
