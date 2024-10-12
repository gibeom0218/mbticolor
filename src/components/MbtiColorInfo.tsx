import { useState, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import CircleLoader from 'react-spinners/ClipLoader';
import getColorSurvey from '../api/getColorSurvey';
import useFilterMbtiStore from '../store/filterMbtiStore';
import { ColorSurvey, ColorSurveyInfo } from '../types/colorSurvey';
import SelectModifyDeleteModal from './modal/SelectModifyDeleteModal';
import TypePasswordModal from './modal/TypePasswordModal';
import SkeletonLoader from './SkeletonLoader';
import useDeleteMbtiColorMutation from '../hooks/useDeleteMbtiColorMutation';
import usePassword from '../store/passwordStore';

const MbtiColorInfo = () => {
  const [isOpenModifyDeleteModal, setIsOpenModifyDeleteModal] = useState(false);
  const [isOpenPasswordModal, setIsOpenPasswordModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const { filterMbti } = useFilterMbtiStore();
  const { userPassword } = usePassword();
  const deleteMbtiColorMutation = useDeleteMbtiColorMutation();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery<ColorSurvey>({
    queryKey: ['getColorSurveys', filterMbti],
    queryFn: ({ pageParam = 0 }: any) => getColorSurvey(filterMbti || undefined, 12, pageParam), // offset을 pageParam * 10으로 설정
    getNextPageParam: (lastPage, allPages) => {
      // 현재 페이지 수
      const currentPage = allPages.length;
      // 다음 페이지의 offset 계산 (10씩 더하기)
      return currentPage < lastPage.count / 12 ? currentPage : undefined;
    },
    initialPageParam: 0, // 초기 페이지 파라미터 설정
  });

  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const handleModifyDelete = (id: number) => {
    setDeleteId(id);
    setIsOpenModifyDeleteModal(true);
  };

  const handleCloseModifyDeleteModal = () => {
    setIsOpenModifyDeleteModal(false);
  };

  const handleDelete = () => {
    setIsOpenModifyDeleteModal(false);
    setIsOpenPasswordModal(true);
  };

  const handleClosePasswordModal = () => {
    setIsOpenPasswordModal(false);
    deleteMbtiColorMutation.mutate({
      id: deleteId,
      password: userPassword,
    });
  };

  return (
    <div className="flex w-[100%] flex-col items-start self-stretch">
      <a
        href="/assignColor"
        type="button"
        className="flex h-[59px] py-[20px] pl-[24px] pr-[100px] mb-4 items-center self-stretch text-[#464E5E] text-[16px] rounded-[8px] border-[2px] border-dashed border-[#DEE3EC] font-semibold hover:bg-[#F5F7FB]"
      >
        + 새 컬러 등록하기
      </a>
      <ul className="grid grid-cols-2 gap-2 w-[100%]">
        {isLoading
          ? [...Array(12)].map(() => <SkeletonLoader />) // 데이터 로딩 중 SkeletonLoader 보여줌
          : data?.pages.map((page) =>
              page.results.map((item: ColorSurveyInfo) => (
                <button
                  type="button"
                  key={item.id}
                  className="flex flex-col list-none p-[16px] items-start gap-[8px] self-stretch justify-between hover:bg-gray-100 rounded-[12px] border border-gray-300 shadow-md"
                  onClick={() => handleModifyDelete(item.id)}
                >
                  <div className="flex justify-between w-[100%]">
                    <div className="flex gap-[10px] items-center">
                      <p className="text-[16px] font-bold">ID </p>
                      <p className="text-[#BFC8DA] text-[16px]">{item.id}</p>
                    </div>
                    <div className="inline-flex p-[8px] items-start gap-[8px] rounded-[8px] bg-gray-100 text-[#464E5E] text-[16px] font-semibold">
                      {item.mbti}
                    </div>
                  </div>

                  <div className="w-full border-t-[2px] border-solid border-[#B0B0B0] my-2" />

                  <div className="flex gap-[8px] items-center">
                    <p className="text-[16px] font-bold">Color 😍</p>
                    <div
                      className="w-[40px] h-[40px] rounded-[8px] border-[3px] border-solid border-[#E8E8E8]"
                      style={{ backgroundColor: item.colorCode }}
                    />
                  </div>
                </button>
              )),
            )}
        <div ref={ref} /> {/* 이 div가 뷰포트에 들어오면 다음 페이지를 불러옵니다 */}
      </ul>
      {isFetchingNextPage && (
        <div className="flex w-[100%] justify-center items-center mt-4">
          <CircleLoader color="#3498db" size={50} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      )}
      {isOpenModifyDeleteModal && (
        <SelectModifyDeleteModal closeModal={handleCloseModifyDeleteModal} handleDelete={handleDelete} id={deleteId} />
      )}
      {isOpenPasswordModal && <TypePasswordModal closeModal={handleClosePasswordModal} />}
    </div>
  );
};

export default MbtiColorInfo;
