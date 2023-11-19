import React, {useEffect, useState} from 'react';

import {PageArea, HeaderWithBackButton} from '../../components';

import {
  Container,
  ContentArea,
  PageTitle,
  PageActionArea,
  SubscribeButton,
  SubscribeButtonText,
  ContinueButton,
  ContinueButtonText,
} from './styled';

import PlansTable from './plansTable';
import PlansPrice from './plansPrice';

const Page = ({navigation}) => {
  const [plans, setPlans] = useState([]);

  const [selectedPlan, setSelectedPlan] = useState(2);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    setPlans([
      {
        id: 'free',
        title: 'Free',
        benefits: [
          {
            digitalMenu: {
              value: true,
              label: 'Cardápio Digital',
            },
          },
          {
            vipList: {
              value: true,
              label: 'Lista Vip',
            },
          },
          {
            meetingHall: {
              value: true,
              label: 'Hall de Encontros',
            },
          },
          {
            checkin: {
              value: true,
              label: 'Check-in',
            },
          },
          {
            localCampaign: {
              value: false,
              label: 'Campanhas Locais',
            },
          },
          {
            matchCoupon: {
              value: false,
              label: 'Cupom de Match',
            },
          },
          {
            marketingData: {
              value: false,
              label: 'Dados de Marketing',
            },
          },
        ],
      },
      {
        id: 'vip',
        title: 'Vip',
        benefits: [
          {
            digitalMenu: {
              value: true,
              label: 'Cardápio Digital',
            },
          },
          {
            vipList: {
              value: true,
              label: 'Lista Vip',
            },
          },
          {
            meetingHall: {
              value: true,
              label: 'Hall de Encontros',
            },
          },
          {
            checkin: {
              value: true,
              label: 'Check-in',
            },
          },
          {
            localCampaign: {
              value: true,
              label: 'Campanhas Locais',
            },
          },
          {
            matchCoupon: {
              value: true,
              label: 'Cupom de Match',
            },
          },
          {
            marketingData: {
              value: true,
              label: 'Dados de Marketing',
            },
          },
        ],
      },
    ]);

    setPrices([
      {
        id: 1,
        months: 12,
        price: 7,
      },
      {
        id: 2,
        months: 6,
        price: 12.73,
        economy: 36,
      },
      {
        id: 3,
        months: 1,
        price: 19.9,
      },
    ]);
  }, []);

  const handleSubmit = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Estabelecimento'}],
    });
  };

  return (
    <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
      <Container>
        <HeaderWithBackButton navigation={navigation} />
        <ContentArea>
          <PageTitle>Selecione seu plano</PageTitle>
          <PlansTable plans={plans} />
          <PlansPrice
            prices={prices}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
          <PageActionArea>
            <SubscribeButton onPress={handleSubmit}>
              <SubscribeButtonText>Assinar</SubscribeButtonText>
            </SubscribeButton>
            <ContinueButton onPress={handleSubmit}>
              <ContinueButtonText>Continuar Como FREE</ContinueButtonText>
            </ContinueButton>
          </PageActionArea>
        </ContentArea>
      </Container>
    </PageArea>
  );
};

export default Page;
