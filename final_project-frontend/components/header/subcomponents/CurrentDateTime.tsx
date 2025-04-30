import { CurrentDateTimeProps } from "@/types/type";

const CurrentDateTime = ({ label, value, ml }: CurrentDateTimeProps) => {
  return (
    <div className="w-48 flex items-center justify-between">
      <strong style={{ marginLeft: ml }}>{label}</strong>
      <div>{value}</div>
      <div className="w-2 h-2 bg-[#2dcf6c] rounded-full"></div>
    </div>
  );
};

export default CurrentDateTime;
