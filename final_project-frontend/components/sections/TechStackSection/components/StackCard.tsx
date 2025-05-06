import { StackCardProps } from "@/types/type";

const StackCard = ({ tech }: StackCardProps) => {
  return (
    <li className="flex flex-col items-center bg-[#2c2f36] rounded-xl shadow-xl p-4 w-28 h-36 hover:scale-105 transition-transform duration-300 border border-transparent hover:border-green-300">
      <img src={`/${tech}.svg`} alt={tech} className="w-16 h-16 mb-2" />
      <p className="text-green-400 font-semibold text-sm text-center">{tech}</p>
    </li>
  );
};

export default StackCard;
