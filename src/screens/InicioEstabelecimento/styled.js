import styled from 'styled-components/native';
import {Bold, MediumText, SemiBold} from '../../components/TextComponents';

export const Container = styled.FlatList`
  flex: 1;
  padding: 34px 0px 37px;
`;

export const TopTitleArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SwipeHorizontalArea = styled.ScrollView`
  padding-left: 24px;
  margin-top: 45px;
`;

export const GenderClientsCard = styled.View`
  min-width: 138px;
  margin-right: 21px;
  background-color: #fbfafa;
  border-radius: 20px;
`;

export const GenderClientsCardTitleArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 21px 24px 0px 11px;
`;

export const GenderClientsCardTitle = styled(SemiBold)`
  margin-left: 14px;
  font-size: 16px;
  color: #ff3f6d;
`;

export const GenderClientsCardNumberCountArea = styled.View`
  flex-direction: row;
  margin-top: 14px;
  margin-bottom: 14px;
  padding-left: 11px;
  align-items: flex-end;
`;

export const GenderClientsCardNumberCount = styled(Bold)`
  font-size: 18px;
  color: #ff3f6d;
  line-height: 27px;
`;

export const GenderClientsCardNumberLabel = styled(SemiBold)`
  font-size: 15px;
  color: #ff3f6d;
  margin-left: 4px;
  line-height: 27px;
`;

export const CreateCouponArea = styled.View`
  margin-top: 56px;
  margin-bottom: 33px;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CreateCouponLabel = styled(SemiBold)`
  font-size: 21px;
  line-height: 28px;
  color: #ff3f6d;
`;

export const CreateCouponButton = styled.TouchableOpacity`
  padding: 8px 21px;
  border-radius: 70px;
  background-color: #ff3f6d;
  align-items: center;
  justify-content: center;
`;

export const CreateCouponButtonText = styled(SemiBold)`
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
`;

export const ReadQrCodeButton = styled.TouchableOpacity`
  width: 304px;
  height: 52px;
  border-radius: 30px;
  background-color: #ff3f6d;
  align-items: center;
  justify-content: center;
  align-self: center;
  position: absolute;
  bottom: 27px;
`;

export const ReadQrCodeButtonText = styled(MediumText)`
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;

export const EmptyListMessage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyListMessageText = styled(MediumText)`
  font-size: 14px;
  line-height: 27px;
  color: #000000;
  text-align: center;
`;
