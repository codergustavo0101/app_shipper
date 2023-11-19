import React from 'react';
import {Alert} from 'react-native';
import TinderCard from 'react-tinder-card';

import {
  ContainerCard,
  CardContainer,
  CardArea,
  Card,
  CardImage,
  CardBackground,
  DescriptionArea,
  InfoDescription,
  NameAndAge,
  DistanceCityState,
  RankingAndLogoArea,
  RankingArea,
  RankingTitle,
  RankingNumberAndStarArea,
  RankingNumber,
  OnLoadedArea,
  CardImageSliderArea,
  ReportButtonArea,
  ReportButton,
  BlockIconImage,
  MoreInfoButtonArea,
  MoreInfoButton,
  MoreInfoIconImage,
  UnderCardArea,
  UnderCardOne,
  UnderCardTwo,
  LoadingArea,
  LoadingIcon,
} from './styled';

import StarIcon from '../../assets/icons/star.svg';
import BlockIcon from '../../assets/images/block.png';
import MoreInfoIcon from '../../assets/images/more-info.png';
import ReportArea from './report';
import RateArea from './rate';
import MoreInfoArea from './more-info';

import ReportedService from '../../services/ReportedService';
import ProfileRankService from '../../services/ProfileRankService';

const Advanced = ({
  characters,
  childRefs,
  outOfFrame,
  showButtons,
  closeAllAreas,
  showReportArea,
  setShowReportArea,
  showRateArea,
  showMoreInfoArea,
  setShowMoreInfoArea,
  rate,
  setRate,
}) => {
  const showArea = area => {
    const isOpenReport = showReportArea;
    const isOpenMoreInfo = showMoreInfoArea;
    const isOpenRateArea = showRateArea;

    switch (area) {
      case 'report':
        closeAllAreas();

        setShowReportArea(!isOpenReport && !isOpenMoreInfo && !isOpenRateArea);
        break;
      case 'moreInfo':
        closeAllAreas();
        setShowMoreInfoArea(!isOpenMoreInfo);
        break;
      default:
        break;
    }
  };

  const handleRateAreaButton = async (id, starRate) => {
    setRate(starRate);

    const response = await ProfileRankService.rank({
      id,
      rank: starRate,
    });

    if (response) {
      Alert.alert('Perfil avaliado com sucesso!');
    } else {
      Alert.alert('Erro ao avaliar perfil!');
    }

    closeAllAreas();
  };

  const reportUser = async id => {
    const response = await ReportedService.reportUser({id});

    if (response) {
      Alert.alert('Usuário denunciado com sucesso!');

      closeAllAreas();
    } else {
      Alert.alert('Erro ao denunciar usuário!');
    }
  };

  return (
    <ContainerCard>
      <CardContainer>
        {characters.length === 0 && (
          <CardArea>
            <LoadingArea>
              <LoadingIcon color={'#ff3f6d'} size="large" />
            </LoadingArea>
          </CardArea>
        )}
        {characters.map((character, index) => (
          <CardArea key={index}>
            <TinderCard
              flickOnSwipe={false}
              ref={childRefs[index]}
              key={character.id}
              preventSwipe={['up', 'down']}
              onCardLeftScreen={() => outOfFrame(character.id)}>
              <Card>
                {!Array.isArray(character.img) ? (
                  <CardImage source={{uri: character.img}} />
                ) : (
                  <CardBackground />
                )}
                <DescriptionArea>
                  <InfoDescription>
                    <NameAndAge>
                      {character.name}, {character.age}
                    </NameAndAge>
                    <DistanceCityState>
                      {character.distance} KM | {character.city}
                      {character.state}
                    </DistanceCityState>
                  </InfoDescription>
                  <RankingAndLogoArea>
                    <RankingArea>
                      <RankingTitle>Perfil</RankingTitle>
                      <RankingNumberAndStarArea>
                        <RankingNumber>4.1</RankingNumber>
                        <StarIcon width={12} height={12} color={'#FFF505'} />
                      </RankingNumberAndStarArea>
                    </RankingArea>
                    <RankingArea>
                      <RankingTitle>Match</RankingTitle>
                      <RankingNumberAndStarArea>
                        <RankingNumber>3.1</RankingNumber>
                        <StarIcon width={12} height={12} color={'#FFF505'} />
                      </RankingNumberAndStarArea>
                    </RankingArea>
                  </RankingAndLogoArea>
                </DescriptionArea>
              </Card>
            </TinderCard>
            {showButtons && (
              <OnLoadedArea>
                {!showReportArea && !showRateArea && (
                  <DescriptionArea>
                    <InfoDescription>
                      <NameAndAge>
                        {character.name}, {character.age}
                      </NameAndAge>
                      <DistanceCityState numberOfLines={1}>
                        {character.distance} KM{' '}
                        {character.city ? ` | ${character.city}` : ''}
                      </DistanceCityState>
                    </InfoDescription>
                    <RankingAndLogoArea>
                      <RankingArea>
                        <RankingTitle>Perfil</RankingTitle>
                        <RankingNumberAndStarArea>
                          <RankingNumber>{character.profileRank}</RankingNumber>
                          <StarIcon width={12} height={12} color={'#FFF505'} />
                        </RankingNumberAndStarArea>
                      </RankingArea>
                      <RankingArea>
                        <RankingTitle>Match</RankingTitle>
                        <RankingNumberAndStarArea>
                          <RankingNumber>{character.matchRank}</RankingNumber>
                          <StarIcon width={12} height={12} color={'#FFF505'} />
                        </RankingNumberAndStarArea>
                      </RankingArea>
                    </RankingAndLogoArea>
                  </DescriptionArea>
                )}
                {showReportArea && (
                  <ReportArea
                    name={character.name}
                    handler={() => {
                      reportUser(character.id);
                    }}
                  />
                )}
                {showRateArea && (
                  <RateArea
                    id={character.id}
                    name={character.name}
                    handler={handleRateAreaButton}
                    rate={rate}
                  />
                )}
                {showMoreInfoArea && <MoreInfoArea character={character} />}
                {Array.isArray(character.img) &&
                  character.id === characters[characters.length - 1].id && (
                    <CardImageSliderArea
                      images={character.img}
                      dotColor="#ff3f6d"
                      inactiveDotColor="#fff"
                      // eslint-disable-next-line react-native/no-inline-styles
                      dotStyle={{
                        width: 6,
                        height: 6,
                        borderRadius: 6,
                        marginHorizontal: -2,
                        padding: 0,
                        marginBottom: 24,
                      }}
                      autoplay
                      circleLoop
                    />
                  )}
                <ReportButtonArea>
                  <ReportButton onPress={() => showArea('report')}>
                    <BlockIconImage source={BlockIcon} />
                  </ReportButton>
                </ReportButtonArea>
                <MoreInfoButtonArea>
                  <MoreInfoButton onPress={() => showArea('moreInfo')}>
                    <MoreInfoIconImage source={MoreInfoIcon} />
                  </MoreInfoButton>
                </MoreInfoButtonArea>
              </OnLoadedArea>
            )}
          </CardArea>
        ))}
        <UnderCardArea>
          {characters.length > 1 && <UnderCardOne />}
          {characters.length > 2 && <UnderCardTwo />}
        </UnderCardArea>
      </CardContainer>
    </ContainerCard>
  );
};

export default Advanced;
