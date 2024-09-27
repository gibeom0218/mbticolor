import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'; // useParams 사용
import getColorSurveyById from '../api/getColorSurveyById';
import AssignColorButton from '../components/AssignColorButton';
import AssignColorHeader from '../components/AssignColorHeader';
import ColorSelectContent from '../components/ColorSelectContent';
import MbtiSelectContent from '../components/MbtiSelectContent';
import { FunType } from '../types/funType';

const AssignColorPage = ({ type }: FunType) => {
  const { id } = useParams<{ id: string }>();

  // React Query로 서버에서 데이터 가져오기
  const { data, error, isLoading } = useQuery({
    queryKey: ['colorSurvey', id],
    queryFn: () => getColorSurveyById(Number(id)),
    enabled: !!id && type === 'Modify',
  });

  return (
    <div className="flex flex-col h-screen px-[24px] py-[42px] tablet:px-[288px] gap-[50px]">
      <AssignColorHeader type={type} />
      <MbtiSelectContent mbti={data?.mbti} />
      <ColorSelectContent />
      <AssignColorButton />
    </div>
  );
};

export default AssignColorPage;
