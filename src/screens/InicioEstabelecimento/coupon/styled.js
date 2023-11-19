import styled from 'styled-components/native';
import {RegularText, Bold, SemiBold} from '../../../components/TextComponents';

export const CouponArea = styled.TouchableOpacity`
  width: 342px;
  height: 104px;
  position: relative;
  margin-bottom: 24px;
  align-self: center;
`;

export const CouponImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  resize-mode: contain;
`;

export const CouponLogoAndDetails = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 9px 0px;
`;

export const LogoArea = styled.View`
  width: 111px;
  height: 85px;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
`;

export const LogoImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  resize-mode: cover;
`;

export const CouponDashImage = styled.Image`
  height: 85px;
  resize-mode: contain;
  margin-bottom: 5px;
`;

export const DetailsArea = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const OffPercentage = styled(Bold)`
  width: 160px;
  font-size: 17px;
  line-height: 26px;
  color: #000000;
`;

export const BusinessName = styled(RegularText)`
  width: 150px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-top: 4px;
`;

export const ExpiryDate = styled(SemiBold)`
  font-size: 10px;
  line-height: 12px;
  color: #0000004d;
  margin-top: 11px;
`;
