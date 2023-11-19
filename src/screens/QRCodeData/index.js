import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import {useSelector} from 'react-redux';

import {
  PageArea,
  TabBarHeaderEstabelecimento,
  TabScreenTitle,
} from '../../components';

import {
  TopTitleArea,
  BackButtonArea,
  BackButton,
  BottomArea,
  ConfirmButton,
  ConfirmButtonText,
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
} from './styled';

import ArrowCircleLeftIcon from '../../assets/icons/arrow-circle-left.svg';
import CouponDetailsDashImage from '../../assets/images/coupon-details-dash.png';
import CouponsService from '../../services/CouponsService';

const Page = ({navigation, route}) => {
  const establishmentState = useSelector(state => state.establishment);
  const profilePhoto =
    establishmentState.photos.find(item => item.type === 'profile')?.photoUrl ||
    null;

  const {couponId, userCouponId} = route.params;

  const [loading, setLoading] = useState(true);
  const [coupon, setCoupon] = useState(null);

  const {establishment, usersCoupons} = coupon || {};
  const userCoupon = typeof usersCoupons === 'object' ? usersCoupons[0] : {};

  const couponRules = [
    `Produto: ${coupon?.product}`,
    `Resgate o cupom no estabelecimento ${establishment?.name}`,
    `Endereço: ${establishment?.address}`,
    'Não acumulável com outros descontos e promoções.',
  ];

  const handleClickOnGoBack = () => {
    navigation.goBack();
  };

  const fetchCouponDetails = async () => {
    try {
      const response = await CouponsService.getCoupon({
        couponId,
        userCouponId,
      });

      setCoupon(response);
      setLoading(false);
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);

      navigation.goBack();
    }
  };

  const handleClickOnConfirmButton = async () => {
    try {
      await CouponsService.validateCoupon({id: userCouponId});

      Alert.alert(
        'Sucesso',
        'Baixa do cupom realizada com sucesso!',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.goBack();
            },
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }
  };

  useEffect(() => {
    fetchCouponDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageArea
      isTabBar={true}
      statusBarTranslucent={true}
      barStyle="light-content">
      <TabBarHeaderEstabelecimento navigation={navigation} />
      <TopTitleArea>
        <BackButtonArea>
          <BackButton onPress={handleClickOnGoBack}>
            <ArrowCircleLeftIcon width={28} height={28} color="#FF3F6D" />
          </BackButton>
        </BackButtonArea>
        <TabScreenTitle title={'Dados QR code'} />
      </TopTitleArea>
      {loading ? (
        <CouponDetailsArea overScrollMode="never">
          <ActivityIndicator size="large" color="#FF3F6D" />
        </CouponDetailsArea>
      ) : (
        <>
          <CouponDetailsArea overScrollMode="never">
            <BusinessLogoAndCouponTitle>
              <BusinessLogoArea>
                <BusinessLogo source={{uri: profilePhoto}} />
              </BusinessLogoArea>
              <CouponTitle>
                {coupon?.discount.includes('%')
                  ? `${coupon?.discount} OFF `
                  : `R$${Number(coupon?.discount)
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
                {new Date(userCoupon.expiration).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                h
              </ExpiryDate>
            </ExpiryDateArea>
          </CouponDetailsArea>
          <BottomArea>
            <ConfirmButton onPress={handleClickOnConfirmButton}>
              <ConfirmButtonText>Confirmar baixa</ConfirmButtonText>
            </ConfirmButton>
          </BottomArea>
        </>
      )}
    </PageArea>
  );
};

export default Page;
