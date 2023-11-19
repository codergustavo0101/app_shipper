import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import {
  ExtraBold,
  MediumText,
  RegularText,
  SemiBold,
} from '../../../components/TextComponents';

export const IndicationsAndComissionArea = styled.View`
  flex-direction: row;
  margin-top: 12px;
  justify-content: space-between;
`;

export const IndicationsAndComissionItem = styled(LinearGradient).attrs({
  colors: ['#FF6086', '#FF3F6D'],
})`
  width: 47%;
  height: 91px;
  border-radius: 16px;
  padding-left: 16px;
`;

export const IndicationsAreaTitle = styled(SemiBold)`
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin-top: 14px;
`;

export const IndicationsAndComissionValueArea = styled.View`
  margin-top: 16px;
  flex-direction: row;
`;

export const IndicationsAndComissionValueAreaText = styled(ExtraBold)`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.3px;
  color: #ffffff;
  margin-left: 16px;
`;

export const ShareLinkArea = styled(LinearGradient).attrs({
  colors: ['#FF6086', '#FF3F6D'],
})`
  width: 100%;
  height: 91px;
  margin-top: 17px;
  border-radius: 16px;
  padding-left: 17px;
`;

export const ShareLinkAreaTitle = styled(SemiBold)`
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin-top: 11px;
`;

export const ShareLinkAreaActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 19px;
`;

export const ShareLinkAreaActionButton = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
`;

export const ShareLinkAreaActionButtonText = styled(ExtraBold)`
  margin-left: 14px;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: #ffffff;
`;

export const IndicatedsListArea = styled.View`
  margin-top: 38px;
`;

export const IndicatedsListTitle = styled(SemiBold)`
  font-size: 14px;
  line-height: 21px;
  color: #080422;
  opacity: 0.5;
`;

export const IndicatedsListHeader = styled.View`
  flex-direction: row;
  margin-top: 17px;
`;

export const IndicatedsListHeaderIcon = styled.View``;

export const IndicatedsListHeaders = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const IndicatedsListField = styled.View``;

export const IndicatedsListFieldTitle = styled(MediumText)`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #080422;
`;

export const IndicatedsListFieldValue = styled(RegularText)`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #080422;
  opacity: 0.5;
  margin-top: 4px;
`;
