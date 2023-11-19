import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {MediumText, SemiBold} from '../../components/TextComponents';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ContentArea = styled.View`
  padding: 0px 24px;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
  margin-top: 42px;
  margin-bottom: 33px;
`;

export const InputsArea = styled.View`
  width: 100%;
  ${props =>
    Platform.OS !== 'android' && props.isDropdownOpen && 'z-index: 99999;'}
`;

export const InputAreaInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 9px;
`;

export const InputBirthDate = styled.TextInput`
  width: 30.4%;
  height: 50px;
  padding: 6px 14px;
  font-weight: 500;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: #b1b2b2;
  border-radius: 70px;
  background-color: #faf9f9;
  ${props => props.disabled && 'background-color: #faf9f9;'}
  border: 1px solid #EFEFEF;
`;

export const DropdownAgeArea = styled.View`
  width: 30.4%;
  height: 44px;
`;

export const TextInputArea = styled.View`
  flex-direction: row;
  margin-left: 9px;
  align-items: center;
`;

export const LabelInput = styled(MediumText)`
  font-size: 14px;
  color: #6d6661;
`;

export const ErrorMessage = styled(SemiBold)`
  min-width: 256px;
  padding-left: 9px;
  width: 100%;
  height: 22px;
  color: ${props => props.errorMessageColor};
  font-size: 12px;
`;

export const DropdownGenderArea = styled.View`
  height: 45px;
  padding-top: 9px;
  margin-bottom: 15px;
`;

export const PageActionArea = styled.View`
  width: 268px;
  margin-top: 57px;
  margin-bottom: 66px;
  align-self: center;
`;

export const ContinueButton = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  background-color: #ff3f6d;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
`;

export const ContinueButtonText = styled(SemiBold)`
  font-size: 18px;
  color: #ffffff;
`;

export const LoadingArea = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
  color: #ffffff;
`;
