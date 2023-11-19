import React, {useState, useEffect} from 'react';
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
  BackButtonArea,
  BackButton,
} from './styled';

import Background from '../../assets/images/background-splash.png';

import HeartIcon from '../../assets/icons/heart.svg';

import ArrowCircleLeftIcon from '../../assets/icons/arrow-circle-left.svg';

const Page = ({navigation, route}) => {
  const establishment = useSelector(state => state.establishment);

  const [profilePicture, setProfilePicture] = useState(null);

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
    filterImagesAndSetAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const {product, discount, textValue} = route.params;

  const match1Profile = 'https://picsum.photos/500/500?random=1';
  const match2Profile = 'https://picsum.photos/500/500?random=2';

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
      <ContentArea>
        <PageTitleArea>
          <PageTitle>
            {establishment.name}
            {'\n'}
            SHIPPA VOCÊS COM{'\n'}
            {product} COM{' '}
            {discount.includes('%')
              ? discount
              : `R$${Number(discount).toFixed(2).replace('.', ',')}`}{' '}
            OFF.
          </PageTitle>
        </PageTitleArea>
        <MatchArea>
          <BrandLogoArea>
            <BrandLogo source={{uri: profilePicture}} />
          </BrandLogoArea>
          <MatchPicturesArea>
            <MatchPictureBackground>
              <MatchPicture source={{uri: match1Profile}} />
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
              <MatchPicture source={{uri: match2Profile}} />
            </MatchPictureBackground>
          </MatchPicturesArea>
        </MatchArea>
        <MessageArea>
          <Message>
            {textValue}
            {'\n'}
            *PROMOÇÃO NÃO CUMULATIVA.
          </Message>
        </MessageArea>
        <ActionsArea>
          <SendMessageButton>
            <SendMessageButtonText>
              Mandar mensagem agora!
            </SendMessageButtonText>
          </SendMessageButton>
          <KeepSwipingButton>
            <KeepSwipingButtonText>Continuar deslizando</KeepSwipingButtonText>
          </KeepSwipingButton>
        </ActionsArea>
      </ContentArea>
      <BackButtonArea>
        <BackButton onPress={() => navigation.goBack()}>
          <ArrowCircleLeftIcon
            width={28}
            height={27}
            color="#FF3F6D"
            fill="#fff"
          />
        </BackButton>
      </BackButtonArea>
    </Container>
  );
};

export default Page;
