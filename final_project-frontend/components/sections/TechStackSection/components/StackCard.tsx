import { StackCardProps } from "@/types/type";

const StackCard = ({ tech }: StackCardProps) => {
  return (
    <li className="flex flex-col items-center">
      <img
        src={`/${tech}.svg`}
        className="w-20 h-20 shadow-lg transition-transform transform hover:scale-110"
      />
      <p className="text-black font-bold">{tech}</p>
    </li>
  );
};

export default StackCard;
