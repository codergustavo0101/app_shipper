import api from './api';

const CheckinsService = {
  async getCheckins({id}) {
    const response = await api.get(`/checkins/${id}`);

    return response.data;
  },
  async checkin({establishmentId}) {
    const response = await api.post('/checkins', {
      establishmentId,
    });

    return response.data;
  },
};

export default CheckinsService;
