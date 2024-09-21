import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface SelectColorModalProps {
  closeModal: () => void;
}

const SelectColorModal = ({ closeModal }: SelectColorModalProps) => {
  const [color, setColor] = useState<string>('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full h-auto">
        <h2 className="text-[30px] font-bold mb-4">컬러 선택하기</h2>
        <p className="text-gray-600 mb-4">원하시는 컬러를 선택해주세요</p>
        <div className="flex justify-center items-center mt-12 mb-12" style={{ transform: 'scale(1.2)' }}>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={closeModal}
        >
          선택
        </button>
      </div>
    </div>
  );
};

export default SelectColorModal;
