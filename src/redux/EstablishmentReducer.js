const initialState = {
  id: '',
  name: '',
  lat: '',
  lng: '',
  address: '',
  phone: '',
  instagram: '',
  photos: [],
  usersPlans: null,
};

const EstablishmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'SET_LAT':
      return {
        ...state,
        lat: action.payload,
      };
    case 'SET_LNG':
      return {
        ...state,
        lng: action.payload,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };
    case 'SET_PHONE':
      return {
        ...state,
        phone: action.payload,
      };
    case 'SET_INSTAGRAM':
      return {
        ...state,
        instagram: action.payload,
      };
    case 'SET_PHOTOS':
      return {
        ...state,
        photos: action.payload,
      };
    case 'SET_USERS_PLANS':
      return {
        ...state,
        usersPlans: action.payload,
      };
    case 'SET_ESTABLISHMENT':
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default EstablishmentReducer;
