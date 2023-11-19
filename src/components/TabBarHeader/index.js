import React from 'react';
import {useSelector} from 'react-redux';

import {
  ComponentArea,
  Background,
  RankingAndLogoArea,
  RankingArea,
  RankingTitle,
  RankingNumberAndStarArea,
  RankingNumber,
  LogoArea,
  Logo,
  AvatarArea,
  AvatarImage,
} from './styled';

import StarIcon from '../../assets/icons/star.svg';

import LogoImage from '../../assets/images/logo-only-white.png';

const Component = ({navigation}) => {
  const user = useSelector(state => state.user);

  const onPressOnAvatar = () => {
    navigation.navigate('Cadastro6');
  };

  return (
    <ComponentArea>
      <Background>
        <RankingAndLogoArea>
          {user?.usersPlans?.plan === 'VIP' && (
            <RankingArea>
              <RankingTitle>Perfil</RankingTitle>
              <RankingNumberAndStarArea>
                <RankingNumber>{user.profileRank}</RankingNumber>
                <StarIcon width={12} height={12} color={'#FFF505'} />
              </RankingNumberAndStarArea>
            </RankingArea>
          )}
          <LogoArea>
            <Logo source={LogoImage} />
          </LogoArea>
          {user?.usersPlans?.plan === 'VIP' && (
            <RankingArea>
              <RankingTitle>Match</RankingTitle>
              <RankingNumberAndStarArea>
                <RankingNumber>{user.matchRank}</RankingNumber>
                <StarIcon width={12} height={12} color={'#FFF505'} />
              </RankingNumberAndStarArea>
            </RankingArea>
          )}
        </RankingAndLogoArea>
        <AvatarArea onPress={onPressOnAvatar}>
          <AvatarImage
            source={{
              uri: user?.photos[0]?.photoUrl,
            }}
          />
        </AvatarArea>
      </Background>
    </ComponentArea>
  );
};

export default Component;
