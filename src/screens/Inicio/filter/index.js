import React from 'react';

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

import {
  ChooseGenderDefault,
  LocationInputDefault,
  RangeInputMinMax,
  RangeInputDefault,
} from '../../../components';

import ArrowCircleLeftIcon from '../../../assets/icons/arrow-circle-left.svg';

const Page = ({
  setShowFilter,
  gender,
  setGender,
  age,
  setAge,
  distance,
  setDistance,
  refreshFilter,
}) => {
  const genderOptions = [
    {
      value: 'M',
      label: 'Homens',
    },
    {
      value: 'F',
      label: 'Mulheres',
    },
    {
      value: 'BOTH',
      label: 'Ambos',
    },
  ];

  return (
    <PageArea>
      <ContentArea>
        <HeaderArea>
          <BackButtonArea>
            <BackButton onPress={() => setShowFilter(false)}>
              <ArrowCircleLeftIcon width={28} height={28} color="#FF3F6D" />
            </BackButton>
          </BackButtonArea>
          <PageTitle>Configurar preferências</PageTitle>
        </HeaderArea>
        <ChooseGenderDefault
          label="Mostrar"
          options={genderOptions}
          setValue={setGender}
          value={gender}
        />
        <LocationInputDefault label="Localização" />
        <RangeInputMinMax
          label="Preferência de idade"
          value={age}
          setValue={setAge}
          min={18}
          max={50}
        />
        <RangeInputDefault
          label="Distância máxima"
          value={distance}
          setValue={setDistance}
          unity="KM"
        />
        <SavePreferencesButton onPress={refreshFilter}>
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
