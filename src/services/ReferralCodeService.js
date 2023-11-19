import api from './api';

const ReferralCodeService = {
  async getMyReferralCode() {
    const response = await api.get('/referral-code');

    return response.data;
  },
};

export default ReferralCodeService;
