import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EsqueceuSenha1 from '../../screens/EsqueceuSenha1';
import EsqueceuSenha2 from '../../screens/EsqueceuSenha2';
import EsqueceuSenha3 from '../../screens/EsqueceuSenha3';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="EsqueceuSenha1"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="EsqueceuSenha1"
        component={EsqueceuSenha1}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="EsqueceuSenha2"
        component={EsqueceuSenha2}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="EsqueceuSenha3"
        component={EsqueceuSenha3}
        options={{
          animation: 'none',
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
