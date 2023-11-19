import React, {useState, useEffect} from 'react';
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
  const establishment = useSelector(state => state.establishment);

  const [profilePicture, setProfilePicture] = useState(null);

  const onPressOnAvatar = () => {
    navigation.navigate('CadastroEstabelecimento6');
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
    filterImagesAndSetAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [establishment]);

  return (
    <ComponentArea>
      <Background>
        <RankingAndLogoArea>
          <RankingArea>
            <RankingTitle>Avaliações</RankingTitle>
            <RankingNumberAndStarArea>
              <RankingNumber>{establishment.profileRank}</RankingNumber>
              <StarIcon width={12} height={12} color={'#FFF505'} />
            </RankingNumberAndStarArea>
          </RankingArea>
          <LogoArea>
            <Logo source={LogoImage} />
          </LogoArea>
        </RankingAndLogoArea>
        <AvatarArea onPress={onPressOnAvatar}>
          <AvatarImage
            source={{
              uri: profilePicture,
            }}
          />
        </AvatarArea>
      </Background>
    </ComponentArea>
  );
};

export default Component;
