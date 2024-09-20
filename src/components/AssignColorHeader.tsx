const AssignColorHeader = () => {
  return (
    <header className="flex w-[100%] justify-between items-center">
      <p className="text-[#464E5E] text-[32px] font-extrabold">새 컬러 등록하기</p>
      <div className="p-[12px] inline-flex rounded-[24px] bg-[#F5F7FB]">
        <img src="/icons/close.png" alt="닫힘 아이콘" />
      </div>
    </header>
  );
};

export default AssignColorHeader;