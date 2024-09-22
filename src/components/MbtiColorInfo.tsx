import { useQuery } from '@tanstack/react-query';
import getColorSurvey from '../api/getColorSurvey';
import useFilterMbtiStore from '../store/filterMbtiStore';
import { ColorSurvey, ColorSurveyInfo } from '../types/colorSurvey';

const MbtiColorInfo = () => {
  const { filterMbti } = useFilterMbtiStore();

  const { data } = useQuery<ColorSurvey>({
    queryKey: ['getColorSurveys', filterMbti],
    queryFn: () => getColorSurvey(filterMbti || undefined, 10, 0),
  });

  return (
    <div className="flex w-[100%] flex-col items-start self-stretch">
      <a
        href="/assignColor"
        type="button"
        className="flex h-[59px] py-[20px] pl-[24px] pr-[100px] items-center self-stretch text-[#464E5E] text-[16px] rounded-[8px] border-[2px] border-dashed border-[#DEE3EC]  font-semibold hover:bg-[#F5F7FB]"
      >
        + 새 컬러 등록하기
      </a>
      <ul className="flex flex-col w-[100%]">
        {data && data?.results.length > 0 ? (
          data?.results.map((item: ColorSurveyInfo) => (
            <li key={item.id} className="flex list-none p-[16px] items-center gap-[16px] self-stretch justify-between">
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
            </li>
          ))
        ) : (
          <li className="text-[#BFC8DA] text-[16px]">No data available.</li>
        )}
      </ul>
    </div>
  );
};

export default MbtiColorInfo;
