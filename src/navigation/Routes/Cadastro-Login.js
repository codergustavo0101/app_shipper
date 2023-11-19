import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/Login';
import Cadastro from '../../screens/Cadastro';
import Cadastro1 from '../../screens/Cadastro1';
import Cadastro2 from '../../screens/Cadastro2';
import Cadastro3 from '../../screens/Cadastro3';
import Cadastro5 from '../../screens/Cadastro5';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
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
        component={Cadastro2}
        options={{
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Cadastro3"
        component={Cadastro3}
        options={{
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Cadastro5"
        component={Cadastro5}
        options={{
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
