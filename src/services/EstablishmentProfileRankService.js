import api from './api';

const EstablishmentProfileRankService = {
  async rank({id, rank}) {
    const response = await api.post('/establishment-profile-rank', {
      id,
      rank,
    });

    return response.data;
  },
};

export default EstablishmentProfileRankService;
