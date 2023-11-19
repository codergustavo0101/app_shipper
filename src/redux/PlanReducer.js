const initialState = {
  skipPlanScreen: false,
};

const PlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SKIP_PLAN_SCREEN':
      return {
        ...state,
        skipPlanScreen: action.payload,
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default PlanReducer;
