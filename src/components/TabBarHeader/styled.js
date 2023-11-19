import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import {Bold, SemiBold} from '../TextComponents';

export const ComponentArea = styled.View`
  width: 100%;
  height: 119px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#FF3F6D', '#FF6086'],
})`
  flex: 1;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  padding-left: 57px;
`;

export const RankingAndLogoArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 28px;
`;

export const RankingArea = styled.View`
  width: 46px;
  height: 45px;
`;

export const RankingTitle = styled(SemiBold)`
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;

export const RankingNumberAndStarArea = styled.View`
  flex-direction: row;
  margin-top: 1px;
  align-items: center;
`;

export const RankingNumber = styled(Bold)`
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  margin-right: 7px;
`;

export const LogoArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 52px;
  resize-mode: contain;
`;

export const AvatarArea = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50px;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
  border-radius: 50px;
`;
