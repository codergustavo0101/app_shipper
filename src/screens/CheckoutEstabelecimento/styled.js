import styled from 'styled-components/native';
import {Bold, RegularText, SemiBold} from '../../components/TextComponents';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ContentArea = styled.View`
  padding: 0px 24px;
`;

export const PageTitle = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
  margin-top: 42px;
  text-align: center;
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

export const PageActionArea = styled.View`
  width: 304px;
  margin-top: 42px;
  margin-bottom: 28px;
  align-self: center;
`;

export const SubscribeButton = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  background-color: #ff3f6d;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
  shadow-radius: 14px;
  shadow-offset: 0px 3px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  elevation: 7;
`;

export const SubscribeButtonText = styled(SemiBold)`
  font-size: 18px;
  color: #ffffff;
`;

export const ContinueButton = styled.TouchableOpacity`
  margin-top: 23px;
  align-self: center;
`;

export const ContinueButtonText = styled(SemiBold)`
  font-size: 15px;
  line-height: 22px;
  color: #ff3f6d;
`;

export const TableArea = styled.View`
  margin: 36px 12px 0;
`;

export const TitlesArea = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #c4c4c4;
`;

export const Title = styled(SemiBold)`
  font-size: 17px;
  line-height: 20px;
  color: #ff3f6d;
  width: 59px;
  text-align: center;
  margin-left: 11px;
`;

export const BenefitsArea = styled.View`
  margin-top: 14px;
`;

export const BenefitArea = styled.View`
  height: 38px;
  flex-direction: row;
  align-items: center;
`;

export const Benefit = styled(RegularText)`
  font-size: 12px;
  line-height: 18px;
  color: #000000;
  flex: 1;
`;

export const ContainBenefits = styled.View`
  height: 100%;
  flex-direction: row;
`;

export const ContainArea = styled.View`
  height: 100%;
  width: 64px;
  justify-content: center;
  align-items: center;
`;

export const VerticalLine = styled.View`
  height: 101%;
  width: 1px;
  background-color: #c4c4c4;
`;

export const PricesArea = styled.View`
  height: 120px;
  margin-top: 42px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f7f7f7;
  shadow-radius: 14px;
  shadow-offset: 0px 3px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  elevation: 7;
`;

export const PriceArea = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${props => props.selected && 'background: #fff;'}
  border-width: 1px;
  border-color: ${props => (props.selected ? '#ff3f6d' : '#dedede')};
`;

export const MonthsLabel = styled(Bold)`
  font-size: 25px;
  line-height: 29px;
  color: ${props => (props.selected ? '#ff3f6d' : '#000000')};
`;

export const MonthLabel = styled(Bold)`
  font-size: 15px;
  line-height: 18px;
  color: ${props => (props.selected ? '#ff3f6d' : '#000000')};
`;

export const PriceLabel = styled(Bold)`
  font-size: 15px;
  line-height: 18px;
  color: ${props => (props.selected ? '#ff3f6d' : '#000000')};
  margin-top: 13px;
`;

export const EconomyLabel = styled(Bold)`
  font-size: 11px;
  line-height: 13px;
  color: #ff3f6d;
  margin-top: 12px;
`;
