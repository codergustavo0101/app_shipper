import api from './api';

const PreferencesService = {
  async updatePreferences(data) {
    const response = await api.put('/preferences', data);

    return response.data;
  },
  async getPreferences() {
    const response = await api.get('/preferences');

    return response.data;
  },
};

export default PreferencesService;
