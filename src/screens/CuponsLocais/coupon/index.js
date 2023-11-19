import React from 'react';

import {
  CouponArea,
  CouponImage,
  CouponLogoAndDetails,
  LogoArea,
  LogoImage,
  CouponDashImage,
  DetailsArea,
  OffPercentage,
  BusinessName,
  ExpiryDate,
} from './styled';

import CouponBackground from '../../../assets/images/coupon-background.png';
import CouponDash from '../../../assets/images/coupon-dash.png';

const Coupon = ({onPress, isFirstCard, data}) => {
  const {coupon: couponData} = data;
  const photo = couponData?.establishment?.photos[0]?.photoUrl;

  return (
    <CouponArea onPress={onPress} isFirstCard={isFirstCard}>
      <CouponImage source={CouponBackground} />
      <CouponLogoAndDetails>
        <LogoArea>
          <LogoImage source={{uri: photo}} />
        </LogoArea>
        <CouponDashImage source={CouponDash} />
        <DetailsArea>
          <OffPercentage numberOfLines={1}>{couponData?.product}</OffPercentage>
          <BusinessName numberOfLines={1}>
            {couponData?.establishment?.name}
          </BusinessName>
          {data.status === 'ACTIVE' &&
          new Date(data.expiration) > new Date() ? (
            <ExpiryDate>
              VALIDADE:{' '}
              {new Date(data.expiration).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
              h
            </ExpiryDate>
          ) : data.status === 'USED' ? (
            <ExpiryDate>UTILIZADO</ExpiryDate>
          ) : (
            <ExpiryDate>EXPIRADO</ExpiryDate>
          )}
        </DetailsArea>
      </CouponLogoAndDetails>
    </CouponArea>
  );
};

export default Coupon;
