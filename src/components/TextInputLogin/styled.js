import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {SemiBold} from '../TextComponents';

export const InputArea = styled.View`
  height: 66px;
  width: 100%;
`;

export const Input = styled(TextInput)`
  width: 100%;
  height: 50px;
  padding: 0px 22px;
  font-weight: 500;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${props => props.textColor};
  border-radius: 70px;
  background-color: ${props => props.background};
  ${props => props.disabled && 'background-color: #faf9f9;'}
  ${props => props.bordered && 'border: 1px solid #00000082;'}
`;

export const ErrorMessage = styled(SemiBold)`
  min-width: 256px;
  padding-left: 22px;
  width: 100%;
  height: 16px;
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
