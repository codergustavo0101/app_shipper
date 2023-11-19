import React, {useState} from 'react';

import {PageArea, TabBarHeader, TabScreenTitle} from '../../components';
import {Container, TopTitleArea, BackButtonArea, BackButton} from './styled';

import Chats from './chats';
import NewLikes from './newLikes';

import ArrowCircleLeftIcon from '../../assets/icons/arrow-circle-left.svg';

const Page = ({navigation}) => {
  const [showNewLikes, setShowNewLikes] = useState(false);

  return (
    <PageArea
      isTabBar={true}
      statusBarTranslucent={true}
      barStyle="light-content">
      <Container>
        <TabBarHeader navigation={navigation} />
        <TopTitleArea>
          {showNewLikes && (
            <BackButtonArea>
              <BackButton onPress={() => setShowNewLikes(false)}>
                <ArrowCircleLeftIcon width={28} height={28} color="#FF3F6D" />
              </BackButton>
            </BackButtonArea>
          )}
          <TabScreenTitle
            title={showNewLikes ? 'Novos matchs' : 'Conversas e dates'}
          />
        </TopTitleArea>
        {showNewLikes ? (
          <NewLikes />
        ) : (
          <Chats setShowNewLikes={setShowNewLikes} navigation={navigation} />
        )}
      </Container>
    </PageArea>
  );
};

export default Page;
