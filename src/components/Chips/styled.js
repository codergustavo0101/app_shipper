import styled from 'styled-components/native';
import {SemiBold} from '../TextComponents';
import {LinearGradient} from 'expo-linear-gradient';

export const GradientArea = styled(LinearGradient).attrs({
  colors: ['#FD788C', '#FF4D67'],
})`
  height: 40px;
  margin-right: 12px;
  border-radius: 20px;
  margin-bottom: 17px;
`;

export const ChipAreaButton = styled.TouchableOpacity`
  padding: 8px 11px;
  flex-direction: row;
  align-items: center;
`;

export const ChipArea = styled.View`
  padding: 8px 11px;
  flex-direction: row;
  align-items: center;
`;

export const ChipIcon = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  resize-mode: contain;
`;

export const ChipLabel = styled(SemiBold)`
  font-size: 15px;
  color: #ffffff;
`;
