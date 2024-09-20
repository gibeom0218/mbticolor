import AssignColorHeader from '../components/AssignColorHeader';
import ColorSelectContent from '../components/ColorSelectContent';
import MbtiSelectContent from '../components/MbtiSelectContent';

const AssignColorPage = () => {
  return (
    <div className="flex flex-col px-[24px] py-[42px] tablet:px-[288px] gap-[50px]">
      <AssignColorHeader />
      <MbtiSelectContent />
      <ColorSelectContent />
    </div>
  );
};

export default AssignColorPage;
