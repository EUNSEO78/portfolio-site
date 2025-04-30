import StackCard from "./components/StackCard";

const stacks = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MYSQL",
  "Nest.js",
  "Express.js",
  "Prisma",
  "Git",
  "VS Code",
  "GitHub",
];

const TechStack = () => {
  return (
    <section
      id="tech-stacks-page"
      className="w-screen bg-[#1d2025] text-white py-[200px]"
    >
      <div className=" h-20 pb-6 mb-16 border-b border-b-[#494c51] flex justify-center items-end">
        <span>Tech Stack</span>
      </div>
      <div className="h-96">
        <ul className="w-[700px]  bg-white border-2 border-green-300 rounded-2xl flex gap-5 mx-auto flex-wrap p-6">
          {stacks.map((v, i) => (
            <StackCard tech={v} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
