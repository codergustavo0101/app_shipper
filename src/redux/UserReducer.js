const defaultLocation = 'São Paulo, SP';

const initialState = {
  id: '',
  name: '',
  birthdate: '',
  gender: '',
  description: null,
  incognito: false,
  profileRank: 0,
  matchRank: 0,
  location: defaultLocation,
  photos: [],
  pixKey: '',
  usersPlans: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'SET_NAME':
      return {
        ...state,
        displayName: action.payload,
      };
    case 'SET_BIRTHDATE':
      return {
        ...state,
        birthdate: action.payload,
      };
    case 'SET_GENDER':
      return {
        ...state,
        gender: action.payload,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.payload,
      };
    case 'SET_INCOGNITO':
      return {
        ...state,
        incognito: action.payload,
      };
    case 'SET_PROFILE_RANK':
      return {
        ...state,
        profileRank: action.payload,
      };
    case 'SET_MATCH_RANK':
      return {
        ...state,
        matchRank: action.payload,
      };
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    case 'SET_PHOTOS':
      return {
        ...state,
        photos: action.payload,
      };
    case 'ADD_PHOTO':
      state.photos.push(action.payload);

      const photosSorted = state.photos.sort((a, b) => a.order - b.order);

      return {
        ...state,
        photos: [...photosSorted],
      };
    case 'REMOVE_PHOTO':
      return {
        ...state,
        photos: state.photos.filter(photo => photo.order !== action.payload),
      };
    case 'SET_PIX_KEY':
      return {
        ...state,
        pixKey: action.payload,
      };
    case 'SET_USERS_PLANS':
      return {
        ...state,
        usersPlans: action.payload,
      };
    case 'SET_USER':
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

export default UserReducer;
