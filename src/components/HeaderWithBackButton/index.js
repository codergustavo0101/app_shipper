import React from 'react';

import {HeaderArea, BackButton, LogoArea, Logo} from './styled';

import ArrowCircleLeftIcon from '../../assets/icons/arrow-circle-left.svg';
import LogoImage from '../../assets/images/logo-pink.png';

const Component = ({navigation}) => {
  return (
    <HeaderArea>
      {navigation.canGoBack() && (
        <BackButton onPress={() => navigation?.goBack()}>
          <ArrowCircleLeftIcon width={28} height={28} color="#FF3F6D" />
        </BackButton>
      )}
      <LogoArea>
        <Logo source={LogoImage} />
      </LogoArea>
    </HeaderArea>
  );
};

export default Component;
