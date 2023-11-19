import React, {useEffect} from 'react';
import {StatusBar, Alert} from 'react-native';
import LottieView from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';
import jwt_decode from 'jwt-decode';
import * as Location from 'expo-location';

import {
  Container,
  LogoAnimationArea,
  BackgroundSplashArea,
  BackgroundSplash,
} from './styled';

import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import EstablishmentService from '../../services/EstablishmentService';

import Background from '../../assets/images/background-splash.png';
import PreferencesService from '../../services/PreferencesService';
import OtherInformationService from '../../services/OtherInformationService';

const Page = ({navigation}) => {
  const dispatch = useDispatch();

  const planState = useSelector(state => state.plan);

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();

      AuthService.refreshToken()
        .then(response => {
          dispatch({
            type: 'SET_TOKEN',
            payload: response.access_token,
          });

          const decoded = jwt_decode(response.access_token);

          if (decoded.type === 'user') {
            getUserProfile();
          } else if (decoded.type === 'establishment') {
            getEstablishmentProfile();
          }
        })
        .catch(error => {
          console.log(error);

          dispatch({
            type: 'LOGOUT',
          });

          navigation.replace('CadastroLogin');
        });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserProfile = async () => {
    const promises = [
      UserService.getProfile(),
      PreferencesService.getPreferences(),
      OtherInformationService.getOtherInformation(),
    ];

    try {
      const [response1, response2, response3] = await Promise.all(promises);

      dispatch({
        type: 'SET_USER',
        payload: response1,
      });

      dispatch({
        type: 'SET_PREFERENCES',
        payload: response2,
      });

      response3.forEach(item => {
        dispatch({
          type: 'SET_OTHER_INFORMATION_FIELD',
          payload: {
            field: item.question,
            value: item.answer,
          },
        });
      });

      if (response1.photos.length === 0) {
        navigation.replace('CadastroLogin', {
          screen: 'Cadastro3',
        });
      } else if (
        response1?.usersPlans?.plan === 'FREE' &&
        (response1?.usersPlans?.status === null ||
          response1?.usersPlans?.status === 'OVERDUE') &&
        planState.skipPlanScreen === false
      ) {
        navigation.replace('CadastroLogin', {
          screen: 'Cadastro5',
        });
      } else {
        navigation.replace('Tabs');
      }
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }
  };

  const getEstablishmentProfile = async () => {
    try {
      const response = await EstablishmentService.getProfile();

      dispatch({
        type: 'SET_ESTABLISHMENT',
        payload: response,
      });

      if (
        response?.usersPlans?.plan === 'FREE' &&
        (response?.usersPlans?.status === null ||
          response?.usersPlans?.status === 'OVERDUE') &&
        planState.skipPlanScreen === false
      ) {
        navigation.replace('CadastroEstabelecimento', {
          screen: 'Cadastro5',
        });
      } else {
        navigation.replace('Estabelecimento');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoAnimationArea>
        <LottieView
          source={require('../../assets/animations/splash.json')}
          autoPlay
          loop
          speed={0.5}
        />
      </LogoAnimationArea>
      <BackgroundSplashArea>
        <BackgroundSplash source={Background} />
      </BackgroundSplashArea>
    </Container>
  );
};

export default Page;
