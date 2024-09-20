import AssignColorButton from '../components/AssignColorButton';
import AssignColorHeader from '../components/AssignColorHeader';
import ColorSelectContent from '../components/ColorSelectContent';
import MbtiSelectContent from '../components/MbtiSelectContent';

const AssignColorPage = () => {
  return (
    <div className="flex flex-col h-screen px-[24px] py-[42px] tablet:px-[288px] gap-[50px]">
      <AssignColorHeader />
      <MbtiSelectContent />
      <ColorSelectContent />
      <AssignColorButton />
    </div>
  );
};

export default AssignColorPage;
