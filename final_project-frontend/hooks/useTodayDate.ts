const useTodayDate = () => {
  const [year, month, day] = new Date()
    .toLocaleDateString("ko-KR")
    .split(".")
    .map((v) => v.trim());

  return `${year}년 ${month}월 ${day}일`;
};

export default useTodayDate;
