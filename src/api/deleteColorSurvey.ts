import api from './base';

const deleteColorSurvey = async (id: number, password: string) => {
  try {
    const response = await api.delete(`/api/color-surveys/${id}`, {
      data: {
        password,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error posting color surveys:', error);
    throw error;
  }
};

export default deleteColorSurvey;
