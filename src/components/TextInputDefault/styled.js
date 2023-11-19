import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {MediumText, SemiBold} from '../TextComponents';

export const InputArea = styled.View`
  /* height: 66px; */
  width: 100%;
  flex: 1;
`;

export const TextArea = styled.View`
  flex-direction: row;
  margin-left: 9px;
  align-items: center;
`;

export const Description = styled(MediumText)`
  font-size: 12px;
  color: #6d6661;
`;

export const Label = styled(MediumText)`
  font-size: 14px;
  color: #6d6661;
`;

export const Input = styled(TextInput)`
  width: 100%;
  height: 45px;
  margin-top: 9px;
  padding: 0px 14px;
  font-weight: 500;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${props => props.textColor};
  border-radius: 70px;
  background-color: ${props => props.background};
  ${props => props.disabled && 'background-color: #faf9f9;'}
  border: 1px solid #EFEFEF;
`;

export const ErrorMessage = styled(SemiBold)`
  min-width: 256px;
  padding-left: 9px;
  width: 100%;
  height: 22px;
  color: ${props => props.errorMessageColor};
  font-size: 12px;
`;

export const IconArea = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  position: absolute;
  right: 27px;
  top: 14px;
`;
