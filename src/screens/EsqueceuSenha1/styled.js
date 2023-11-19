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
  color: #ff3f6d;
  align-self: center;
`;

export const DescriptionArea = styled.View`
  margin-top: 29px;
`;

export const DescriptionText = styled(RegularText)`
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  color: #000;
`;

export const InputArea = styled.View`
  width: 100%;
  margin-top: 65px;
`;

export const RememberedPasswordButton = styled.TouchableOpacity``;

export const RememberedPasswordButtonText = styled(MediumText)`
  margin-top: 7px;
  padding-left: 20px;
  color: #3c3c43b8;
`;

export const RecoverPasswordButton = styled.TouchableOpacity`
  margin-top: 39px;
  width: 268px;
  height: 46px;
  border-radius: 70px;
  background-color: #ff3f6d;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const RecoverPasswordButtonText = styled(Bold)`
  font-size: 18px;
  color: #fff;
`;

export const DontHaveAccountArea = styled.View`
  margin-top: 31px;
  width: 100%;
  align-items: center;
`;

export const DontHaveAccountDescriptionText = styled(MediumText)`
  font-size: 15px;
  line-height: 22px;
  color: #3c3c43b8;
`;

export const DontHaveAccountButton = styled.TouchableOpacity`
  margin-top: 8px;
`;

export const DontHaveAccountButtonText = styled(MediumText)`
  font-size: 15px;
  line-height: 22px;
  color: #ff3f6d;
`;

export const SignInButton = styled.TouchableOpacity`
  margin-top: 20px;
  align-self: flex-end;
  padding-right: 9px;
`;

export const SignInButtonText = styled(MediumText)`
  font-size: 15px;
  line-height: 22px;
  color: #ff3f6d;
`;
