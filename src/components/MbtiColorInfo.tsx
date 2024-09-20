const mbtiColors = [
  { code: '1326', type: 'ENTJ', color: '#9441FF' },
  { code: '1423', type: 'INFP', color: '#FF6F61' },
  { code: '2365', type: 'INTJ', color: '#6B5B93' },
  { code: '2365', type: 'INTJ', color: '#6B5B93' },
  { code: '2365', type: 'INTJ', color: '#6B5B93' },
  { code: '2365', type: 'INTJ', color: '#6B5B93' },
  { code: '2365', type: 'INTJ', color: '#6B5B93' },

  // 추가 데이터 예시...
];

const MbtiColorInfo = () => {
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
        {mbtiColors.map(({ code, type, color }) => (
          <li key={code} className="flex list-none p-[16px] items-center gap-[16px] self-stretch justify-between">
            <div className="flex gap-[10px] items-center">
              <p className="text-[#BFC8DA] text-[16px]">{code}</p>
              <div className="inline-flex p-[8px] items-start gap-[8px] rounded-[8px] bg-gray-100 text-[#464E5E] text-[16px] font-semibold">
                {type}
              </div>
            </div>
            <div className="w-[100%] border-t-[2px] border-solid border-[#B0B0B0] mx-2" />
            <div className="flex gap-[8px] items-center">
              <div
                className="w-[40px] h-[40px] rounded-[8px] border-[3px] border-solid border-[#E8E8E8] bg-[color]"
                style={{ backgroundColor: color }}
              />
              <p className="text-[#BFC8DA] text-[16px]">{color}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MbtiColorInfo;
