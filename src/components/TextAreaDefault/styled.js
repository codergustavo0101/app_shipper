import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {MediumText, SemiBold} from '../TextComponents';

export const InputArea = styled.View`
  /* height: 66px; */
  width: 100%;
`;

export const TextArea = styled.View`
  flex-direction: row;
  margin-left: 2px;
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
  height: 121px;
  margin-top: 9px;
  padding: 19px 14px;
  font-weight: 500;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  text-align-vertical: top;
  color: ${props => props.textColor};
  border-radius: 10px;
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

export const LengthIndicatorArea = styled.View`
  position: absolute;
  right: 22px;
  bottom: 30px;
`;

export const LengthIndicator = styled(MediumText)`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${props => props.color};
`;
