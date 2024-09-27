import api from './base';

const patchColorSurvey = async (id: number, mbti?: string, colorCode?: string, password?: string) => {
  try {
    const response = await api.patch(`/api/color-surveys/${id}`, {
      mbti,
      colorCode,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error posting color surveys:', error);
    throw error;
  }
};

export default patchColorSurvey;
