import styled from 'styled-components/native';
import {SemiBold, RegularText, Bold} from '../../../components/TextComponents';

export const ComponentArea = styled.View`
  width: 102%;
  padding-left: 14px;
  padding-right: 5px;
  margin-left: -1%;
  padding-bottom: 20px;
  height: 313px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 13px;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  shadow-radius: 1px;
  shadow-offset: 0px 3px;
  shadow-color: #000;
  shadow-opacity: 0.04;
  elevation: 0.5;
  z-index: 1;
`;

export const ScrollableArea = styled.ScrollView`
  padding-right: 13px;
  width: 100%;
  background-color: #fff;
  border-radius: 13px;
`;

export const DescriptionArea = styled.View`
  width: 100%;
  height: 73px;
  background-color: #fff;
  border-radius: 13px;
  flex-direction: row;
  margin: 22px 0px 12px;
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

export const Section = styled.View`
  margin-top: 10px;
`;

export const Title = styled(SemiBold)`
  font-size: 17px;
  color: #ff3f6d;
`;

export const AboutArea = styled.View`
  margin-top: 8px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Description = styled(RegularText)`
  font-size: 14px;
  line-height: 21px;
  color: #6d6661;
`;

export const ScrollBar = styled.View`
  height: 100%;
  width: 4px;
  border-radius: 30px;
  background-color: #dfdddd;
  margin-top: 20px;
`;

export const CheckinPlaceLogoArea = styled.View`
  width: 57px;
  height: 57px;
  margin-right: 16px;
  background-color: #fff;
  border: 1px solid rgba(109, 102, 97, 0.35);
  overflow: hidden;
  border-radius: 30px;
`;

export const CheckinPlaceLogo = styled.Image`
  width: 57px;
  height: 57px;
  margin-right: 16px;
`;
