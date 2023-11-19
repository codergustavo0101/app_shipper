import api from './api';

const BillingService = {
  async createVIPBilling({months}) {
    const response = await api.post(`/billing/${months}`);

    return response.data;
  },
};

export default BillingService;
