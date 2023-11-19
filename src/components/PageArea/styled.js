import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const PageArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.backgroundColor};
`;

export const PageAreaTabBar = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor};
`;

export const ShadowArea = styled(LinearGradient).attrs({
  colors: ['#ffffff', '#f7f7f7'],
  end: {x: 0.5, y: 0.5},
})`
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: -50px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  z-index: -1;
`;
