import React, { useState } from 'react';

interface TypePasswordModalProps {
  closeModal: () => void;
}

const TypePasswordModal = ({ closeModal }: TypePasswordModalProps) => {
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 숫자만 허용하고 4자리까지만 입력
    if (/^\d*$/.test(inputValue) && inputValue.length <= 4) {
      setPassword(inputValue);
      // 4자리 숫자일 때만 유효성 검사 통과
      setIsValid(inputValue.length === 4);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full h-auto">
        <h2 className="text-[30px] font-bold mb-4">비밀번호 입력</h2>
        <input
          type="text"
          value={password}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
          placeholder="숫자 4자리를 입력하세요"
          maxLength={4}
        />
        {!isValid && password.length > 0 && <p className="text-red-500 text-sm mb-4">4자리 숫자만 입력 가능합니다.</p>}
        <button
          type="button"
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
            isValid ? '' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={closeModal}
          disabled={!isValid}
        >
          입력 완료
        </button>
      </div>
    </div>
  );
};

export default TypePasswordModal;
