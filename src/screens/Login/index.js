import React, {useState, useEffect} from 'react';
import {Alert, StatusBar} from 'react-native';
import validator from 'validator';
import {useDispatch} from 'react-redux';

import {SecureTextInputLogin, TextInputLogin} from '../../components';

import {
  Container,
  Logo,
  PageTitle,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  SignInButton,
  SignInButtonText,
  SignUpButton,
  SignUpButtonText,
  TermsArea,
  TermsButtonText,
  LoadingArea,
  LoadingIcon,
} from './styled';

import LogoImage from '../../assets/images/logo-white.png';

import AuthService from '../../services/AuthService';

const Page = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [formDisabled, setFormDisabled] = useState(false);

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (emailErrorMessage !== '') {
      validateEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  useEffect(() => {
    if (passwordErrorMessage !== '') {
      validatePassword();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  useEffect(() => {
    if (isFormValid) {
      setIsLoading(true);

      AuthService.login(email, password)
        .then(response => {
          const token = response.access_token;

          dispatch({
            type: 'SET_TOKEN',
            payload: token,
          });

          navigation.replace('Splash');
        })
        .catch(error => {
          console.log(error);

          setIsLoading(false);
          Alert.alert('Erro', 'E-mail e/ou senha inválidos');
        });
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

  const validatePassword = () => {
    const validatingPassword = validator.isEmpty(password);

    setIsValidPassword(!validatingPassword);

    if (validatingPassword) {
      setPasswordErrorMessage('Senha obrigatória');
    }

    return !validatingPassword;
  };

  const validateForm = () => {
    setIsFormValid(false);

    const validatingEmail = validateEmail();
    const validatingPassword = validatePassword();

    setIsFormValid(validatingEmail && validatingPassword);
  };

  const handleClickOnSignInButton = () => {
    validateForm();
  };

  const handleClickOnSignUpButton = () => {
    navigation.navigate('Cadastro');
  };

  const handleClickOnForgotPasswordButton = () => {
    navigation.navigate('EsqueceuSenha');
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Logo source={LogoImage} />
      <PageTitle>Dados de acesso</PageTitle>
      <TextInputLogin
        label="E-mail"
        value={email}
        setValue={setEmail}
        isValid={isValidEmail}
        errorMessage={emailErrorMessage}
        maxLength={50}
        disabled={formDisabled}
        keyboardType="email-address"
      />
      <SecureTextInputLogin
        label="Senha"
        value={password}
        setValue={setPassword}
        isValid={isValidPassword}
        errorMessage={passwordErrorMessage}
        disabled={formDisabled}
      />
      <ForgotPasswordButton
        onPress={handleClickOnForgotPasswordButton}
        disabled={formDisabled}>
        <ForgotPasswordButtonText>Esqueceu a senha?</ForgotPasswordButtonText>
      </ForgotPasswordButton>
      <SignInButton onPress={handleClickOnSignInButton} disabled={formDisabled}>
        <SignInButtonText>Entrar</SignInButtonText>
      </SignInButton>
      <SignUpButton onPress={handleClickOnSignUpButton} disabled={formDisabled}>
        <SignUpButtonText>Criar conta</SignUpButtonText>
      </SignUpButton>
      <TermsArea>
        Ao tocar em entrar, você concorda com os{'\n'}
        nossos <TermsButtonText>termos</TermsButtonText>. Saiba como processamos
        seus dados em nossa{' '}
        <TermsButtonText>Política de privacidade</TermsButtonText> e{'\n'}
        <TermsButtonText>Política de cookies</TermsButtonText>.
      </TermsArea>
      {isLoading && (
        <LoadingArea>
          <LoadingIcon size="large" color="#ff3f6d" />
        </LoadingArea>
      )}
    </Container>
  );
};

export default Page;
