import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {
  PageArea,
  TabBarHeaderEstabelecimento,
  TabScreenTitle,
} from '../../components';

import {
  Container,
  TopTitleArea,
  SwipeHorizontalArea,
  GenderClientsCard,
  GenderClientsCardTitleArea,
  GenderClientsCardTitle,
  GenderClientsCardNumberCountArea,
  GenderClientsCardNumberCount,
  GenderClientsCardNumberLabel,
  CreateCouponArea,
  CreateCouponLabel,
  CreateCouponButton,
  CreateCouponButtonText,
  ReadQrCodeButton,
  ReadQrCodeButtonText,
  EmptyListMessage,
  EmptyListMessageText,
} from './styled';

import ManHeadIcon from '../../assets/icons/man-head.svg';
import WomanHeadIcon from '../../assets/icons/woman-head.svg';

import Coupon from './coupon';
import CreateCoupon from './createCoupon';

import CheckinsService from '../../services/CheckinsService';
import CouponsService from '../../services/CouponsService';

import socket from '../../utils/socket';

const Page = ({navigation}) => {
  const establishment = useSelector(state => state.establishment);

  const [showCreateCouponArea, setShowCreateCouponArea] = useState(false);
  const [femaleCheckins, setFemaleCheckins] = useState(0);
  const [maleCheckins, setMaleCheckins] = useState(0);
  const [coupons, setCoupons] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePressOnReadQrCodeButton = () => {
    navigation.navigate('QRCode');
  };

  const getCheckins = async () => {
    const checkins = await CheckinsService.getCheckins({
      id: establishment.id,
    });

    setFemaleCheckins(checkins.femaleCheckins);
    setMaleCheckins(checkins.maleCheckins);
  };

  const getCoupons = async () => {
    const couponsResponse = await CouponsService.getCoupons();

    setCoupons(couponsResponse);
  };

  const filterImagesAndSetAvatar = () => {
    if (establishment.photos) {
      const avatar = establishment.photos.find(item => item.type === 'profile');

      if (avatar) {
        setProfilePicture(avatar.photoUrl);
      } else {
        setProfilePicture('https://picsum.photos/200');
      }
    }

    return null;
  };

  useEffect(() => {
    getCheckins();
    filterImagesAndSetAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showCreateCouponArea === false) {
      getCoupons();
    }
  }, [showCreateCouponArea]);

  useEffect(() => {
    socket.connect();
    socket.emit('listen-api', establishment.id);

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on('refresh', () => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Splash'}],
      });
    });

    return () => {
      socket.off('refresh');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <PageArea
      isTabBar={true}
      statusBarTranslucent={true}
      barStyle="light-content">
      <TabBarHeaderEstabelecimento navigation={navigation} />
      {!showCreateCouponArea && (
        <Container
          showsVerticalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListHeaderComponent={
            <>
              <TopTitleArea>
                <TabScreenTitle title="Inicio" />
              </TopTitleArea>
              <SwipeHorizontalArea
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                horizontal={true}>
                <GenderClientsCard>
                  <GenderClientsCardTitleArea>
                    <ManHeadIcon width={24} height={24} color="#FF3F6D" />
                    <GenderClientsCardTitle>Homem</GenderClientsCardTitle>
                  </GenderClientsCardTitleArea>
                  <GenderClientsCardNumberCountArea>
                    <GenderClientsCardNumberCount>
                      {maleCheckins}
                    </GenderClientsCardNumberCount>
                    <GenderClientsCardNumberLabel>
                      {maleCheckins === 1 ? 'Check-in' : 'Check-ins'}
                    </GenderClientsCardNumberLabel>
                  </GenderClientsCardNumberCountArea>
                </GenderClientsCard>
                <GenderClientsCard>
                  <GenderClientsCardTitleArea>
                    <WomanHeadIcon width={24} height={24} color="#FF3F6D" />
                    <GenderClientsCardTitle>Mulher</GenderClientsCardTitle>
                  </GenderClientsCardTitleArea>
                  <GenderClientsCardNumberCountArea>
                    <GenderClientsCardNumberCount>
                      {femaleCheckins}
                    </GenderClientsCardNumberCount>
                    <GenderClientsCardNumberLabel>
                      {femaleCheckins === 1 ? 'Check-in' : 'Check-ins'}
                    </GenderClientsCardNumberLabel>
                  </GenderClientsCardNumberCountArea>
                </GenderClientsCard>
                <GenderClientsCard>
                  <GenderClientsCardTitleArea>
                    <ManHeadIcon width={24} height={24} color="#FF3F6D" />
                    <GenderClientsCardTitle>Total</GenderClientsCardTitle>
                  </GenderClientsCardTitleArea>
                  <GenderClientsCardNumberCountArea>
                    <GenderClientsCardNumberCount>
                      {maleCheckins + femaleCheckins}
                    </GenderClientsCardNumberCount>
                    <GenderClientsCardNumberLabel>
                      {maleCheckins + femaleCheckins === 1
                        ? 'Check-in'
                        : 'Check-ins'}
                    </GenderClientsCardNumberLabel>
                  </GenderClientsCardNumberCountArea>
                </GenderClientsCard>
              </SwipeHorizontalArea>
              <CreateCouponArea>
                <CreateCouponLabel>Cupons ativos</CreateCouponLabel>
                {establishment?.usersPlans?.plan === 'VIP' && (
                  <CreateCouponButton
                    onPress={() => setShowCreateCouponArea(true)}>
                    <CreateCouponButtonText>Criar cupom</CreateCouponButtonText>
                  </CreateCouponButton>
                )}
              </CreateCouponArea>
              {coupons.length === 0 && !showCreateCouponArea && (
                <EmptyListMessage>
                  <EmptyListMessageText>
                    Você ainda não possui cupons ativos
                  </EmptyListMessageText>
                </EmptyListMessage>
              )}
            </>
          }
          data={coupons}
          renderItem={({item, index}) => (
            <Coupon
              key={index}
              photo={profilePicture}
              item={item}
              name={establishment.name}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {showCreateCouponArea && (
        <CreateCoupon
          setShowCreateCouponArea={setShowCreateCouponArea}
          navigation={navigation}
        />
      )}
      {!showCreateCouponArea && (
        <ReadQrCodeButton onPress={handlePressOnReadQrCodeButton}>
          <ReadQrCodeButtonText>Ler QR code</ReadQrCodeButtonText>
        </ReadQrCodeButton>
      )}
    </PageArea>
  );
};

export default Page;
