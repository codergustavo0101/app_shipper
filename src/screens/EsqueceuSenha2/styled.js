import styled from 'styled-components/native';
import {
  RegularText,
  MediumText,
  SemiBold,
  Bold,
} from '../../components/TextComponents';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 24px;
  margin-top: 54px;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 20px;
  line-height: 30px;
  color: #ff3f6d;
  align-self: center;
`;

export const DescriptionArea = styled.View`
  margin-top: 29px;
`;

export const DescriptionText = styled(RegularText)`
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  color: #000;
`;

export const BoldDescriptionText = styled(Bold)``;

export const EmailImageArea = styled.View`
  margin-top: 39px;
  width: 225px;
  height: 213px;
  background-color: #ff3f6d;
  align-self: center;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const EmailImage = styled.Image`
  width: 171px;
  resize-mode: contain;
`;

export const ResendArea = styled.View`
  margin-top: 29px;
  flex-direction: row;
  justify-content: center;
`;

export const DidntReceiveEmailText = styled(MediumText)`
  font-size: 15px;
  line-height: 22px;
  color: rgba(60, 60, 67, 0.72);
`;

export const ResendEmailButton = styled.TouchableOpacity`
  margin-left: 47px;
`;

export const ResendEmailButtonText = styled(MediumText)`
  font-size: 15px;
  line-height: 22px;
  color: #ff3f6d;
`;

export const AgreeButton = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  margin-top: 44px;
  justify-content: center;
  align-items: center;
  background-color: #ff3f6d;
  border-radius: 70px;
`;

export const AgreeButtonText = styled(MediumText)`
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
