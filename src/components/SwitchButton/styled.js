import styled from 'styled-components/native';
import {SemiBold} from '../TextComponents';

export const ComponentArea = styled.View`
  width: 100%;
  height: 27px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
`;

export const SwitchArea = styled.TouchableOpacity`
  width: 49px;
  height: 24px;
  background-color: ${props => (props.isActive ? '#eee' : '#ff3f6d')};
  border-radius: 12px;
  margin-left: 30px;
  position: relative;
  justify-content: center;
`;

export const SwitchIndicator = styled.View`
  width: 23px;
  height: 20px;
  background-color: #fff;
  border-radius: 12px;
  position: absolute;
  ${props => (props.isActive ? 'left: 3px;' : 'right: 3px;')}
`;
