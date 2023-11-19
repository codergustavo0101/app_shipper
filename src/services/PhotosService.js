import api from './api';

const PhotosService = {
  async updateProfilePicture(base64, order = 1) {
    const response = await api.post('/photos/profile-picture', {
      file: base64,
      order,
    });

    return response.data;
  },
  async removeProfilePicture(order = 1) {
    const response = await api.delete(`/photos/profile-picture/${order}`);

    return response.data;
  },
  async updateMenu(base64) {
    const response = await api.post('/photos/menu', {
      file: base64,
    });

    return response.data;
  },
};

export default PhotosService;
