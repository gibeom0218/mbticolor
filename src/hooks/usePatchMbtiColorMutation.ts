import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import patchColorSurvey from '../api/patchColorSurvey';

const usePatchMbtiColorMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({
      id,
      mbti,
      colorCode,
      password,
    }: {
      id: number;
      mbti?: string;
      colorCode?: string;
      password?: string;
    }) => {
      // postColorSurvey 호출 시에 매개변수를 전달
      return patchColorSurvey(id, mbti, colorCode, password);
    },
    onSuccess: () => {
      // 성공 시 처리
      toast.success('수정에 성공하였습니다.');
      navigate('/');
    },
    onError: (error: any) => {
      // 에러 처리
      toast.error('수정에 실패했습니다:', error);
    },
  });
};

export default usePatchMbtiColorMutation;
