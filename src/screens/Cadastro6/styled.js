import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {
  MediumText,
  RegularText,
  SemiBold,
} from '../../components/TextComponents';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ContentArea = styled.View`
  padding: 0px 24px;
`;

export const SectionTitle = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
  margin-top: 42px;
  margin-bottom: 33px;
`;

export const PhotosArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3px;
  margin-bottom: 39px;
`;

export const Photo = styled.View`
  width: 96px;
  height: 96px;
  background-color: #fef9fa;
  border: 2px dashed #ff3f6d;
  border-style: ${props => (props.filled ? 'solid' : 'dashed')};
  border-radius: 4px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const RemovePhotoIconArea = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  background-color: #fef9fa;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  elevation: 1;
  top: -12px;
  right: -12px;
`;

export const AddPhotoIconArea = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageArea = styled.View`
  width: 96px;
  height: 96px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff3f6d;
  background-color: #ff3f6d;
  border-radius: 4px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const SwitchButtonsArea = styled.View`
  margin-bottom: 41px;
`;

export const InputDropDownArea = styled.View`
  width: 100%;
  margin-bottom: 30px;
  ${props =>
    Platform.OS !== 'android' && props.isDropdownOpen && 'z-index: 99999;'}
`;

export const TextInputArea = styled.View`
  flex-direction: row;
  margin-left: 9px;
  align-items: center;
`;

export const LabelInput = styled(MediumText)`
  font-size: 14px;
  color: #6d6661;
`;

export const DropdownArea = styled.View`
  height: 45px;
  padding-top: 9px;
`;

export const PageActionArea = styled.View`
  width: 268px;
  margin-top: 32px;
  align-self: center;
`;

export const ContinueButton = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  background-color: #ff3f6d;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
`;

export const ContinueButtonText = styled(SemiBold)`
  font-size: 18px;
  color: #ffffff;
`;

export const LogoutButton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 31px;
`;

export const LogoutButtonText = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
`;

export const AppVersion = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  margin-top: 42px;
  align-items: center;
`;

export const AppVersionText = styled(RegularText)`
  flex: 1;
  font-size: 13px;
  line-height: 19px;
  color: #ff3f6d;
  padding-left: 16px;
`;

export const LogoArea = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

export const Logo = styled.Image`
  width: 140px;
  height: 30px;
  resize-mode: contain;
`;

export const VersionBorder = styled.View`
  width: 1px;
  height: 36px;
  background-color: #ff3f6d;
`;

export const DeleteAccount = styled.TouchableOpacity`
  margin-top: 38px;
  margin-bottom: 42px;
  align-self: center;
`;

export const DeleteAccountText = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
`;

export const ErrorMessage = styled(SemiBold)`
  font-size: 12px;
  text-align: center;
  margin-bottom: 20px;
  color: #ff3f6d;
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
