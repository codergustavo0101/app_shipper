import React from 'react';
import SvgQRCode from 'react-native-qrcode-svg';

import {
  CouponDetailsArea,
  BusinessLogoAndCouponTitle,
  BusinessLogoArea,
  BusinessLogo,
  CouponTitle,
  CouponRulesList,
  CouponRuleArea,
  Bullet,
  CouponRules,
  BottomDashArea,
  BottomDash,
  ExpiryDateArea,
  ExpiryDate,
  QrCodeArea,
} from './styled';

import CouponDetailsDashImage from '../../../assets/images/coupon-details-dash.png';

const LocalDetails = ({data}) => {
  const {coupon: couponData} = data;
  const photo = couponData?.establishment?.photos[0]?.photoUrl;

  const couponRules = [
    `Produto: ${couponData?.product}`,
    `Resgate o cupom no estabelecimento ${couponData?.establishment?.name}`,
    `Endereço: ${couponData?.establishment?.address}`,
    'Não acumulável com outros descontos e promoções.',
  ];

  const qrCodeValue = JSON.stringify({
    id: data?.coupon?.id,
    userCouponId: data?.id,
  });

  return (
    <CouponDetailsArea overScrollMode="never">
      <BusinessLogoAndCouponTitle>
        <BusinessLogoArea>
          <BusinessLogo source={{uri: photo}} />
        </BusinessLogoArea>
        <CouponTitle>
          {couponData?.discount.includes('%')
            ? `${couponData?.discount} OFF `
            : `R$${Number(couponData?.discount)
                .toFixed(2)
                .replace('.', ',')} OFF`}
        </CouponTitle>
      </BusinessLogoAndCouponTitle>
      <CouponRulesList>
        {couponRules.map((rule, index) => (
          <CouponRuleArea key={index}>
            <Bullet>{'•'}</Bullet>
            <CouponRules>{rule}</CouponRules>
          </CouponRuleArea>
        ))}
      </CouponRulesList>
      <BottomDashArea>
        <BottomDash source={CouponDetailsDashImage} />
      </BottomDashArea>
      <ExpiryDateArea>
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
      </ExpiryDateArea>
      <QrCodeArea>
        <SvgQRCode value={qrCodeValue} size={200} />
      </QrCodeArea>
    </CouponDetailsArea>
  );
};

export default LocalDetails;
