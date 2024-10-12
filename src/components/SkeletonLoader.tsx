const SkeletonLoader = () => {
  return (
    <div className="flex flex-col list-none p-[16px] items-start gap-[8px] self-stretch justify-between bg-gray-200 animate-pulse rounded-[12px] border border-gray-300 shadow-md">
      <div className="flex justify-between w-[100%]">
        <div className="flex gap-[10px] items-center">
          <div className="h-[16px] w-[30px] bg-gray-300 rounded" />
          <div className="h-[16px] w-[60px] bg-gray-300 rounded" />
        </div>
        <div className="h-[32px] w-[80px] bg-gray-300 rounded" />
      </div>

      <div className="w-full border-t-[2px] border-solid border-gray-300 my-2" />

      <div className="flex gap-[8px] items-center">
        <div className="h-[16px] w-[60px] bg-gray-300 rounded" />
        <div className="w-[40px] h-[40px] bg-gray-300 rounded-[8px]" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
