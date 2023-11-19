import api from './api';

const EstablishmentService = {
  async getProfile() {
    const response = await api.get('/establishment/profile');

    return response.data;
  },
  async updateProfile({name, address, phone, instagram}) {
    const response = await api.put('/establishment/profile', {
      name,
      address,
      phone,
      instagram,
    });

    return response.data;
  },
  async deleteAccount() {
    const response = await api.delete('/establishment');

    return response.data;
  },
  async getClosestEstablishments({distance}) {
    const response = await api.get('/establishment?distance=' + distance);

    return response.data;
  },
};

export default EstablishmentService;
