import mbtiTypes from '../constant/mbti';

const Header = () => {
  return (
    <header className="flex flex-col h-[150px] self-stretch rounded-[32px] justify-center items-center bg-[#F5F7FB] gap-2">
      <p className="text-[#464E5E] text-right text-[24px] font-normal">MBTI별</p>
      <p className="text-[#464E5E] text-right text-[24px] font-bold">좋아하는 컬러</p>
      <select className="w-[120px] mt-2 p-2 text-[#464E5E] text-[16px] rounded-lg border border-[#D1D5DB] bg-white focus:outline-none focus:ring-2 focus:ring-[#9CA3AF]">
        <option value="default">All</option>
        {mbtiTypes.map((type: string) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </header>
  );
};

export default Header;
