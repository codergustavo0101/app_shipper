import styled from 'styled-components/native';
import {RegularText, MediumText, SemiBold} from '../TextComponents';

export const InputArea = styled.View`
  width: 100%;
`;

export const TextArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled(RegularText)`
  font-size: 12px;
  color: #6d6661;
`;

export const Label = styled(RegularText)`
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

export const LocationArea = styled.View`
  height: 37px;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border: 1.5px solid #cacaca;
  border-radius: 60px;
`;

export const Option = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right-width: ${props => (props.isLastOne ? 0 : '1.5px')};
  border-right-color: #cacaca;
`;

export const OptionTextSelectedArea = styled.View`
  background-color: #ff3f6d;
  padding: 7px 20px;
  border-radius: 60px;
`;

export const OptionTextSelected = styled(MediumText)`
  font-size: 14px;
  letter-spacing: -0.3px;
  color: #fff;
`;

export const OptionText = styled(RegularText)`
  font-size: 13px;
  letter-spacing: -0.3px;
  color: #6d6661;
`;
