import api from './api';

const ProfileRankService = {
  async rank({id, rank}) {
    const response = await api.post('/profile-rank', {
      id,
      rank,
    });

    return response.data;
  },
};

export default ProfileRankService;
