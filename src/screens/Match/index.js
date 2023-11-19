import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

import {
  Container,
  BackgroundSplashArea,
  BackgroundSplash,
  ContentArea,
  PageTitleArea,
  PageTitle,
  BrandLogoArea,
  BrandLogo,
  MatchArea,
  MatchPicturesArea,
  MatchPictureBackground,
  MatchPicture,
  HeartArea,
  MessageArea,
  Message,
  ActionsArea,
  SendMessageButton,
  SendMessageButtonText,
  KeepSwipingButton,
  KeepSwipingButtonText,
} from './styled';

import Background from '../../assets/images/background-splash.png';

import HeartIcon from '../../assets/icons/heart.svg';

const Page = ({navigation, route}) => {
  const user = useSelector(state => state.user);

  const {chatRoomId, coupon, hasCoupon, matchUser} = route.params;

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const handleClickOnSendMessage = () => {
    navigation.replace('Chat', {
      id: chatRoomId,
      userMatchId: matchUser?.id,
      matchName: matchUser?.name,
      matchAvatar: matchUser?.photos[0]?.photoUrl,
      profileRank: user?.profileRank,
      matchRank: matchUser?.profileRank,
    });
  };

  const handleClickOnKeepSwiping = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <BackgroundSplashArea>
        <BackgroundSplash source={Background} />
      </BackgroundSplashArea>
      {hasCoupon ? (
        <ContentArea>
          <PageTitleArea>
            <PageTitle>
              {coupon?.establishment?.name}
              {'\n'}
              SHIPPA VOCÊS COM{'\n'}
              {coupon?.coupon?.product} COM{' '}
              {coupon?.coupon?.discount?.includes('%')
                ? coupon?.coupon?.discount
                : `R$${Number(coupon?.coupon?.discount)
                    .toFixed(2)
                    .replace('.', ',')}`}{' '}
              OFF.
            </PageTitle>
          </PageTitleArea>
          <MatchArea>
            <BrandLogoArea>
              {coupon?.establishment?.photos.length > 0 && (
                <BrandLogo
                  source={{uri: coupon?.establishment?.photos[0]?.photoUrl}}
                />
              )}
            </BrandLogoArea>
            <MatchPicturesArea>
              <MatchPictureBackground>
                <MatchPicture source={{uri: user?.photos[0]?.photoUrl}} />
              </MatchPictureBackground>
              <HeartArea>
                <HeartIcon
                  width={31}
                  heigth={27}
                  color="#FF3F6D"
                  fill="#FF3F6D"
                />
              </HeartArea>
              <MatchPictureBackground>
                {matchUser?.photos?.length > 0 && (
                  <MatchPicture
                    source={{uri: matchUser?.photos[0]?.photoUrl}}
                  />
                )}
              </MatchPictureBackground>
            </MatchPicturesArea>
          </MatchArea>
          <MessageArea>
            <Message>
              {coupon?.coupon.description}
              {'\n'}
              *PROMOÇÃO NÃO CUMULATIVA.
            </Message>
          </MessageArea>
          <ActionsArea>
            <SendMessageButton onPress={handleClickOnSendMessage}>
              <SendMessageButtonText>
                Mandar mensagem agora!
              </SendMessageButtonText>
            </SendMessageButton>
            <KeepSwipingButton onPress={handleClickOnKeepSwiping}>
              <KeepSwipingButtonText>
                Continuar deslizando
              </KeepSwipingButtonText>
            </KeepSwipingButton>
          </ActionsArea>
        </ContentArea>
      ) : (
        <ContentArea>
          <PageTitleArea>
            <PageTitle>É UM SHIP!</PageTitle>
          </PageTitleArea>
          <MatchArea>
            <BrandLogoArea>
              <BrandLogo
                source={require('../../assets/images/logo-only-white.png')}
              />
            </BrandLogoArea>
            <MatchPicturesArea>
              <MatchPictureBackground>
                <MatchPicture source={{uri: user?.photos[0]?.photoUrl}} />
              </MatchPictureBackground>
              <HeartArea>
                <HeartIcon
                  width={31}
                  heigth={27}
                  color="#FF3F6D"
                  fill="#FF3F6D"
                />
              </HeartArea>
              <MatchPictureBackground>
                {matchUser?.photos?.length > 0 && (
                  <MatchPicture
                    source={{uri: matchUser?.photos[0]?.photoUrl}}
                  />
                )}
              </MatchPictureBackground>
            </MatchPicturesArea>
          </MatchArea>

          <ActionsArea>
            <SendMessageButton onPress={handleClickOnSendMessage}>
              <SendMessageButtonText>
                Mandar mensagem agora!
              </SendMessageButtonText>
            </SendMessageButton>
            <KeepSwipingButton onPress={handleClickOnKeepSwiping}>
              <KeepSwipingButtonText>
                Continuar deslizando
              </KeepSwipingButtonText>
            </KeepSwipingButton>
          </ActionsArea>
        </ContentArea>
      )}
    </Container>
  );
};

export default Page;
