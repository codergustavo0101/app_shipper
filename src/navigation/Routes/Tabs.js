import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Inicio from '../../screens/Inicio';
import ConversasDates from '../../screens/ConversasDates';
import CuponsLocais from '../../screens/CuponsLocais';
import Indicacoes from '../../screens/Indicacoes';

import {TabBar} from '../../components';

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="ConversasDates" component={ConversasDates} />
      <Tab.Screen name="CuponsLocais" component={CuponsLocais} />
      <Tab.Screen name="Indicacoes" component={Indicacoes} />
    </Tab.Navigator>
  );
};

export default Routes;
