import React from 'react';

import {TabBarArea, TabBarContent, TabBarItem} from './styled';

import HeartIcon from '../../assets/icons/heart.svg';
import CommentsIcon from '../../assets/icons/comments.svg';
import TicketIcon from '../../assets/icons/ticket.svg';
import DollarIcon from '../../assets/icons/dollar.svg';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <TabBarArea>
      <TabBarContent>
        <TabBarItem onPress={() => navigation.navigate('Inicio')}>
          <HeartIcon
            width={28}
            height={28}
            color={state.index === 0 ? '#ff5a5f' : '#6D6661'}
            border="#ffffff"
          />
        </TabBarItem>
        <TabBarItem onPress={() => navigation.navigate('ConversasDates')}>
          <CommentsIcon
            width={28}
            height={28}
            color={state.index === 1 ? '#ff5a5f' : '#6D6661'}
          />
        </TabBarItem>
        <TabBarItem onPress={() => navigation.navigate('CuponsLocais')}>
          <TicketIcon
            width={28}
            height={28}
            color={state.index === 2 ? '#ff5a5f' : '#6D6661'}
          />
        </TabBarItem>
        <TabBarItem onPress={() => navigation.navigate('Indicacoes')}>
          <DollarIcon
            width={28}
            height={28}
            color={state.index === 3 ? '#ff5a5f' : '#6D6661'}
          />
        </TabBarItem>
      </TabBarContent>
    </TabBarArea>
  );
};

export default TabBar;
