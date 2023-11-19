import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FF3F6D', '#FF6086'],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const LogoAnimationArea = styled.View`
  width: 310px;
  height: 310px;
  margin-top: -64px;
`;

export const BackgroundSplashArea = styled.View`
  position: absolute;
  /* width: 329px; */
  height: 100%;
  padding-left: 6px;
  padding-bottom: 18px;
  justify-content: center;
  align-items: center;
`;

export const BackgroundSplash = styled.Image`
  width: 360px;
  height: 600px;
  resize-mode: contain;
`;
