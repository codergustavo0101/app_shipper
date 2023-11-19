import React, {useState} from 'react';

import {
  PageArea,
  ContentArea,
  HeaderArea,
  BackButtonArea,
  BackButton,
  PageTitle,
  SavePreferencesButton,
  SavePreferencesButtonText,
  SafeAreaPressable,
  SafeArea,
} from './styled';

import {RangeInputDefault} from '../../../components';

import ArrowCircleLeftIcon from '../../../assets/icons/arrow-circle-left.svg';

const Page = ({setShowFilter, distance, refreshFilter}) => {
  const [internalDistance, setInternalDistance] = useState(distance);

  return (
    <PageArea>
      <ContentArea>
        <HeaderArea>
          <BackButtonArea>
            <BackButton onPress={() => setShowFilter(false)}>
              <ArrowCircleLeftIcon width={28} height={28} color="#FF3F6D" />
            </BackButton>
          </BackButtonArea>
          <PageTitle>Filtrar locais por distancia</PageTitle>
        </HeaderArea>
        <RangeInputDefault
          label="Distância máxima"
          value={internalDistance}
          setValue={setInternalDistance}
          unity="KM"
          min={1}
        />
        <SavePreferencesButton onPress={() => refreshFilter(internalDistance)}>
          <SavePreferencesButtonText>
            Salvar preferências
          </SavePreferencesButtonText>
        </SavePreferencesButton>
      </ContentArea>
      <SafeAreaPressable onPress={() => setShowFilter(false)}>
        <SafeArea />
      </SafeAreaPressable>
    </PageArea>
  );
};

export default Page;
