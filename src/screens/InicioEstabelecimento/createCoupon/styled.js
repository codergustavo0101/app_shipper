import styled from 'styled-components/native';
import {SemiBold} from '../../../components/TextComponents';

export const CreateCouponArea = styled.ScrollView`
  margin-top: 34px;
  flex: 1;
`;

export const TopTitleArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BackButtonArea = styled.View`
  width: 28px;
  height: 28px;
  position: absolute;
  left: 33px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
`;

export const InputsArea = styled.View`
  flex: 1;
  margin-top: 48px;
  padding: 0 24px;
`;

export const SameRowInput = styled.View`
  flex-direction: row;
`;

export const InputSpacement = styled.View`
  width: ${({width}) => (width ? `${width}px` : 0)};
  height: ${({height}) => (height ? `${height}px` : 0)};
`;

export const ActionsArea = styled.View`
  align-items: center;
  margin-top: 53px;
`;

export const CreateCouponButton = styled.TouchableOpacity`
  width: 268px;
  height: 46px;
  background-color: #ff3f6d;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
`;

export const CreateCouponButtonText = styled(SemiBold)`
  font-size: 18px;
  color: #ffffff;
`;

export const PreviewButton = styled.TouchableOpacity`
  margin-top: 35px;
`;

export const PreviewButtonText = styled(SemiBold)`
  font-size: 15px;
  line-height: 22px;
  color: #ff3f6d;
`;
