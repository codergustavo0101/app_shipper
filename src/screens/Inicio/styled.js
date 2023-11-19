import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {SliderBox} from 'react-native-image-slider-box';
import {Bold, RegularText, SemiBold} from '../../components/TextComponents';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0px 37px;
`;

export const TopTitleArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 23px;
  top: 6px;
`;

export const PeopleCardArea = styled.View`
  width: 100%;
  flex: 1;
`;

export const ActionsArea = styled.View`
  height: 62px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 57px;
  position: absolute;
  bottom: ${windowHeight > 800 ? '37px' : '10px'};
  elevation: 5;
`;

export const RejectButton = styled.TouchableOpacity`
  height: 62px;
  width: 62px;
  border-radius: 62px;
  background-color: #ff2d2d;
  justify-content: center;
  align-items: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  height: 62px;
  width: 62px;
  border-radius: 62px;
  background-color: #fff505;
  justify-content: center;
  align-items: center;
`;

export const LikeButton = styled.TouchableOpacity`
  height: 62px;
  width: 62px;
  border-radius: 62px;
  background-color: #ff3f6d;
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled.View`
  width: 100%;
  display: flex;
  flex: 1;
  padding: 0px 10px;
  shadow-radius: 8px;
  shadow-offset: 0px 3px;
  shadow-color: #000;
  shadow-opacity: 0.12;
  elevation: 4;
`;

export const CardContainer = styled.View`
  width: 100%;
  height: ${windowHeight > 800 ? '423px' : '360px'};
  margin-top: ${windowHeight > 800 ? '27px' : '0px'};
`;

export const CardArea = styled.View``;

export const Card = styled.View`
  width: 100%;
  height: ${windowHeight > 800 ? '423px' : '360px'};
  border-radius: 13px;
  position: absolute;
  background-color: #fff;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 13px;
`;

export const CardBackground = styled.View`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 13px;
  background-color: #f0f0f0;
`;

export const DescriptionArea = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 73px;
  background-color: #fff;
  border-radius: 13px;
  flex-direction: row;
  padding: 0px 18px;
  shadow-radius: 1px;
  shadow-offset: 0px 3px;
  shadow-color: #000;
  shadow-opacity: 0.04;
  elevation: 0.5;
  z-index: 1;
`;

export const InfoDescription = styled.View`
  justify-content: center;
  height: 100%;
  flex: 1;
`;

export const NameAndAge = styled(SemiBold)`
  font-size: 17px;
  line-height: 18px;
  letter-spacing: -0.110526px;
  color: #6d6661;
`;

export const DistanceCityState = styled(RegularText)`
  font-size: 14px;
  line-height: 17px;
  color: #9b9b9b;
  margin-top: 7px;
  width: 90%;
`;

export const RankingAndLogoArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 125px;
`;

export const RankingArea = styled.View`
  width: 46px;
  height: 45px;
`;

export const RankingTitle = styled(SemiBold)`
  font-size: 14px;
  line-height: 21px;
  color: #6d6661;
`;

export const RankingNumberAndStarArea = styled.View`
  flex-direction: row;
  margin-top: 1px;
  align-items: center;
`;

export const RankingNumber = styled(Bold)`
  font-size: 15px;
  line-height: 22px;
  color: #6d6661;
  margin-right: 7px;
`;

export const UnderCardArea = styled.View`
  width: 100%;
  height: 24px;
  position: absolute;
  bottom: -24px;
  align-items: center;
  shadow-radius: 1px;
  shadow-offset: 0px 3px;
  shadow-color: #000;
  shadow-opacity: 0.04;
  z-index: -1;
`;

export const UnderCardOne = styled.View`
  width: 94%;
  height: 24px;
  margin-top: -12px;
  background-color: #fff;
  opacity: 0.8;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  z-index: -1;
`;

export const UnderCardTwo = styled.View`
  width: 84%;
  height: 24px;
  margin-top: -12px;
  background-color: #fff;
  opacity: 0.8;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  z-index: -2;
`;

export const ReportButtonArea = styled.View`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 22px;
  top: 13px;
  justify-content: center;
  align-items: center;
`;

export const ReportButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

export const BlockIconImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

export const MoreInfoButtonArea = styled.View`
  width: 33px;
  height: 33px;
  position: absolute;
  right: 19px;
  top: ${windowHeight > 800 ? '300px' : '235px'};
  justify-content: center;
  align-items: center;
`;

export const MoreInfoButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const MoreInfoIconImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

export const CardImageSliderArea = styled(SliderBox)`
  width: 95%;
  height: ${windowHeight > 800 ? '365px' : '300px'};
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
`;

export const OnLoadedArea = styled.View`
  width: 100%;
  height: ${windowHeight > 800 ? '423px' : '360px'};
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
`;

export const LoadingArea = styled.View`
  width: 100%;
  height: ${windowHeight > 800 ? '423px' : '360px'};
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator``;
