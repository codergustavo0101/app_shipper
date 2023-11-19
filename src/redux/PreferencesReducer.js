const initialState = {
  city: '',
  minAgePreference: 22,
  maxAgePreference: 34,
  maxDistance: 50,
  sexPreference: 'BOTH',
};

const PreferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        city: action.payload,
      };
    case 'SET_MIN_AGE_PREFERENCE':
      return {
        ...state,
        minAgePreference: action.payload,
      };
    case 'SET_MAX_AGE_PREFERENCE':
      return {
        ...state,
        maxAgePreference: action.payload,
      };
    case 'SET_MAX_DISTANCE':
      return {
        ...state,
        maxDistance: action.payload,
      };
    case 'SEX_PREFERENCE':
      return {
        ...state,
        sexPreference: action.payload,
      };
    case 'SET_AGES_PREFERENCE':
      return {
        ...state,
        minAgePreference: action.payload.minAgePreference,
        maxAgePreference: action.payload.maxAgePreference,
      };
    case 'SET_PREFERENCES':
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

export default PreferencesReducer;
