import React, {useEffect, useState} from 'react';
import {Alert, Linking} from 'react-native';
import {useDispatch} from 'react-redux';

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
  LoadingArea,
  LoadingIcon,
} from './styled';

import PlansTable from './plansTable';
import PlansPrice from './plansPrice';
import BillingService from '../../services/BillingService';

const Page = ({navigation}) => {
  const dispatch = useDispatch();

  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(2);
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPlans([
      {
        id: 'free',
        title: 'Free',
        benefits: [
          {
            unlimitedLikes: {
              value: true,
              label: 'Likes ilimitados',
            },
          },
          {
            unlimitedMessages: {
              value: true,
              label: 'Mensagens ilimitadas',
            },
          },
          {
            matchCoupons: {
              value: true,
              label: 'Cupons de Match',
            },
          },
          {
            advantagesCheckin: {
              value: true,
              label: 'Check-in de Vantagens',
            },
          },
          {
            meetingAgenda: {
              value: true,
              label: 'Agenda de Encontros',
            },
          },
          {
            likedMe: {
              value: false,
              label: 'Me curtiu',
            },
          },
          {
            myRank: {
              value: false,
              label: 'Minhas notas',
            },
          },
        ],
      },
      {
        id: 'vip',
        title: 'Vip',
        benefits: [
          {
            unlimitedLikes: {
              value: true,
              label: 'Likes ilimitados',
            },
          },
          {
            unlimitedMessages: {
              value: true,
              label: 'Mensagens ilimitadas',
            },
          },
          {
            matchCoupons: {
              value: true,
              label: 'Cupons de Match',
            },
          },
          {
            advantagesCheckin: {
              value: true,
              label: 'Check-in de Vantagens',
            },
          },
          {
            meetingAgenda: {
              value: true,
              label: 'Agenda de Encontros',
            },
          },
          {
            likedMe: {
              value: true,
              label: 'Me curtiu',
            },
          },
          {
            myRank: {
              value: true,
              label: 'Minhas notas',
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

  const handlePressOnSubscribeButton = async () => {
    const plan = prices.filter(price => price.id === selectedPlan);
    const months = plan[0].months;

    setIsLoading(true);

    try {
      const response = await BillingService.createVIPBilling({months});

      Linking.openURL(response.url);

      handleSkipPlanScreen();
    } catch (error) {
      console.log(error?.response?.data);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);

      setIsLoading(false);
    }
  };

  const handleSkipPlanScreen = () => {
    dispatch({
      type: 'SET_SKIP_PLAN_SCREEN',
      payload: true,
    });

    navigation.reset({
      index: 0,
      routes: [{name: 'Splash'}],
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
            <SubscribeButton onPress={handlePressOnSubscribeButton}>
              <SubscribeButtonText>Assinar</SubscribeButtonText>
            </SubscribeButton>
            <ContinueButton onPress={handleSkipPlanScreen}>
              <ContinueButtonText>Continuar Como FREE</ContinueButtonText>
            </ContinueButton>
          </PageActionArea>
        </ContentArea>
      </Container>
      {isLoading && (
        <LoadingArea>
          <LoadingIcon size="large" color="#ff3f6d" />
        </LoadingArea>
      )}
    </PageArea>
  );
};

export default Page;
