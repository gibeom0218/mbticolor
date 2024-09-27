import AssignColorButton from '../components/AssignColorButton';
import AssignColorHeader from '../components/AssignColorHeader';
import ColorSelectContent from '../components/ColorSelectContent';
import MbtiSelectContent from '../components/MbtiSelectContent';
import { FunType } from '../types/funType';

const AssignColorPage = ({ type }: FunType) => {
  return (
    <div className="flex flex-col h-screen px-[24px] py-[42px] tablet:px-[288px] gap-[50px]">
      <AssignColorHeader type={type} />
      <MbtiSelectContent />
      <ColorSelectContent />
      <AssignColorButton />
    </div>
  );
};

export default AssignColorPage;
