import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import {useSelector} from 'react-redux';

import {
  LocalDetailsArea,
  LocalCardHeader,
  LocalDetailsLogoArea,
  LocalDetailsLogo,
  LocalDetailsName,
  LocalDetailsRankingArea,
  RankingTitle,
  RankingValueAndStar,
  RankingValue,
  LocalDetailsActionsArea,
  RateButton,
  RateButtonText,
  DoCheckinButton,
  DoCheckinButtonText,
  LastCheckinsArea,
  LastCheckinsTitle,
} from './styled';

import {NewLikesList} from '../../../components';

import StarIcon from '../../../assets/icons/star.svg';
import CheckinsService from '../../../services/CheckinsService';

const LocalDetails = ({setShowRateArea, data}) => {
  const userLogged = useSelector(state => state.user);

  const [loading, setLoading] = useState(true);
  const [newLikes, setNewLikes] = useState([]);

  const profilePicture = data?.photos?.find(photo => photo.type === 'profile');

  const fetchLastCheckins = async () => {
    setLoading(true);

    try {
      const response = await CheckinsService.getCheckins({id: data?.id});

      const {checkins} = response;

      const newLikesMapped = [];
      const alreadyAddedUsersId = [];

      checkins.map(({user}) => {
        if (
          user.id !== userLogged.id &&
          !alreadyAddedUsersId.includes(user.id)
        ) {
          alreadyAddedUsersId.push(user.id);

          newLikesMapped.push({
            id: user.id,
            avatar: user.photos[0]?.photoUrl,
            name: user.name,
          });
        }
      });

      setNewLikes(newLikesMapped);
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;
      Alert.alert('Erro', errorMessage);
    }

    setLoading(false);
  };

  const handleClickOnDoCheckinButton = async () => {
    try {
      await CheckinsService.checkin({establishmentId: data?.id});

      Alert.alert('Sucesso', 'Check-in realizado com sucesso!');

      fetchLastCheckins();
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
    fetchLastCheckins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocalDetailsArea>
      <LocalCardHeader>
        <LocalDetailsLogoArea>
          <LocalDetailsLogo source={{uri: profilePicture?.photoUrl}} />
          <LocalDetailsName numberOfLines={1}>{data?.name}</LocalDetailsName>
        </LocalDetailsLogoArea>
        <LocalDetailsRankingArea>
          <RankingTitle>Avaliação</RankingTitle>
          <RankingValueAndStar>
            <RankingValue>{data?.profileRank}</RankingValue>
            <StarIcon width={12} height={12} color="#FFF505" />
          </RankingValueAndStar>
        </LocalDetailsRankingArea>
      </LocalCardHeader>
      <LocalDetailsActionsArea>
        <RateButton onPress={() => setShowRateArea(true)}>
          <RateButtonText>Avaliar</RateButtonText>
        </RateButton>
        <DoCheckinButton onPress={handleClickOnDoCheckinButton}>
          <DoCheckinButtonText>Fazer check-in</DoCheckinButtonText>
        </DoCheckinButton>
      </LocalDetailsActionsArea>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#FF3F6D"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginTop: 50}}
        />
      )}
      {newLikes.length > 0 && (
        <LastCheckinsArea>
          <LastCheckinsTitle>Ultimos check-ins</LastCheckinsTitle>
          <NewLikesList newLikes={newLikes} />
        </LastCheckinsArea>
      )}
    </LocalDetailsArea>
  );
};

export default LocalDetails;
