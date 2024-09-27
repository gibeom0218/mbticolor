import api from './base';

const getColorSurveyById = async (id: number) => {
  try {
    const response = await api.get(`/api/color-surveys/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default getColorSurveyById;
