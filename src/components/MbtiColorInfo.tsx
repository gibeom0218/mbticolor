import { useState, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import getColorSurvey from '../api/getColorSurvey';
import useFilterMbtiStore from '../store/filterMbtiStore';
import { ColorSurvey, ColorSurveyInfo } from '../types/colorSurvey';
import SelectModifyDeleteModal from './modal/SelectModifyDeleteModal';
import TypePasswordModal from './modal/TypePasswordModal';
import useDeleteMbtiColorMutation from '../hooks/useDeleteMbtiColorMutation';
import usePassword from '../store/passwordStore';

const MbtiColorInfo = () => {
  const [isOpenModifyDeleteModal, setIsOpenModifyDeleteModal] = useState(false);
  const [isOpenPasswordModal, setIsOpenPasswordModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const { filterMbti } = useFilterMbtiStore();
  const { userPassword } = usePassword();
  const deleteMbtiColorMutation = useDeleteMbtiColorMutation();

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<ColorSurvey>({
    queryKey: ['getColorSurveys', filterMbti],
    queryFn: ({ pageParam = 0 }: any) => getColorSurvey(filterMbti || undefined, 10, pageParam), // offset을 pageParam * 10으로 설정
    getNextPageParam: (lastPage, allPages) => {
      // 현재 페이지 수
      const currentPage = allPages.length;
      // 다음 페이지의 offset 계산 (10씩 더하기)
      return currentPage < lastPage.count / 10 ? currentPage : undefined;
    },
    initialPageParam: 0, // 초기 페이지 파라미터 설정
  });

  const { ref, inView } = useInView({
    threshold: 1.0,
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
        className="flex h-[59px] py-[20px] pl-[24px] pr-[100px] items-center self-stretch text-[#464E5E] text-[16px] rounded-[8px] border-[2px] border-dashed border-[#DEE3EC] font-semibold hover:bg-[#F5F7FB]"
      >
        + 새 컬러 등록하기
      </a>
      <ul className="flex flex-col w-[100%]">
        {data?.pages.map((page) =>
          page.results.map((item: ColorSurveyInfo) => (
            <button
              type="button"
              key={item.id}
              className="flex list-none p-[16px] items-center gap-[16px] self-stretch justify-between hover:bg-gray-100"
              onClick={() => handleModifyDelete(item.id)}
            >
              <div className="flex gap-[10px] items-center">
                <p className="text-[#BFC8DA] text-[16px]">{item.id}</p>
                <div className="inline-flex p-[8px] items-start gap-[8px] rounded-[8px] bg-gray-100 text-[#464E5E] text-[16px] font-semibold">
                  {item.mbti}
                </div>
              </div>
              <div className="w-[100%] border-t-[2px] border-solid border-[#B0B0B0] mx-2" />
              <div className="flex gap-[8px] items-center">
                <div
                  className="w-[40px] h-[40px] rounded-[8px] border-[3px] border-solid border-[#E8E8E8]"
                  style={{ backgroundColor: item.colorCode }}
                />
                <p className="text-[#BFC8DA] text-[16px]">{item.colorCode}</p>
              </div>
            </button>
          )),
        )}
        {isFetching && <li className="text-[#BFC8DA] text-[16px]">Loading more...</li>}
      </ul>
      <div ref={ref} /> {/* 이 div가 뷰포트에 들어오면 다음 페이지를 불러옵니다 */}
      {isOpenModifyDeleteModal && (
        <SelectModifyDeleteModal closeModal={handleCloseModifyDeleteModal} handleDelete={handleDelete} id={deleteId} />
      )}
      {isOpenPasswordModal && <TypePasswordModal closeModal={handleClosePasswordModal} />}
    </div>
  );
};

export default MbtiColorInfo;
