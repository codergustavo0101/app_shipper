import React, {useState} from 'react';

import {
  PageArea,
  ContentArea,
  HeaderArea,
  CallToActionText,
  StarsArea,
  StarButton,
  BackButtonArea,
  BackButton,
  PageTitle,
  SavePreferencesButton,
  SavePreferencesButtonText,
  SafeAreaPressable,
  SafeArea,
} from './styled';

import ArrowCircleLeftIcon from '../../../assets/icons/arrow-circle-left.svg';
import StarIcon from '../../../assets/icons/star.svg';

const Page = ({setShowRate, name, handler, rate}) => {
  const [internalRank, setInternalRank] = useState(rate);

  const getFillColor = starRate => {
    const filledColor = '#FFF505';
    const unfilledColor = '#EAEAE9';

    if (internalRank === null) {
      setInternalRank(3);
    }

    return starRate <= internalRank ? filledColor : unfilledColor;
  };

  return (
    <PageArea>
      <ContentArea>
        <HeaderArea>
          <BackButtonArea>
            <BackButton onPress={() => setShowRate(false)}>
              <ArrowCircleLeftIcon width={28} height={28} color="#FF3F6D" />
            </BackButton>
          </BackButtonArea>
          <PageTitle>Avaliar Estabelecimento</PageTitle>
        </HeaderArea>
        <CallToActionText>
          Como você avalia o perfil de {name}?
        </CallToActionText>
        <StarsArea>
          <StarButton onPress={() => setInternalRank(1)}>
            <StarIcon width={35} heigth={35} color={getFillColor(1)} />
          </StarButton>
          <StarButton onPress={() => setInternalRank(2)}>
            <StarIcon width={35} heigth={35} color={getFillColor(2)} />
          </StarButton>
          <StarButton onPress={() => setInternalRank(3)}>
            <StarIcon width={35} heigth={35} color={getFillColor(3)} />
          </StarButton>
          <StarButton onPress={() => setInternalRank(4)}>
            <StarIcon width={35} heigth={35} color={getFillColor(4)} />
          </StarButton>
          <StarButton onPress={() => setInternalRank(5)}>
            <StarIcon width={35} heigth={35} color={getFillColor(5)} />
          </StarButton>
        </StarsArea>
        <SavePreferencesButton onPress={() => handler(internalRank)}>
          <SavePreferencesButtonText>
            Salvar preferências
          </SavePreferencesButtonText>
        </SavePreferencesButton>
      </ContentArea>
      <SafeAreaPressable onPress={() => setShowRate(false)}>
        <SafeArea />
      </SafeAreaPressable>
    </PageArea>
  );
};

export default Page;
