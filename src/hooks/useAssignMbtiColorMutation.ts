import { useMutation } from '@tanstack/react-query';
import postColorSurvey from '../api/postColorSurvey';
import { toast } from 'react-toastify';

const useAssignMbtiColorMutation = () => {
  return useMutation({
    mutationFn: (mbti?: string, colorCode?: number, password?: number) => {
      // postColorSurvey 호출 시에 매개변수를 전달
      return postColorSurvey(mbti, colorCode, password);
    },
    onSuccess: () => {
      // 성공 시 처리
      toast.success('등록에 성공하였습니다.');
    },
    onError: (error: any) => {
      // 에러 처리
      toast.error('등록에 실패했습니다:', error);
    },
  });
};

export default useAssignMbtiColorMutation;
