import styled from 'styled-components/native';
import {MediumText} from '../../components/TextComponents';

export const Container = styled.View`
  flex: 1;
`;

export const TopTitleArea = styled.View`
  margin-top: 30px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BackButtonArea = styled.View`
  width: 28px;
  height: 28px;
  position: absolute;
  left: 26px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
`;

export const SelectLocalsOrCoupons = styled.View`
  flex-direction: row;
  background-color: #d8dbdd;
  margin: 26px 19px 0;
  border-radius: 60px;
`;

export const SelectLocalsOrCouponsButton = styled.TouchableOpacity`
  flex: 1;
  height: 51px;
  flex-direction: row;
  background-color: ${props => (props.isActive ? '#ff3f6d' : 'transparent')};
  justify-content: center;
  align-items: center;
  border-radius: 60px;
`;

export const SelectLocalsOrCouponsButtonText = styled(MediumText)`
  font-size: 18px;
  line-height: 27px;
  color: ${props => (props.isActive ? '#fff' : '#ff3f6d')};
  margin-left: 19px;
`;

export const ContentArea = styled.FlatList`
  flex: 1;
  width: 100%;
  padding: 0 21px;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 23px;
  top: 6px;
`;
