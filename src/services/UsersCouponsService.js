import api from './api';

const UsersCouponsService = {
  async findAll() {
    const response = await api.get('/users-coupons');

    return response.data;
  },
};

export default UsersCouponsService;
