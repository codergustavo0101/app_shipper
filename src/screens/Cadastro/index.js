import React from 'react';

import {PageArea, HeaderWithBackButton} from '../../components';
import Button from './button';

import {Container, PageTitle, ButtonsArea} from './styled';

import SearchImage from '../../assets/images/search-register.png';
import CoupomImage from '../../assets/images/coupom-register.png';

const Page = ({navigation}) => {
  const handlePressOnSearchButton = () => {
    navigation.navigate('Cadastro1');
  };

  const handlePressOnCouponButton = () => {
    navigation.navigate('CadastroEstabelecimento');
  };

  return (
    <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
      <HeaderWithBackButton navigation={navigation} />
      <Container>
        <PageTitle>Selecione seu perfil de cadastro</PageTitle>
        <ButtonsArea>
          <Button
            onPress={handlePressOnSearchButton}
            image={SearchImage}
            text="Procuro o par perfeito!"
          />
          <Button
            onPress={handlePressOnCouponButton}
            image={CoupomImage}
            text="Vou dar uma ajudinha!"
          />
        </ButtonsArea>
      </Container>
    </PageArea>
  );
};

export default Page;
