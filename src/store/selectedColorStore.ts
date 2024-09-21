import { create } from 'zustand';

interface SelectedColorState {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

// devtools를 사용하는 경우, 타입을 지정해줘야 합니다.
const useSelectedColorStore = create<SelectedColorState>((set) => ({
  selectedColor: '#ffffff',
  setSelectedColor: (color: string) => set({ selectedColor: color }),
}));

export default useSelectedColorStore;
