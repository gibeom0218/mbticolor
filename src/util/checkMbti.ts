import { MbtiOptions } from '../types/mbtiOptions';

const checkMbti = (mbti: MbtiOptions) => {
  if (mbti.EI && mbti.JP && mbti.SN && mbti.TF) {
    return true;
  }
  return false;
};

export default checkMbti;
