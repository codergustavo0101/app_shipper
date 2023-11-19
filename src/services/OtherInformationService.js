import api from './api';

const OtherInformationService = {
  async getOtherInformation() {
    const response = await api.get('/other-information');

    return response.data;
  },
  async updateOtherInformation({question, answer}) {
    const response = await api.put('/other-information', {
      question,
      answer,
    });

    return response.data;
  },
};

export default OtherInformationService;
