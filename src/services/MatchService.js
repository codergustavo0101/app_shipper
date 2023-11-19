import api from './api';

const MatchService = {
  async likeUser({id}) {
    const response = await api.post('/match/like', {
      id,
    });

    return response.data;
  },
  async dislikeUser({id}) {
    const response = await api.post('/match/dislike', {
      id,
    });

    return response.data;
  },
  async getPossibleMatches() {
    const response = await api.get('/match/user-list');

    return response.data;
  },
};

export default MatchService;
