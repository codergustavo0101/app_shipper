import React from 'react';
import {Linking} from 'react-native';

import {
  TouchableArea,
  LocalCardArea,
  LocalCardHeader,
  LocalCardLogoAndName,
  LocalCardLogo,
  LocalCardName,
  LocalCardRankingArea,
  RankingTitle,
  RankingValueAndStar,
  RankingValue,
  LocalCardContent,
  CheckinsCountArea,
  CheckinsCountTitle,
  ChipsArea,
  AddressArea,
  AddressTitle,
  Address,
} from './styled';

import Chips from '../../../components/Chips';

import StarIcon from '../../../assets/icons/star.svg';
import PeopleIcon from '../../../assets/icons/people.svg';

const LocalCard = ({
  onPress,
  showMenuArea,
  isFirstCard,
  data,
  setMenuPhoto,
}) => {
  const profilePicture = data?.photos.find(item => item.type === 'profile');
  const menuPhoto = data?.photos.find(item => item.type === 'menu');

  const handleClickOnMenuChip = () => {
    setMenuPhoto(menuPhoto?.photoUrl);
    showMenuArea();
  };

  const handlePressOnAddressArea = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${data?.lat},${data?.lng}`;

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  };

  return (
    <TouchableArea
      onPress={() => {
        onPress();
      }}>
      <LocalCardArea isFirstCard={isFirstCard}>
        <LocalCardHeader>
          <LocalCardLogoAndName>
            <LocalCardLogo source={{uri: profilePicture?.photoUrl}} />
            <LocalCardName numberOfLines={1}>{data?.name}</LocalCardName>
          </LocalCardLogoAndName>
          <LocalCardRankingArea>
            <RankingTitle>Avaliação</RankingTitle>
            <RankingValueAndStar>
              <RankingValue>{data?.profileRank}</RankingValue>
              <StarIcon width={12} height={12} color="#FFF505" />
            </RankingValueAndStar>
          </LocalCardRankingArea>
        </LocalCardHeader>
        <LocalCardContent>
          <CheckinsCountArea>
            <PeopleIcon width={21} height={21} color="#FF3F6D" />
            <CheckinsCountTitle>
              {data.checkinsCount}{' '}
              {data.checkinsCount > 1 ? 'check-ins' : 'check-in'}
            </CheckinsCountTitle>
          </CheckinsCountArea>
          <ChipsArea>
            <Chips
              label={'Whatsapp'}
              icon={'whatsapp'}
              url={`https://wa.me/55${data?.phone}`}
            />
            <Chips
              label={'Instagram'}
              icon={'instagram'}
              url={`https://instagram.com/${data?.instagram}`}
            />
            <Chips
              label={'Cardápio'}
              icon={'book'}
              action={handleClickOnMenuChip}
            />
          </ChipsArea>
          <AddressArea onPress={handlePressOnAddressArea}>
            <Address>
              <AddressTitle>Endereço: </AddressTitle>
              {data?.address}
            </Address>
          </AddressArea>
        </LocalCardContent>
      </LocalCardArea>
    </TouchableArea>
  );
};

export default LocalCard;
