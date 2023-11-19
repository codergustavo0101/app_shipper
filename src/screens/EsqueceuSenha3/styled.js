import styled from 'styled-components/native';
import {
  RegularText,
  MediumText,
  SemiBold,
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

export const FormArea = styled.View`
  margin-top: 42px;
`;

export const CreatePasswordButton = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  margin-top: 173px;
  justify-content: center;
  align-items: center;
  background-color: #ff3f6d;
  border-radius: 70px;
`;

export const CreatePasswordButtonText = styled(MediumText)`
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
