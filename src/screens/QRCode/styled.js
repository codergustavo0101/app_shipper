import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import {MediumText, SemiBold} from '../../components/TextComponents';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FF3F6D', '#FF6086'],
})`
  flex: 1;
  align-items: center;
  padding: 0px 20px;
`;

export const PageTitleArea = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 60px;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 28px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #ffffff;
`;

export const QrCodeCoverArea = styled.View`
  margin-top: 99px;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const QrCodeCoverImage = styled.Image`
  width: 300px;
  height: 300px;
  resize-mode: contain;
`;

export const BarCodeScannerArea = styled.View`
  width: 225px;
  height: 225px;
  position: absolute;
  border-radius: 5px;
  overflow: hidden;
`;

export const DescriptionText = styled(MediumText)`
  margin-top: 50px;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

export const BackButtonArea = styled.View`
  position: absolute;
  top: 68px;
  left: 24px;
  border-radius: 50px;
  z-index: 3;
`;

export const BackButton = styled.TouchableOpacity``;
