import styled from 'styled-components/native';
import {SemiBold} from '../../components/TextComponents';

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
  margin-top: 37px;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
`;

export const ButtonsArea = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const ButtonArea = styled.TouchableOpacity`
  align-items: center;
`;

export const ButtonImageArea = styled.View`
  width: 169px;
  height: 160px;
  background-color: #ffeaef;
  border-radius: 169px;
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;
`;

export const ButtonImage = styled.Image`
  width: 90px;
  height: 90px;
  resize-mode: contain;
`;

export const ButtonText = styled(SemiBold)`
  width: 184px;
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  color: #ff3f6d;
`;
