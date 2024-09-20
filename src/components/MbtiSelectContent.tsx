import { useState } from 'react';
import { MbtiOptions } from '../types/mbtiOptions';
import mbtiCategories from '../constant/mbtiCategories';

const MbtiSelectContent = () => {
  const [selectedOptions, setSelectedOptions] = useState<MbtiOptions>({
    EI: null,
    SN: null,
    TF: null,
    JP: null,
  });

  // 버튼 클릭 시 상태 업데이트
  const handleSelect = (category: string, type: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: type, // 선택된 항목만 활성화
    }));
  };

  return (
    <div className="flex flex-col w-[100%] gap-[20px]">
      <p className="text-[#464E5E] text-[24px] font-medium">MBTI</p>
      {mbtiCategories.map((category) => (
        <div key={category.category} className="grid grid-cols-2 gap-[10px]">
          {category.options.map((item) => (
            <button
              key={item.type}
              type="button"
              onClick={() => handleSelect(category.category as keyof MbtiOptions, item.type)}
              className={`flex rounded-[16px] border-[2px] border-solid h-[76px] py-[14px] px-[40px] justify-center items-center gap-[32px] hover:bg-[#F5F7FB]
                ${
                  selectedOptions[category.category as keyof MbtiOptions] === item.type
                    ? 'bg-[#464E5E] border-[#464E5E] ' // 선택된 항목 스타일
                    : 'bg-white border-[#E7EBF2]' // 비활성화된 항목 스타일
                }`}
            >
              <p
                className={` text-[40px] font-medium 
              ${
                selectedOptions[category.category as keyof MbtiOptions] === item.type
                  ? 'text-white' // 선택된 항목 스타일
                  : 'text-[#464E5E] ' // 비활성화된 항목 스타일
              }
              `}
              >
                {item.type}
              </p>
              <p className="text-[#8892A6] text-[24px] font-medium">{item.name}</p>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MbtiSelectContent;
