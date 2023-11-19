import api from './api';

const UserService = {
  async getProfile() {
    const response = await api.get('/user/profile');

    return response.data;
  },
  async updateProfile({description, incognito = false}) {
    const response = await api.put('/user/profile', {
      description,
      incognito,
    });

    return response.data;
  },
  async deleteAccount() {
    const response = await api.delete('/user');

    return response.data;
  },
  async updatePix({pix}) {
    const response = await api.put('/user/pix', {
      pix,
    });

    return response.data;
  },
};

export default UserService;
