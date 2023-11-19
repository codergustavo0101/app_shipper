import React, {useState, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {
  ComponentArea,
  ScrollableArea,
  DescriptionArea,
  InfoDescription,
  NameAndAge,
  DistanceCityState,
  RankingAndLogoArea,
  RankingArea,
  RankingTitle,
  RankingNumberAndStarArea,
  RankingNumber,
  Section,
  Title,
  AboutArea,
  Description,
  CheckinPlaceLogoArea,
  CheckinPlaceLogo,
  ScrollBar,
} from './styled';

import StarIcon from '../../../assets/icons/star.svg';

import Chips from '../../../components/Chips';

const MoreInfoArea = ({character}) => {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const [socials, setSocials] = useState([]);
  const [moreInfo, setMoreInfo] = useState([]);

  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    inputRange: [0, 220],
    outputRange: [0, 220],
    extrapolate: 'clamp',
  });

  const filterSocialsFromCharacter = () => {
    const possibleQuestions = ['Instagram (Opcional)', 'Linkedin (Opcional)'];

    const icons = {
      'Instagram (Opcional)': 'instagram',
      'Linkedin (Opcional)': 'linkedin',
    };

    const labels = {
      'Instagram (Opcional)': 'Instagram',
      'Linkedin (Opcional)': 'Linkedin',
    };

    const links = {
      'Instagram (Opcional)': 'https://www.instagram.com/',
      'Linkedin (Opcional)': 'https://www.linkedin.com/',
    };

    const filteredSocials = character.otherInformation?.filter(
      info =>
        possibleQuestions.includes(info.question) && info.answer.length > 0,
    );

    const newSocials = [];

    filteredSocials.forEach(social => {
      const newSocial = {
        icon: icons[social.question],
        label: labels[social.question],
        link: links[social.question] + social.answer,
      };

      newSocials.push(newSocial);
    });

    setSocials(newSocials);
  };

  const filterMoreInfoFromCharacter = () => {
    const possibleQuestions = [
      'Você tem filhos? (Opcional)',
      'Você fuma? (Opcional)',
      'Qual é sua altura? (Opcional)',
      'Qual é sua escolaridade? (Opcional)',
      'Qual é sua profissão? (Opcional)',
      'Você tá vacinado do COVID-19? (Opcional)',
      'Morando em (Opcional)',
      'Orientação sexual (Opcional)',
    ];

    const icons = {
      'Você tem filhos? (Opcional)': 'child',
      'Você fuma? (Opcional)': '',
      'Qual é sua altura? (Opcional)': 'scale',
      'Qual é sua escolaridade? (Opcional)': 'university',
      'Qual é sua profissão? (Opcional)': '',
      'Você tá vacinado do COVID-19? (Opcional)': 'vaccine',
      'Morando em (Opcional)': '',
      'Orientação sexual (Opcional)': 'sexuality',
    };

    const filteredMoreInfo = character.otherInformation?.filter(
      info =>
        possibleQuestions.includes(info.question) && info.answer.length > 0,
    );

    const newMoreInfo = [];

    newMoreInfo.push({
      icon: 'gender',
      label: character.gender === 'M' ? 'Homem' : 'Mulher',
    });

    filteredMoreInfo.forEach(info => {
      const newInfo = {
        icon: icons[info.question],
        label: info.answer,
      };

      newMoreInfo.push(newInfo);
    });

    setMoreInfo(newMoreInfo);
  };

  useEffect(() => {
    filterSocialsFromCharacter();
    filterMoreInfoFromCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ComponentArea>
      <ScrollableArea
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        onContentSizeChange={height => {
          setCompleteScrollBarHeight(height);
        }}
        onLayout={({
          nativeEvent: {
            layout: {height},
          },
        }) => {
          setVisibleScrollBarHeight(height);
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollIndicator}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
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
        <Section>
          <Title>Sobre mim</Title>
          <AboutArea>
            <Description>
              {character.description ||
                `Parece que esse usuário ainda não escreveu uma descrição. ${'\n\n'}`}
            </Description>
          </AboutArea>
        </Section>
        {socials.length > 0 && (
          <Section>
            <Title>Redes sociais</Title>
            <AboutArea>
              {socials.map((social, key) => {
                return (
                  <Chips
                    key={key}
                    label={social.label}
                    icon={social.icon}
                    url={social.link || null}
                  />
                );
              })}
            </AboutArea>
          </Section>
        )}
        {moreInfo?.length > 0 && (
          <Section>
            <Title>Mais informações</Title>
            <AboutArea>
              {moreInfo?.map((info, key) => {
                return (
                  <Chips
                    key={key}
                    label={info.label}
                    icon={info.icon}
                    url={info.url || null}
                  />
                );
              })}
            </AboutArea>
          </Section>
        )}
        {character.checkins?.length > 0 && (
          <Section
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              paddingBottom: 74,
            }}>
            <Title>Check-ins</Title>
            <AboutArea>
              {character.checkins?.map((checkin, key) => {
                return (
                  <CheckinPlaceLogoArea key={key}>
                    <CheckinPlaceLogo
                      source={{uri: checkin.establishment?.photos[0]?.photoUrl}}
                    />
                  </CheckinPlaceLogoArea>
                );
              })}
            </AboutArea>
          </Section>
        )}
      </ScrollableArea>
      <ScrollBar>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 6,
            borderRadius: 8,
            backgroundColor: '#FF3F6D',
            height: 70,
            transform: [{translateY: scrollIndicatorPosition}],
          }}
        />
      </ScrollBar>
    </ComponentArea>
  );
};

export default MoreInfoArea;
