import styled from 'styled-components/native';
import {MediumText} from '../../components/TextComponents';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ScrollableViewHeader = styled.View`
  margin-top: 30px;
`;

export const ScrollableView = styled.ScrollView`
  width: 100%;
  padding: 0 19px;
`;

export const SelectIndicationsOrPixData = styled.View`
  flex-direction: row;
  background-color: #d8dbdd;
  margin: 26px 0px;
  border-radius: 60px;
`;

export const SelectIndicationsOrPixDataButton = styled.TouchableOpacity`
  flex: 1;
  height: 51px;
  flex-direction: row;
  background-color: ${props => (props.isActive ? '#ff3f6d' : 'transparent')};
  justify-content: center;
  align-items: center;
  border-radius: 60px;
`;

export const SelectIndicationsOrPixDataText = styled(MediumText)`
  font-size: 18px;
  line-height: 27px;
  color: ${props => (props.isActive ? '#fff' : '#ff3f6d')};
  margin-left: 19px;
`;
