import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

import Splash from '../screens/Splash';
import Match from '../screens/Match';
import Chat from '../screens/Chat';
import Cadastro6 from '../screens/Cadastro6';

import CadastroLogin from './Routes/Cadastro-Login';
import Tabs from './Routes/Tabs';
import CadastroEstabelecimento from './Routes/Cadastro-Estabelecimento';
import Estabelecimento from './Routes/Estabelecimento';
import EsqueceuSenha from './Routes/Esqueceu-Senha';

const Stack = createNativeStackNavigator();

const prefixes = [Linking.createURL('/'), 'https://app.shippervip.com.br'];
const config = {
  screens: {
    EsqueceuSenha: {
      screens: {
        EsqueceuSenha3: 'auth/recover-password/:token',
      },
    },
  },
};

const Navigator = ({onLayout}) => {
  const linking = {
    prefixes,
    config,
  };

  return (
    <NavigationContainer onReady={onLayout} linking={linking}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            animation: 'none',
          }}
        />
        <Stack.Screen name="CadastroLogin" component={CadastroLogin} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="CadastroEstabelecimento"
          component={CadastroEstabelecimento}
          options={{
            animation: 'slide_from_right',
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="Estabelecimento" component={Estabelecimento} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Stack.Screen
          name="Match"
          component={Match}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            animation: 'none',
          }}
        />
        <Stack.Screen
          name="Cadastro6"
          component={Cadastro6}
          options={{
            animation: 'slide_from_right',
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
