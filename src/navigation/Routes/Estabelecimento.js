import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InicioEstabelecimento from '../../screens/InicioEstabelecimento';
import MatchEstabelecimento from '../../screens/MatchEstabelecimento';
import CadastroEstabelecimento6 from '../../screens/CadastroEstabelecimento6';
import QRCode from '../../screens/QRCode';
import QRCodeData from '../../screens/QRCodeData';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="InicioEstabelecimento"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="InicioEstabelecimento"
        component={InicioEstabelecimento}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="MatchEstabelecimento"
        component={MatchEstabelecimento}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="CadastroEstabelecimento6"
        component={CadastroEstabelecimento6}
        options={{
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="QRCode"
        component={QRCode}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="QRCodeData"
        component={QRCodeData}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
