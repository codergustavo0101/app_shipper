import styled from 'styled-components/native';
import {SemiBold, Bold} from '../../../components/TextComponents';

export const LocalDetailsArea = styled.View`
  margin-top: 32px;
  flex: 1;
  padding: 0 23px;
`;

export const LocalCardHeader = styled.View`
  border-bottom-width: 0.5px;
  padding-bottom: 11px;
  flex-direction: row;
`;

export const LocalDetailsLogoArea = styled.View`
  flex: 1;
  padding-right: 8px;
  border-right-width: 0.5px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
`;

export const LocalDetailsLogo = styled.Image`
  width: 66px;
  height: 66px;
  resize-mode: cover;
  align-self: center;
  border-radius: 33px;
`;

export const LocalDetailsName = styled(SemiBold)`
  font-size: 17px;
  line-height: 22px;
  color: #6d6661;
  margin-left: 10px;
  flex: 1;
`;

export const LocalDetailsRankingArea = styled.View`
  margin-left: 18px;
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

export const LocalDetailsActionsArea = styled.View`
  flex-direction: row;
  width: 100%;
  height: 39px;
  margin-top: 26px;
  justify-content: space-between;
`;

export const RateButton = styled.TouchableOpacity`
  flex: 3;
  height: 100%;
  background-color: #ff3f6d;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const RateButtonText = styled(SemiBold)`
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
`;

export const DoCheckinButton = styled.TouchableOpacity`
  flex: 5;
  height: 100%;
  background-color: #ff3f6d;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;

export const DoCheckinButtonText = styled(SemiBold)`
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
`;

export const LastCheckinsArea = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 31px;
`;

export const LastCheckinsTitle = styled(SemiBold)`
  font-size: 17px;
  color: #ff3f6d;
`;
