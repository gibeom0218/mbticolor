import useSelectedColorStore from '../store/selectedColorStore';
import useSelectedMbtiStore from '../store/selectedMbtiStore';
import checkMbti from '../util/checkMbti';

const AssignColorButton = () => {
  const { selectedColor } = useSelectedColorStore();
  const { selectedMbti } = useSelectedMbtiStore();

  const handleAssignColor = () => {
    if (checkMbti(selectedMbti)) {
      console.log(selectedColor);
    }
  };

  return (
    <button
      onClick={handleAssignColor}
      type="button"
      className="flex px-[22px] py-[22px] justify-center items-center rounded-[16px] bg-[#464E5E] text-[24px] font-bold text-white"
    >
      컬러 등록
    </button>
  );
};
export default AssignColorButton;
