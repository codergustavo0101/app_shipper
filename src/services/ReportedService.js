import api from './api';

const ReportedService = {
  async reportUser({id}) {
    const response = await api.post('/reported', {
      userId: id,
    });

    return response.data;
  },
};

export default ReportedService;
