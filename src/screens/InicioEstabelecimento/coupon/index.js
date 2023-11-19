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

const Coupon = ({onPress, photo, item, name}) => {
  return (
    <CouponArea onPress={onPress}>
      <CouponImage source={CouponBackground} />
      <CouponLogoAndDetails>
        <LogoArea>
          <LogoImage source={{uri: photo || null}} />
        </LogoArea>
        <CouponDashImage source={CouponDash} />
        <DetailsArea>
          <OffPercentage numberOfLines={1}>{item.product}</OffPercentage>
          <BusinessName numberOfLines={1}>{name}</BusinessName>
          {item.quantity > 0 && new Date(item.expiresIn) > new Date() ? (
            <ExpiryDate>
              VALIDADE:{' '}
              {new Date(item.expiresIn).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
              h
            </ExpiryDate>
          ) : (
            <ExpiryDate>EXPIRADO</ExpiryDate>
          )}
        </DetailsArea>
      </CouponLogoAndDetails>
    </CouponArea>
  );
};

export default Coupon;
