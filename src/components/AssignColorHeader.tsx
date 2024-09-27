import { FunType } from '../types/funType';

const AssignColorHeader = ({ type }: FunType) => {
  return (
    <header className="flex w-[100%] justify-between items-center">
      <p className="text-[#464E5E] text-[32px] font-extrabold">
        {type === 'Assign' ? '새 컬러 등록하기' : '새 컬러 수정하기'}
      </p>
      <a href="/" className="p-[12px] inline-flex rounded-[24px] bg-[#F5F7FB]">
        <img src="/icons/close.png" alt="닫힘 아이콘" />
      </a>
    </header>
  );
};

export default AssignColorHeader;
