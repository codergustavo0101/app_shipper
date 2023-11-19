import api from './api';

const AuthService = {
  async refreshToken() {
    const response = await api.post('/auth/refresh');

    return response.data;
  },
  async checkEmail(email) {
    const response = await api.get(`/auth/check-email/${email}`);
    return response.data;
  },
  async userRegister({
    referralCode,
    name,
    cpf,
    email,
    password,
    birthDate,
    gender,
    lat,
    lng,
  }) {
    const response = await api.post('/auth/user/register', {
      referralCode,
      name,
      cpf,
      email,
      password,
      birthDate,
      gender,
      lat,
      lng,
    });

    return response.data;
  },
  async establishmentRegister({
    name,
    cnpj,
    email,
    password,
    address,
    phone,
    instagram,
  }) {
    const response = await api.post('/auth/establishment/register', {
      name,
      cnpj,
      email,
      password,
      address,
      phone,
      instagram,
    });

    return response.data;
  },
  async login(email, password) {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    return response.data;
  },
  async recoverPassword(email) {
    const response = await api.post('/auth/recover-password', {
      email,
    });

    return response.data;
  },
  async resetPassword(token, password) {
    const response = await api.post(`/auth/recover-password/${token}`, {
      token,
      password,
      passwordConfirmation: password,
    });

    return response.data;
  },
};

export default AuthService;
