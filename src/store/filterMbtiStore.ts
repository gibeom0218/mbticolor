import { create } from 'zustand';

interface FilterMbtiState {
  filterMbti: string;
  setFilterMbti: (mbti: string) => void;
}

// devtools를 사용하는 경우, 타입을 지정해줘야 합니다.
const useFilterMbtiStore = create<FilterMbtiState>((set) => ({
  filterMbti: '',
  setFilterMbti: (mbti: string) => set({ filterMbti: mbti }),
}));

export default useFilterMbtiStore;
