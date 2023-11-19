import styled from 'styled-components/native';
import {RegularText, SemiBold} from '../../components/TextComponents';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ContentArea = styled.View`
  padding: 0px 24px;
`;

export const LogoUploadArea = styled.View`
  align-items: center;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
  margin-top: 51px;
  margin-bottom: 33px;
`;

export const PageActionArea = styled.View`
  width: 268px;
  margin-top: 57px;
  margin-bottom: 66px;
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

export const LogoUploadActionArea = styled.View`
  width: 116px;
  height: 116px;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 113px;
  height: 113px;
  border-radius: 70px;
  resize-mode: cover;
  position: absolute;
  z-index: 1;
`;

export const LogoUploadBackground = styled.Image`
  position: absolute;
  width: 116px;
  height: 116px;
  resize-mode: contain;
  z-index: 0;
`;

export const UploadLogoButton = styled.TouchableOpacity`
  width: 33px;
  height: 34px;
  border-radius: 70px;
  background-color: #ff3f6d;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;
  border: 2px solid #fff;
`;

export const MenuUploadArea = styled.View`
  width: 100%;
  min-height: 241px;
  max-height: 482px;
`;

export const MenuUploadButton = styled.TouchableOpacity`
  width: 100%;
  min-height: 241px;
  max-height: 482px;
  border-radius: 5px;
  border: 1px dashed #ff3f6d;
  justify-content: center;
  align-items: center;
`;

export const MenuUploadButtonText = styled(RegularText)`
  margin-top: 45px;
  font-size: 18px;
  line-height: 27px;
  align-items: center;
  text-align: center;
  color: #ff3f6d;
`;

export const MenuPreviewImage = styled.Image`
  width: 98%;
  height: 98%;
  resize-mode: contain;
  border-radius: 5px;
`;

export const ErrorMessage = styled(SemiBold)`
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
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
