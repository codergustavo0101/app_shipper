import api from './api';

const ReferralsService = {
  async getReferrals() {
    const response = await api.get('/referrals');

    return response.data;
  },
};

export default ReferralsService;
