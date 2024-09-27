import api from './base';

const getColorSurvey = async (mbti?: string, limit?: number, offset?: number) => {
  try {
    const response = await api.get('/api/color-surveys', {
      params: {
        mbti,
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default getColorSurvey;
