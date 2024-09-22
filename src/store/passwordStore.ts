import { create } from 'zustand';

interface PasswordState {
  password: string;
  setPassword: (password: string) => void;
}

// devtools를 사용하는 경우, 타입을 지정해줘야 합니다.
const usePassword = create<PasswordState>((set) => ({
  password: '',
  setPassword: (password: string) => set({ password: password }),
}));

export default usePassword;
