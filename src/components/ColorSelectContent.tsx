import React, { useState } from 'react';
import SelectColorModal from './modal/SelectColorModal';
import useSelectedColorStore from '../store/selectedColorStore';

const ColorSelectContent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { selectedColor } = useSelectedColorStore();

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex gap-[3px] items-center">
        <p className="text-[#464E5E] text-[24px] font-medium">컬러</p>
        <button type="button" className="p-[8px] inline-flex rounded-[8px] bg-[#F5F7FB]" onClick={handleOpenModal}>
          <img src="/icons/repeat.svg" alt="랜덤 아이콘" />
        </button>
      </div>
      <div className="inline-flex p-[25px] justify-between items-center rounded-[16px] border-[2px] border-solid border-[#E7EBF2]">
        <p className="text-[#8892A6] text-[24px] font-medium">{selectedColor}</p>
        <div
          style={{ backgroundColor: selectedColor }}
          className="w-[40px] h-[40px] rounded-[8px] border-[3px] border-solid border-[#E8E8E8]"
        />
      </div>
      {isOpenModal && <SelectColorModal closeModal={handleCloseModal} />}
    </div>
  );
};

export default ColorSelectContent;
