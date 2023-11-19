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

export const LocationArea = styled.View`
  padding: 10px 12px;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  background: #faf9f9;
  border: 1px solid #efefef;
  border-radius: 30px;
`;

export const MyLocationLabel = styled(MediumText)`
  font-size: 13px;
  line-height: 20px;
  color: #ff3f6d;
`;

export const MyLocationValue = styled(RegularText)`
  font-size: 13px;
  line-height: 20px;
  color: #6d6661;
  flex: 1;
`;
