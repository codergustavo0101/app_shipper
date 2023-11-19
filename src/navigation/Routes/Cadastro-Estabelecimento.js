import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cadastro1 from '../../screens/Cadastro1';
import CheckoutEstabelecimento from '../../screens/CheckoutEstabelecimento';
import CadastroEstabelecimento2 from '../../screens/CadastroEstabelecimento2';
import CadastroEstabelecimento5 from '../../screens/CadastroEstabelecimento5';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cadastro1"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Cadastro1"
        component={Cadastro1}
        options={{
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Cadastro2"
        component={CadastroEstabelecimento2}
        options={{
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Cadastro5"
        component={CadastroEstabelecimento5}
        options={{
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="CheckoutEstabelecimento"
        component={CheckoutEstabelecimento}
        options={{
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
