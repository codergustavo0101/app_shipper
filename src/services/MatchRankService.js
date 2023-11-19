import api from './api';

const MatchRankService = {
  async rank({id, rank}) {
    const response = await api.post('/match-rank', {
      id,
      rank,
    });

    return response.data;
  },
};

export default MatchRankService;
