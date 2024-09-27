import { create } from 'zustand';
import { MbtiOptions } from '../types/mbtiOptions';

interface SelectedMbtiState {
  selectedMbti: MbtiOptions;
  setSelectedMbti: (mbti: MbtiOptions) => void;
}

// devtools를 사용하는 경우, 타입을 지정해줘야 합니다.
const useSelectedMbtiStore = create<SelectedMbtiState>((set) => ({
  selectedMbti: {
    EI: null,
    SN: null,
    TF: null,
    JP: null,
  },
  setSelectedMbti: (mbti: MbtiOptions) => set({ selectedMbti: mbti }),
}));

export default useSelectedMbtiStore;
