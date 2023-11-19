import styled from 'styled-components/native';
import {
  RegularText,
  MediumText,
  SemiBold,
} from '../../components/TextComponents';

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
  margin-top: 37px;
  justify-content: center;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
`;

export const TermsArea = styled.View`
  flex: 1;
  margin-top: 31px;
`;

export const TermsText = styled(RegularText)`
  font-size: 14px;
  line-height: 23px;
`;

export const TermsActionArea = styled.View`
  flex-direction: row;
  margin-top: 27px;
  align-items: center;
`;

export const TermsActionToggleButton = styled.TouchableOpacity``;

export const TermsActionToggleButtonView = styled.View`
  height: 28px;
  width: 28px;
  border: 2px solid #ff3f6d;
  border-radius: 10px;
  background-color: ${props => (props.checked ? '#ff3f6d' : '#fff')};
`;

export const TermsActionReadButton = styled.TouchableOpacity`
  margin-left: 13px;
`;

export const TermsActionReadButtonText = styled(MediumText)`
  font-size: 13px;
  line-height: 20px;
  color: #1e8cf1;
`;

export const PageActionArea = styled.View`
  width: 268px;
  margin-bottom: 49px;
  align-self: center;
`;

export const AgreeButton = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  background-color: #ff3f6d;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
`;

export const AgreeButtonText = styled(SemiBold)`
  font-size: 18px;
  color: #ffffff;
`;

export const DisagreeButton = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  margin-top: 17px;
  background-color: #efefef;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
`;

export const DisagreeButtonText = styled(SemiBold)`
  font-size: 18px;
  color: #ff3f6d;
`;

export const ErrorMessageText = styled(SemiBold)`
  font-size: 12px;
  text-align: center;
  margin-bottom: 20px;
  color: #ff3f6d;
`;
