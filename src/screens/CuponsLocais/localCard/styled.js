import styled from 'styled-components/native';
import {
  RegularText,
  MediumText,
  Bold,
  SemiBold,
} from '../../../components/TextComponents';

export const TouchableArea = styled.TouchableWithoutFeedback``;

export const LocalCardArea = styled.View`
  margin-top: ${({isFirstCard}) => (isFirstCard ? '20px' : '0')};
  margin-bottom: 20px;
  width: 98%;
  background-color: #fff;
  padding: 8px 15px;
  border-radius: 10px;
  shadow-radius: 9px;
  shadow-offset: 0px;
  shadow-color: #000;
  shadow-opacity: 0.15;
  elevation: 4;
`;

export const LocalCardHeader = styled.View`
  border-bottom-width: 0.5px;
  padding-bottom: 11px;
  flex-direction: row;
`;

export const LocalCardLogoAndName = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-right: 16px;
  border-right-width: 0.5px;
`;

export const LocalCardLogo = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 26px;
`;

export const LocalCardName = styled(MediumText)`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-left: 17px;
  flex: 1;
`;

export const LocalCardRankingArea = styled.View`
  margin-left: 21px;
  margin-right: 35px;
  justify-content: center;
`;

export const RankingTitle = styled(SemiBold)`
  font-size: 14px;
  color: #6d6661;
`;

export const RankingValueAndStar = styled.View`
  flex-direction: row;
  margin-top: 1px;
  align-items: center;
`;

export const RankingValue = styled(Bold)`
  font-size: 15px;
  line-height: 22px;
  color: #6d6661;
  margin-right: 7px;
`;

export const LocalCardContent = styled.View``;

export const CheckinsCountArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 23px;
`;

export const CheckinsCountTitle = styled(SemiBold)`
  font-size: 16px;
  color: #ff3f6d;
  line-height: 24px;
  margin-left: 19px;
`;

export const ChipsArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 31px;
`;

export const AddressArea = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 7px;
  align-items: center;
  margin-bottom: 23px;
`;

export const AddressTitle = styled(SemiBold)`
  font-size: 17px;
  color: #ff3f6d;
`;

export const Address = styled(RegularText)`
  font-size: 14px;
  color: #000;
`;
