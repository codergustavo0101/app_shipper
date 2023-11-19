import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {
  PageArea,
  HeaderWithBackButton,
  TextInputDefault,
} from '../../components';

import {
  Container,
  PageTitle,
  DescriptionArea,
  DescriptionText,
  FormArea,
  CreatePasswordButton,
  CreatePasswordButtonText,
} from './styled';

import AuthService from '../../services/AuthService';

const Page = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isValidPasswordConfirmation, setIsValidPasswordConfirmation] =
    useState(false);
  const [
    passwordConfirmationErrorMessage,
    setPasswordConfirmationErrorMessage,
  ] = useState('');

  const [formDisabled, setFormDisabled] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (passwordErrorMessage !== '') {
      validatePassword();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  useEffect(() => {
    if (passwordConfirmationErrorMessage !== '') {
      validatePasswordConfirmation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordConfirmation]);

  useEffect(() => {
    if (isFormValid) {
      setIsLoading(true);

      const token = route?.params?.token || '';

      AuthService.resetPassword(token, password)
        .then(() => {
          Alert.alert(
            'Sucesso',
            'Sua senha foi alterada com sucesso. Faça o login com a nova senha.',
            [
              {
                text: 'OK',
                onPress: () => {
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Splash'}],
                  });
                },
              },
            ],
          );
        })
        .catch(error => {
          console.log(error);

          let errorMessage = error?.response?.data?.message || error.message;

          if (typeof errorMessage === 'object') {
            errorMessage = Object.values(errorMessage).join('\n');
          }

          Alert.alert('Erro', errorMessage);

          setIsLoading(false);
          setFormDisabled(false);
          setIsFormValid(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  const validatePassword = () => {
    const validatingPassword = password.length === 8;

    setIsValidPassword(validatingPassword);

    if (!validatingPassword) {
      setPasswordErrorMessage('Senha precisa ter 8 caracteres');
    }

    return validatingPassword;
  };

  const validatePasswordConfirmation = () => {
    const validatingPasswordConfirmation = password === passwordConfirmation;

    setIsValidPasswordConfirmation(validatingPasswordConfirmation);

    if (!validatingPasswordConfirmation) {
      setPasswordConfirmationErrorMessage('As senhas não são iguais');
    }

    return validatingPasswordConfirmation;
  };

  const validateForm = () => {
    const validatingPassword = validatePassword();
    const validatingPasswordConfirmation = validatePasswordConfirmation();

    setIsFormValid(validatingPassword && validatingPasswordConfirmation);
  };

  const handleRecoverPassword = async () => {
    validateForm();
  };

  return (
    <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
      <HeaderWithBackButton navigation={navigation} />
      <Container>
        <PageTitle>Crie uma nova senha</PageTitle>
        <DescriptionArea>
          <DescriptionText>
            Preencha os campos abaixo com a nova senha que deseja cadastrar
          </DescriptionText>
        </DescriptionArea>

        <FormArea>
          <TextInputDefault
            label="Nova senha*"
            description="(8 dígitos)"
            placeholder="Insira a nova senha"
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
            isValid={isValidPassword}
            validate={validatePassword}
            errorMessage={passwordErrorMessage}
            maxLength={8}
            disabled={formDisabled}
          />
          <TextInputDefault
            label="Confirmação de nova senha*"
            description="(8 dígitos)"
            placeholder="Insira a confirmação da sua senha"
            secureTextEntry={true}
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
            isValid={isValidPasswordConfirmation}
            validate={validatePasswordConfirmation}
            errorMessage={passwordConfirmationErrorMessage}
            maxLength={8}
            disabled={formDisabled}
          />
        </FormArea>

        <CreatePasswordButton
          onPress={handleRecoverPassword}
          disabled={isLoading}>
          <CreatePasswordButtonText>Criar senha</CreatePasswordButtonText>
        </CreatePasswordButton>
      </Container>
    </PageArea>
  );
};

export default Page;
