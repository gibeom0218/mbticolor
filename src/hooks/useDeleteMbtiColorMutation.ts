import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import deleteColorSurvey from '../api/deleteColorSurvey';
import useFilterMbtiStore from '../store/filterMbtiStore';

const useDeleteMbtiColorMutation = () => {
  const queryClient = useQueryClient();
  const { filterMbti } = useFilterMbtiStore();

  return useMutation({
    mutationFn: ({ id, password }: { id: number; password: string }) => {
      // postColorSurvey 호출 시에 매개변수를 전달
      return deleteColorSurvey(id, password);
    },
    onSuccess: () => {
      // 성공 시 처리
      toast.success('삭제에 성공하였습니다.');
      queryClient.invalidateQueries({ queryKey: ['getColorSurveys', filterMbti] });
    },
    onError: (error: any) => {
      // 에러 처리
      toast.error('삭제에 실패했습니다:', error);
    },
  });
};

export default useDeleteMbtiColorMutation;
