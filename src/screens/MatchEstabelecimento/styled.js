import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import {SemiBold} from '../../components/TextComponents';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FF3F6D', '#FF6086'],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const BackgroundSplashArea = styled.View`
  position: absolute;
  height: 100%;
  padding-left: 6px;
  padding-bottom: 18px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const BackgroundSplash = styled.Image`
  width: 360px;
  height: 600px;
  resize-mode: contain;
`;

export const ContentArea = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: space-evenly;
  z-index: 2;
`;

export const PageTitleArea = styled.View`
  width: 100%;
  align-items: center;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 28px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #ffffff;
`;

export const MatchArea = styled.View``;

export const BrandLogoArea = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 60px;
  align-items: center;
`;

export const BrandLogo = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  resize-mode: cover;
`;

export const MatchPicturesArea = styled.View`
  height: 120px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
`;

export const MatchPictureBackground = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const MatchPicture = styled.Image`
  width: 105px;
  height: 105px;
  border-radius: 60px;
  resize-mode: cover;
`;

export const HeartArea = styled.View`
  width: 67px;
  height: 67px;
  border-radius: 34px;
  background-color: #ffffff;
  margin: 0 1px;
  justify-content: center;
  align-items: center;
`;

export const MessageArea = styled.View`
  width: 100%;
  align-self: center;
`;

export const Message = styled(SemiBold)`
  margin: 0 18px;
  font-size: 17px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #ffffff;
`;

export const ActionsArea = styled.View`
  width: 100%;
  align-items: center;
`;

export const SendMessageButton = styled.View`
  height: 52px;
  padding: 0 26px;
  border-radius: 40px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const SendMessageButtonText = styled(SemiBold)`
  font-size: 20px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #fd397f;
`;

export const KeepSwipingButton = styled.View`
  margin-top: 21px;
  align-self: center;
`;

export const KeepSwipingButtonText = styled(SemiBold)`
  font-size: 19px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #ffffff;
`;

export const BackButtonArea = styled.View`
  position: absolute;
  top: 50px;
  left: 24px;
  border-radius: 50px;
  z-index: 3;
`;

export const BackButton = styled.TouchableOpacity``;
