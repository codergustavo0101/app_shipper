import React, {useState, useEffect} from 'react';
import validator from 'validator';

import {PageArea, HeaderWithBackButton, TextInputLogin} from '../../components';

import {
  Container,
  PageTitle,
  DescriptionArea,
  DescriptionText,
  InputArea,
  RememberedPasswordButton,
  RememberedPasswordButtonText,
  RecoverPasswordButton,
  RecoverPasswordButtonText,
  DontHaveAccountArea,
  DontHaveAccountDescriptionText,
  DontHaveAccountButton,
  DontHaveAccountButtonText,
  SignInButton,
  SignInButtonText,
} from './styled';

const Page = ({navigation}) => {
  const [formDisabled, setFormDisabled] = useState(false);

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (emailErrorMessage !== '') {
      validateEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  useEffect(() => {
    if (isFormValid) {
      navigation.replace('EsqueceuSenha2', {email});
    }

    setIsFormValid(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  const validateEmail = () => {
    const validatingEmail = validator.isEmail(email);

    setIsValidEmail(validatingEmail);

    if (!validatingEmail) {
      setEmailErrorMessage('Email inválido');
    }

    return validatingEmail;
  };

  const validateForm = () => {
    setIsFormValid(false);

    const validatingEmail = validateEmail();

    setIsFormValid(validatingEmail);
  };

  const handleClickOnRecoverPasswordButton = () => {
    validateForm();
  };

  const handleClickOnDontHaveAccountButton = () => {
    navigation.replace('CadastroLogin', {
      screen: 'Cadastro',
    });
  };

  const handleClickOnSignInButton = () => {
    navigation.goBack();
  };

  return (
    <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
      <HeaderWithBackButton navigation={navigation} />
      <Container>
        <PageTitle>Esqueceu a senha?</PageTitle>
        <DescriptionArea>
          <DescriptionText>
            Não se preocupe! Digite seu e-mail para{'\n'} receber instruções de
            recuperação de{'\n'} senha
          </DescriptionText>
        </DescriptionArea>
        <InputArea>
          <TextInputLogin
            label="E-mail"
            value={email}
            setValue={setEmail}
            isValid={isValidEmail}
            errorMessage={emailErrorMessage}
            maxLength={50}
            disabled={formDisabled}
            keyboardType="email-address"
            backgroundColor="#F9F9FA"
            textColor="#000"
            placeholderColor="#000000A6"
            bordered={true}
            errorMessageColor="#FF0000"
          />
          <RememberedPasswordButton onPress={handleClickOnSignInButton}>
            <RememberedPasswordButtonText>
              Lembrou da senha?
            </RememberedPasswordButtonText>
          </RememberedPasswordButton>
        </InputArea>
        <RecoverPasswordButton onPress={handleClickOnRecoverPasswordButton}>
          <RecoverPasswordButtonText>Recuperar Senha</RecoverPasswordButtonText>
        </RecoverPasswordButton>
        <DontHaveAccountArea>
          <DontHaveAccountDescriptionText>
            Não tem uma conta?
          </DontHaveAccountDescriptionText>
          <DontHaveAccountButton onPress={handleClickOnDontHaveAccountButton}>
            <DontHaveAccountButtonText>Cadastre-se</DontHaveAccountButtonText>
          </DontHaveAccountButton>
        </DontHaveAccountArea>
        <SignInButton onPress={handleClickOnSignInButton}>
          <SignInButtonText>Entrar</SignInButtonText>
        </SignInButton>
      </Container>
    </PageArea>
  );
};

export default Page;
