import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import postColorSurvey from '../api/postColorSurvey';

const useAssignMbtiColorMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ mbti, colorCode, password }: { mbti?: string; colorCode?: string; password?: string }) => {
      // postColorSurvey 호출 시에 매개변수를 전달
      return postColorSurvey(mbti, colorCode, password);
    },
    onSuccess: () => {
      // 성공 시 처리
      toast.success('등록에 성공하였습니다.');
      navigate('/');
    },
    onError: (error: any) => {
      // 에러 처리
      toast.error('등록에 실패했습니다:', error);
    },
  });
};

export default useAssignMbtiColorMutation;
