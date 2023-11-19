import styled from 'styled-components/native';
import {SemiBold} from '../../components/TextComponents';

export const TopTitleArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
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

export const BottomArea = styled.View`
  position: absolute;
  width: 100%;
  bottom: 71px;
  align-items: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 268px;
  height: 46px;
  background-color: #ff3f6d;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButtonText = styled(SemiBold)`
  font-size: 18px;
  color: #ffffff;
`;

export const CouponDetailsArea = styled.ScrollView`
  width: 100%;
  flex: 1;
  padding: 0 49px;
  margin-top: 45px;
`;

export const BusinessLogoAndCouponTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 23px;
`;

export const BusinessLogoArea = styled.View`
  width: 124px;
  justify-content: center;
  align-items: center;
`;

export const BusinessLogo = styled.Image`
  width: 60px;
  height: 60px;
  resize-mode: contain;
  border-radius: 250px;
`;

export const CouponTitle = styled(SemiBold)`
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const CouponRulesList = styled.View`
  width: 249px;
  margin-top: 39px;
  align-self: center;
`;

export const CouponRuleArea = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Bullet = styled(SemiBold)`
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const CouponRules = styled(SemiBold)`
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-left: 10px;
`;

export const BottomDashArea = styled.View`
  width: 100%;
  margin-top: 38px;
`;

export const BottomDash = styled.Image`
  width: 100%;
  height: 3px;
  resize-mode: contain;
`;

export const ExpiryDateArea = styled.View`
  width: 100%;
  margin-top: 25px;
  align-items: center;
`;

export const ExpiryDate = styled(SemiBold)`
  font-size: 15px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.3);
`;
