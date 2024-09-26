interface SelectModifyDeleteModalProps {
  closeModal: () => void;
  handleDelete: () => void;
}

const SelectModifyDeleteModal = ({ closeModal, handleDelete }: SelectModifyDeleteModalProps) => {
  const handleEdit = () => {
    console.log('111111');
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full h-auto">
        <h2 className="text-[30px] font-bold mb-4">항목 수정 및 삭제</h2>
        <p className="text-gray-600 mb-4">해당 항목을 수정하거나 삭제할 수 있습니다.</p>

        <div className="flex justify-center items-center mt-12 mb-12">
          <button
            type="button"
            className="px-8 py-4 bg-red-500 text-white text-lg rounded hover:bg-red-600 mr-4"
            onClick={handleDelete}
          >
            삭제하기
          </button>

          {/* 수정하기 버튼 */}
          <button
            type="button"
            className="px-8 py-4 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
            onClick={handleEdit}
          >
            수정하기
          </button>
        </div>

        <button
          type="button"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-4"
          onClick={closeModal}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default SelectModifyDeleteModal;
