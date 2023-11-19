import api from './api';

const LocationService = {
  async reverseGeocode({lat, lng}) {
    const response = await api.get(`/location/reverse-geocoding/${lat}/${lng}`);

    return response.data;
  },
};

export default LocationService;
