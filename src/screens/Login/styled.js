import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import {Bold, RegularText, SemiBold} from '../../components/TextComponents';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FF3F6D', '#FF6086'],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 41.9px;
  resize-mode: contain;
  margin-bottom: 50px;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 21px;
  line-height: 32px;
  color: #fff;
  margin-bottom: 40px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-bottom: 24px;
`;

export const ForgotPasswordButtonText = styled(SemiBold)`
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 70px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
`;

export const SignInButtonText = styled(SemiBold)`
  font-size: 18px;
  line-height: 20px;
  color: #ff3f6d;
`;

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 70px;
  background-color: #00f060;
  justify-content: center;
  align-items: center;
  margin-bottom: 19px;
`;

export const SignUpButtonText = styled(SemiBold)`
  font-size: 18px;
  line-height: 20px;
  color: #fff;
`;

export const TermsArea = styled(RegularText)`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #fff;
`;

export const TermsButtonText = styled(Bold)`
  color: #fff;
`;

export const LoadingArea = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
  color: #ffffff;
`;
