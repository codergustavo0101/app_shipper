import React, {useState, useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {PageArea, TabBarHeader, TabScreenTitle} from '../../components';
import {
  Container,
  TopTitleArea,
  FilterButton,
  PeopleCardArea,
  ActionsArea,
  RejectButton,
  FavoriteButton,
  LikeButton,
} from './styled';

import FilterIcon from '../../assets/icons/filter.svg';
import CloseIcon from '../../assets/icons/close.svg';
import StarIcon from '../../assets/icons/star.svg';
import HeartIcon from '../../assets/icons/heart.svg';

import Cards from './cards';
import Filter from './filter';

import MatchService from '../../services/MatchService';
import PreferencesService from '../../services/PreferencesService';

import socket from '../../utils/socket';

let timer = null;

const Page = ({navigation}) => {
  const dispatch = useDispatch();

  const preferences = useSelector(state => state.preferences);
  const user = useSelector(state => state.user);

  const [db, setDb] = useState([]);
  const [characters, setCharacters] = useState(db);
  const [charactersState, setCharactersState] = useState(db);
  const [alreadyRemoved, setAlreadyRemoved] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [showReportArea, setShowReportArea] = useState(false);
  const [showRateArea, setShowRateArea] = useState(false);
  const [showMoreInfoArea, setShowMoreInfoArea] = useState(false);
  const [rate, setRate] = useState(null);
  const [gender, setGender] = useState(preferences.sexPreference);
  const [age, setAge] = useState([
    preferences.minAgePreference,
    preferences.maxAgePreference,
  ]);
  const [distance, setDistance] = useState(preferences.maxDistance);

  const [disableButtons, setDisableButtons] = useState(false);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(i => React.createRef()),
    [db.length],
  );

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const closeAllAreas = () => {
    setShowReportArea(false);
    setShowRateArea(false);
    setShowMoreInfoArea(false);
  };

  const handleReject = async () => {
    closeAllAreas();
    setDisableButtons(true);
    swipe('left');
  };

  const handleLike = async () => {
    closeAllAreas();
    setDisableButtons(true);
    swipe('right');
  };

  const handleFavorite = () => {
    const isOpen = showRateArea;
    closeAllAreas();
    setShowRateArea(!isOpen);
  };

  const refreshFilter = async () => {
    setShowFilter(false);

    await PreferencesService.updatePreferences({
      city: preferences.city,
      minAgePreference: age[0],
      maxAgePreference: age[1],
      maxDistance: typeof distance === 'number' ? distance : distance[0],
      sexPreference: gender,
    });

    dispatch({
      type: 'SET_PREFERENCES',
      payload: {
        minAgePreference: age[0],
        maxAgePreference: age[1],
        maxDistance: typeof distance === 'number' ? distance : distance[0],
        sexPreference: gender,
      },
    });
  };

  const swipe = dir => {
    const cardsLeft = characters.filter(
      person => !alreadyRemoved.includes(person.id),
    );

    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id;

      const index = characters.map(person => person.id).indexOf(toBeRemoved);
      alreadyRemoved.push(toBeRemoved);
      childRefs[index].current.swipe(dir);

      switch (dir) {
        case 'left':
          try {
            (async () => {
              await MatchService.dislikeUser({
                id: characters[characters.length - 1].id,
              });
            })();
          } catch (error) {
            console.log(error);
          }
          break;
        case 'right':
          try {
            (async () => {
              await MatchService.likeUser({
                id: characters[characters.length - 1].id,
              });
            })();
          } catch (error) {
            console.log(error);
          }
          break;
        default:
          break;
      }

      setShowButtons(false);
    }

    setRate(null);

    setTimeout(() => {
      setDisableButtons(false);
    }, 1000);

    if (characters.length === 1) {
      setCharacters([]);
      setCharactersState([]);
      setAlreadyRemoved([]);

      setTimeout(() => {
        setDb([]);
        setDisableButtons(true);
      }, 500);
    }
  };

  const outOfFrame = id => {
    const newCharactersState = charactersState.filter(
      character => character.id !== id,
    );

    setCharacters(newCharactersState);
    setCharactersState(newCharactersState);

    setShowButtons(true);
  };

  useEffect(() => {
    setAge([preferences.minAgePreference, preferences.maxAgePreference]);
    setDistance(preferences.maxDistance);
  }, [preferences]);

  useEffect(() => {
    setCharacters(db);
    setCharactersState(db);

    if (db.length > 0) {
      setDisableButtons(false);
    }
  }, [db]);

  useEffect(() => {
    if (db.length === 0) {
      MatchService.getPossibleMatches().then(possibleMatches => {
        if (possibleMatches.length > 0) {
          setDb(possibleMatches);
        }
      });

      timer = setInterval(() => {
        MatchService.getPossibleMatches().then(possibleMatches => {
          if (possibleMatches.length > 0) {
            setDb(possibleMatches);
          }
        });
      }, 10000);
    }

    if (db.length > 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [preferences, db]);

  useEffect(() => {
    setDb([]);
  }, [preferences]);

  useEffect(() => {
    socket.connect();
    socket.emit('listen-api', user.id);

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on('match', ({chatRoomId, coupon, hasCoupon, matchUser}) => {
      navigation.navigate('Match', {
        chatRoomId,
        coupon,
        hasCoupon,
        matchUser,
      });
    });

    socket.on('refresh', () => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Splash'}],
      });
    });

    return () => {
      socket.off('match');
      socket.off('refresh');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <PageArea
      isTabBar={true}
      statusBarTranslucent={true}
      barStyle="light-content">
      <TabBarHeader navigation={navigation} />
      <Container>
        <TopTitleArea>
          <FilterButton onPress={handleFilter}>
            <FilterIcon width={24} heigth={24} stroke="#FF3F6D" />
          </FilterButton>
          <TabScreenTitle title="Inicio" />
        </TopTitleArea>
        <PeopleCardArea>
          <Cards
            characters={characters}
            childRefs={childRefs}
            outOfFrame={outOfFrame}
            showButtons={showButtons}
            closeAllAreas={closeAllAreas}
            showReportArea={showReportArea}
            setShowReportArea={setShowReportArea}
            showRateArea={showRateArea}
            showMoreInfoArea={showMoreInfoArea}
            setShowMoreInfoArea={setShowMoreInfoArea}
            rate={rate}
            setRate={setRate}
          />
        </PeopleCardArea>
        <ActionsArea>
          <RejectButton
            onPress={() => handleReject()}
            disabled={disableButtons}>
            <CloseIcon width={21} heigth={21} color="#FFFFFF" />
          </RejectButton>
          <FavoriteButton
            onPress={() => handleFavorite()}
            disabled={disableButtons}>
            <StarIcon width={30} heigth={30} color="#FFFFFF" />
          </FavoriteButton>
          <LikeButton onPress={() => handleLike()} disabled={disableButtons}>
            <HeartIcon width={25} heigth={22} color="#FFFFFF" fill="#FFFFFF" />
          </LikeButton>
        </ActionsArea>
      </Container>
      {showFilter && (
        <Filter
          setShowFilter={setShowFilter}
          gender={gender}
          setGender={setGender}
          age={age}
          setAge={setAge}
          distance={distance}
          setDistance={setDistance}
          refreshFilter={refreshFilter}
        />
      )}
    </PageArea>
  );
};

export default Page;
