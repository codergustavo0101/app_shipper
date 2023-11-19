const initialState = {
  'Você tem filhos? (Opcional)': null,
  'Você fuma? (Opcional)': null,
  'Qual é sua altura? (Opcional)': null,
  'Qual é sua escolaridade? (Opcional)': null,
  'Qual é sua profissão? (Opcional)': null,
  'Você ta vacinado do COVID-19? (Opcional)': null,
  'Instagram (Opcional)': '',
  'Linkedin (Opcional)': '',
  'Morando em (Opcional)': null,
  'Orientação sexual (Opcional)': null,
};

const OtherInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_OTHER_INFORMATION':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_OTHER_INFORMATION_FIELD':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default OtherInformationReducer;
