import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';
import OtherInformationReducer from './OtherInformationReducer';
import PreferencesReducer from './PreferencesReducer';
import UserReducer from './UserReducer';
import EstablishmentReducer from './EstablishmentReducer';
import PlanReducer from './PlanReducer';

export default combineReducers({
  auth: AuthReducer,
  otherInformation: OtherInformationReducer,
  preferences: PreferencesReducer,
  user: UserReducer,
  establishment: EstablishmentReducer,
  plan: PlanReducer,
});
