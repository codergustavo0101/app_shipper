import styled from 'styled-components/native';
import {RegularText, MediumText, SemiBold} from '../TextComponents';

export const InputArea = styled.View`
  /* height: 66px; */
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

export const RangeArea = styled.View`
  margin-top: 8px;
  padding: 0px 12px;
  background: #faf9f9;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
`;

export const ValueArea = styled.View`
  flex-direction: row;
  align-self: flex-end;
  margin-top: 11px;
  margin-right: 11px;
`;

export const Value = styled(MediumText)`
  font-size: 14px;
  line-height: 21px;
  color: #6d6661;
`;

export const Unity = styled(RegularText)`
  font-size: 14px;
  line-height: 21px;
  color: #6d6661;
  margin-left: 5px;
`;

export const RangeInputArea = styled.View`
  margin-top: 11px;
  margin-bottom: 11px;
`;

export const AboveThumbArea = styled.View`
  width: 50px;
  justify-content: center;
  align-items: center;
  margin-left: -15px;
  margin-bottom: -8px;
`;

export const AboveThumbText = styled(RegularText)`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.3px;
  color: #686868;
`;
