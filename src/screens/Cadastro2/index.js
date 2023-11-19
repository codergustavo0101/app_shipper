import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import validator from 'validator';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import * as Location from 'expo-location';
import * as cpfCnpjValidator from 'cpf-cnpj-validator';

import {
  PageArea,
  HeaderWithBackButton,
  TextInputDefault,
  DropdownPickerDefault,
} from '../../components';

import {
  Container,
  ContentArea,
  PageTitle,
  PageActionArea,
  ContinueButton,
  ContinueButtonText,
  InputsArea,
  InputAreaInputs,
  InputBirthDate,
  DropdownAgeArea,
  TextInputArea,
  LabelInput,
  ErrorMessage,
  DropdownGenderArea,
  LoadingArea,
  LoadingIcon,
} from './styled';

import AuthService from '../../services/AuthService';

import {years} from '../../utils/utils';

const Page = ({navigation}) => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);

  const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);
  const [ageDropdownItems, setAgeDropdownItems] = useState(years());
  const [ageDropdownValue, setAgeDropdownValue] = useState(null);

  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [genderDropdownItems, setGenderDropdownItems] = useState([
    {label: 'Masculino', value: 'M'},
    {label: 'Feminino', value: 'F'},
  ]);
  const [genderDropdownValue, setGenderDropdownValue] = useState(null);

  const [formDisabled, setFormDisabled] = useState(false);

  const [referralCode, setReferralCode] = useState('');
  const [isValidReferralCode, setIsValidReferralCode] = useState(false);
  const [referralCodeErrorMessage, setReferralCodeErrorMessage] = useState('');

  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const [cpf, setCpf] = useState('');
  const [isValidCpf, setIsValidCpf] = useState(false);
  const [cpfErrorMessage, setCpfErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [isValidEmailConfirmation, setIsValidEmailConfirmation] =
    useState(false);
  const [emailConfirmationErrorMessage, setEmailConfirmationErrorMessage] =
    useState('');

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

  const [birthDateDay, setBirthDateDay] = useState('');
  const [birthDateMonth, setBirthDateMonth] = useState('');
  const [isValidBirthDate, setIsValidBirthDate] = useState(false);
  const [birthDateErrorMessage, setBirthDateErrorMessage] = useState('');

  const [isValidGender, setIsValidGender] = useState(false);
  const [genderErrorMessage, setGenderErrorMessage] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (referralCodeErrorMessage !== '') {
      validateReferralCode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referralCode]);

  useEffect(() => {
    if (nameErrorMessage !== '') {
      validateName();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    if (cpfErrorMessage !== '') {
      validateCpf();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cpf]);

  useEffect(() => {
    if (emailErrorMessage !== '') {
      validateEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, emailConfirmation]);

  useEffect(() => {
    if (emailConfirmationErrorMessage !== '') {
      validateEmailConfirmation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, emailConfirmation]);

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
    if (birthDateErrorMessage !== '') {
      validateBirthDate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [birthDateDay, birthDateMonth, ageDropdownValue]);

  useEffect(() => {
    if (isFormValid) {
      setIsLoading(true);

      const data = {
        name,
        cpf,
        email,
        password,
        birthDate: moment(
          `${birthDateDay}/${birthDateMonth}/${ageDropdownValue}`,
          'DD/MM/YYYY',
        ).format('YYYY-MM-DD'),
        gender: genderDropdownValue,
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      };

      if (referralCode !== '') {
        data.referralCode = referralCode;
      }

      AuthService.userRegister(data)
        .then(response => {
          dispatch({
            type: 'SET_TOKEN',
            payload: response.access_token,
          });

          navigation.reset({
            index: 0,
            routes: [{name: 'Splash'}],
          });
        })
        .catch(error => {
          console.log(error?.response?.data);

          let errorMessage = error?.response?.data?.message || error.message;

          if (typeof errorMessage === 'object') {
            errorMessage = Object.values(errorMessage).join('\n');
          }

          Alert.alert('Erro', errorMessage);

          setIsLoading(false);
        });
    }

    setIsFormValid(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  useEffect(() => {
    if (genderErrorMessage !== '') {
      validateGender();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genderDropdownValue]);

  useEffect(() => {
    (async () => {
      const {status} = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Erro', 'Não foi possível obter a localização do usuário');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});

      setLocation(currentLocation);
    })();
  }, []);

  const validateReferralCode = () => {
    const validatingReferralCode =
      referralCode.length === 11 || referralCode === '';

    setIsValidReferralCode(validatingReferralCode);

    if (!validatingReferralCode) {
      setReferralCodeErrorMessage('Código de indicação deve ter 11 caracteres');
    }

    return validatingReferralCode;
  };

  const validateName = () => {
    const validatingName = name.length > 1;

    setIsValidName(validatingName);

    if (!validatingName) {
      setNameErrorMessage('Nome precisa ter pelo menos 2 caracteres');
    }

    return validatingName;
  };

  const validateCpf = () => {
    const validatingCpf = cpfCnpjValidator.cpf.isValid(cpf);

    setIsValidCpf(validatingCpf);

    if (!validatingCpf) {
      setCpfErrorMessage('CPF precisa ser válido');
    }

    return validatingCpf;
  };

  const validateEmail = () => {
    const validatingEmail = validator.isEmail(email);

    setIsValidEmail(validatingEmail);

    if (!validatingEmail) {
      setEmailErrorMessage('Email inválido');
    }

    return validatingEmail;
  };

  const validateEmailConfirmation = () => {
    const validatingEmailConfirmation = email === emailConfirmation;

    setIsValidEmailConfirmation(validatingEmailConfirmation);

    if (!validatingEmailConfirmation) {
      setEmailConfirmationErrorMessage('Os emails não são iguais');
    }

    return validatingEmailConfirmation;
  };

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

  const validateBirthDate = () => {
    if (ageDropdownValue === null) {
      setIsValidBirthDate(false);
      setBirthDateErrorMessage('Data de nascimento inválida');
      return false;
    }

    const validatingBirthDate = moment(
      `${birthDateDay}/${birthDateMonth}/${ageDropdownValue}`,
      'DD/MM/YYYY',
    ).isValid();

    setIsValidBirthDate(validatingBirthDate);

    if (!validatingBirthDate) {
      setBirthDateErrorMessage('Data de nascimento inválida');
    }

    return validatingBirthDate;
  };

  const validateGender = () => {
    const validatingGender = genderDropdownValue !== null;

    setIsValidGender(validatingGender);

    if (!validatingGender) {
      setGenderErrorMessage('Selecione um gênero');
    }

    return validatingGender;
  };

  const validateForm = () => {
    const validatingReferralCode = validateReferralCode();
    const validatingName = validateName();
    const validatingCpf = validateCpf();
    const validatingEmail = validateEmail();
    const validatingEmailConfirmation = validateEmailConfirmation();
    const validatingPassword = validatePassword();
    const validatingPasswordConfirmation = validatePasswordConfirmation();
    const validatingBirthDate = validateBirthDate();
    const validatingGender = validateGender();

    setIsFormValid(
      validatingReferralCode &&
        validatingName &&
        validatingCpf &&
        validatingEmail &&
        validatingEmailConfirmation &&
        validatingPassword &&
        validatingPasswordConfirmation &&
        validatingBirthDate &&
        validatingGender,
    );
  };

  const handleContinueButton = () => {
    validateForm();
  };

  return (
    <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
      <Container>
        <HeaderWithBackButton navigation={navigation} />
        <ContentArea>
          <PageTitle>Informe seus dados</PageTitle>
          <TextInputDefault
            label="Código de indicação"
            placeholder="Código de indicação"
            value={referralCode}
            setValue={setReferralCode}
            isValid={isValidReferralCode}
            validate={validateReferralCode}
            errorMessage={referralCodeErrorMessage}
            disabled={formDisabled}
          />
          <TextInputDefault
            label="Nome*"
            description="(SÓ PODERÁ SER ALTERADO 1 VEZ)"
            placeholder="Como gostaria de ser chamado (a)"
            value={name}
            setValue={setName}
            isValid={isValidName}
            validate={validateName}
            errorMessage={nameErrorMessage}
            disabled={formDisabled}
          />
          <TextInputDefault
            label="CPF*"
            placeholder="Insira o seu CPF"
            value={cpf}
            setValue={setCpf}
            isValid={isValidCpf}
            validate={validateCpf}
            errorMessage={cpfErrorMessage}
            disabled={formDisabled}
            maxLength={11}
            keyboardType="numeric"
          />
          <TextInputDefault
            label="E-mail*"
            placeholder="Digite o seu e-mail de acesso"
            value={email}
            setValue={setEmail}
            isValid={isValidEmail}
            validate={validateEmail}
            errorMessage={emailErrorMessage}
            disabled={formDisabled}
            keyboardType="email-address"
          />
          <TextInputDefault
            label="Confirme seu e-mail*"
            placeholder="Confirme o seu e-mail de acesso"
            value={emailConfirmation}
            setValue={setEmailConfirmation}
            isValid={isValidEmailConfirmation}
            validate={validateEmailConfirmation}
            errorMessage={emailConfirmationErrorMessage}
            disabled={formDisabled}
            keyboardType="email-address"
          />
          <TextInputDefault
            label="Crie uma senha*"
            description="(8 dígitos)"
            placeholder="Crie uma senha de acesso"
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
            label="Confirme sua senha*"
            description="(8 dígitos)"
            placeholder="Confirme sua senha de acesso"
            secureTextEntry={true}
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
            isValid={isValidPasswordConfirmation}
            validate={validatePasswordConfirmation}
            errorMessage={passwordConfirmationErrorMessage}
            maxLength={8}
            disabled={formDisabled}
          />
          <InputsArea isDropdownOpen={isAgeDropdownOpen}>
            <TextInputArea>
              <LabelInput>Data de nascimento*</LabelInput>
            </TextInputArea>
            <InputAreaInputs>
              <InputBirthDate
                placeholder="Dia"
                autoCapitalize="none"
                keyboardType="numeric"
                maxLength={2}
                placeholderTextColor="#B1B2B2"
                value={birthDateDay}
                onChangeText={setBirthDateDay}
                onBlur={validateBirthDate}
                disabled={formDisabled}
              />
              <InputBirthDate
                placeholder="Mês"
                autoCapitalize="none"
                keyboardType="numeric"
                maxLength={2}
                placeholderTextColor="#B1B2B2"
                value={birthDateMonth}
                onChangeText={setBirthDateMonth}
                onBlur={validateBirthDate}
                disabled={formDisabled}
              />
              <DropdownAgeArea>
                <DropdownPickerDefault
                  placeholder="Ano"
                  open={isAgeDropdownOpen}
                  value={ageDropdownValue}
                  items={ageDropdownItems}
                  setOpen={setIsAgeDropdownOpen}
                  setValue={setAgeDropdownValue}
                  setItems={setAgeDropdownItems}
                  zIndex={3000}
                  zIndexInverse={1000}
                />
              </DropdownAgeArea>
            </InputAreaInputs>
            <ErrorMessage errorMessageColor="#ff3f6d" allowFontScaling={false}>
              {isValidBirthDate ? '' : birthDateErrorMessage}
            </ErrorMessage>
          </InputsArea>
          <InputsArea isDropdownOpen={isGenderDropdownOpen}>
            <TextInputArea>
              <LabelInput>Gênero*</LabelInput>
            </TextInputArea>
            <DropdownGenderArea>
              <DropdownPickerDefault
                placeholder="Selecione seu Gênero"
                open={isGenderDropdownOpen}
                value={genderDropdownValue}
                items={genderDropdownItems}
                setOpen={setIsGenderDropdownOpen}
                setValue={setGenderDropdownValue}
                setItems={setGenderDropdownItems}
                zIndex={2000}
                zIndexInverse={2000}
              />
            </DropdownGenderArea>
          </InputsArea>
          <ErrorMessage errorMessageColor="#ff3f6d" allowFontScaling={false}>
            {isValidGender ? '' : genderErrorMessage}
          </ErrorMessage>
          <PageActionArea>
            <ContinueButton onPress={handleContinueButton} disabled={isLoading}>
              <ContinueButtonText>Continuar</ContinueButtonText>
            </ContinueButton>
          </PageActionArea>
        </ContentArea>
      </Container>
      {isLoading && (
        <LoadingArea>
          <LoadingIcon size="large" color="#ff3f6d" />
        </LoadingArea>
      )}
    </PageArea>
  );
};

export default Page;
