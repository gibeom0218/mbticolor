import { create } from 'zustand';

interface PasswordState {
  userPassword: string;
  setUserPassword: (userPassword: string) => void;
}

const usePassword = create<PasswordState>((set) => ({
  userPassword: '',
  setUserPassword: (userPassword) => set({ userPassword }), // 축약형 사용
}));

export default usePassword;
