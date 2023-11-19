import styled from 'styled-components/native';
import {SemiBold} from '../../../components/TextComponents';

export const PageArea = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  elevation: 100;
`;

export const ContentArea = styled.ScrollView`
  width: 100%;
  height: 90%;
  max-height: 350px;
  padding: 38px 25px;
  margin-top: 119px;
  background-color: #fff;
  border: 1.5px solid #cacaca;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-width: 0;
  shadow-radius: 14px;
  shadow-offset: 0px 3px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  elevation: 7;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
`;

export const BackButtonArea = styled.View`
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0;
`;

export const BackButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 17px;
  color: #ff3f6d;
`;

export const SavePreferencesButton = styled.TouchableOpacity`
  width: 254px;
  height: 44px;
  border-radius: 70px;
  background-color: #ff3f6d;
  margin-top: 12px;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`;

export const SavePreferencesButtonText = styled(SemiBold)`
  font-size: 18px;
  color: #ffffff;
`;

export const SafeAreaPressable = styled.TouchableWithoutFeedback``;

export const SafeArea = styled.View`
  width: 100%;
  flex: 1;
  background-color: #f3f3f380;
`;
