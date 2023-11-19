import api from './api';

const CouponsService = {
  async getCoupons() {
    const response = await api.get('/coupons');

    return response.data;
  },
  async createCoupon({product, discount, quantity, description}) {
    const response = await api.post('/coupons', {
      product,
      discount,
      quantity,
      description,
    });

    return response.data;
  },
  async getCoupon({couponId, userCouponId}) {
    const response = await api.get(`/coupons/${couponId}/${userCouponId}`);

    return response.data;
  },
  async validateCoupon({id}) {
    const response = await api.post('/coupons/validate', {
      id,
    });

    return response.data;
  },
};

export default CouponsService;
