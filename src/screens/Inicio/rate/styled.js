import styled from 'styled-components/native';
import {SemiBold} from '../../../components/TextComponents';

export const ComponentArea = styled.View`
  width: 102%;
  margin-left: -1%;
  height: 256px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 13px;
  position: absolute;
  bottom: 0;
  padding: 15px;
  align-items: center;
  shadow-radius: 1px;
  shadow-offset: 0px 3px;
  shadow-color: #000;
  shadow-opacity: 0.04;
  elevation: 0.5;
  z-index: 1;
`;

export const CallToActionText = styled(SemiBold)`
  font-size: 17px;
  line-height: 26px;
  color: #ff3f6d;
`;

export const StarsArea = styled.View`
  width: 287px;
  height: 34px;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const StarButton = styled.TouchableWithoutFeedback``;

export const ActionButton = styled.TouchableOpacity`
  width: 220px;
  height: 45px;
  background-color: #ff3f6d;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
  margin-top: 47px;
  margin-bottom: 17px;
`;

export const ActionButtonText = styled(SemiBold)`
  font-size: 18px;
  color: #ffffff;
`;
