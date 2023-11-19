import React, {useState, useEffect} from 'react';
import {Alert, KeyboardAvoidingView, Platform} from 'react-native';
import validator from 'validator';
import * as ImagePicker from 'expo-image-picker';
import {useDispatch} from 'react-redux';
import * as cpfCnpjValidator from 'cpf-cnpj-validator';

import {
  PageArea,
  HeaderWithBackButton,
  TextInputDefault,
} from '../../components';

import {
  Container,
  ContentArea,
  LogoUploadArea,
  PageTitle,
  PageActionArea,
  ContinueButton,
  ContinueButtonText,
  LogoUploadActionArea,
  Logo,
  LogoUploadBackground,
  UploadLogoButton,
  MenuUploadArea,
  MenuUploadButton,
  MenuUploadButtonText,
  MenuPreviewImage,
  ErrorMessage,
  LoadingArea,
  LoadingIcon,
} from './styled';

import AuthService from '../../services/AuthService';

import AvatarAreaBackground from '../../assets/images/avatar-area-background.png';
import CameraIcon from '../../assets/icons/camera.svg';
import UploadIcon from '../../assets/icons/upload.svg';
import PhotosService from '../../services/PhotosService';

const Page = ({navigation}) => {
  const dispatch = useDispatch();

  const [logo, setLogo] = useState(null);
  const [menu, setMenu] = useState(null);
  const [menuPreviewHeight, setMenuPreviewHeight] = useState(0);
  const [menuLabel, setMenuLabel] = useState('Faça upload do seu\ncardapio');

  const pickImage = async type => {
    const imageOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.2,
      base64: true,
    };

    if (type === 'logo') {
      imageOptions.aspect = [1, 1];
      imageOptions.allowsEditing = true;
    }

    let result = await ImagePicker.launchImageLibraryAsync(imageOptions);

    if (!result.canceled) {
      switch (type) {
        case 'logo':
          setLogo(result?.assets[0]?.base64 || '');
          break;
        case 'menu':
          setMenu(result?.assets[0]?.base64 || '');
          setMenuLabel('');
          setMenuPreviewHeight(result?.assets[0]?.height || 0);
          break;
        default:
          break;
      }
    }
  };

  const [disableForm, setDisableForm] = useState(false);

  const [isLogoValid, setIsLogoValid] = useState(false);
  const [logoErrorMessage, setLogoErrorMessage] = useState('');

  const [isMenuValid, setIsMenuValid] = useState(false);
  const [menuErrorMessage, setMenuErrorMessage] = useState('');

  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const [cnpj, setCnpj] = useState('');
  const [isValidCnpj, setIsValidCnpj] = useState(false);
  const [cnpjErrorMessage, setCnpjErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [isEmailConfirmationValid, setIsEmailConfirmationValid] =
    useState(false);
  const [emailConfirmationErrorMessage, setEmailConfirmationErrorMessage] =
    useState('');

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isPasswordConfirmationValid, setIsPasswordConfirmationValid] =
    useState(false);
  const [
    passwordConfirmationErrorMessage,
    setPasswordConfirmationErrorMessage,
  ] = useState('');

  const [address, setAddress] = useState('');
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [addressErrorMessage, setAddressErrorMessage] = useState('');

  const [whatsapp, setWhatsapp] = useState('');
  const [isWhatsappValid, setIsWhatsappValid] = useState(false);
  const [whatsappErrorMessage, setWhatsappErrorMessage] = useState('');

  const [instagram, setInstagram] = useState('');
  const [isInstagramValid, setIsInstagramValid] = useState(false);
  const [instagramErrorMessage, setInstagramErrorMessage] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (logoErrorMessage !== '') {
      validateLogo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logo]);

  useEffect(() => {
    if (menuErrorMessage !== '') {
      validateMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  useEffect(() => {
    if (nameErrorMessage !== '') {
      validateName();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    if (cnpjErrorMessage !== '') {
      validateCnpj();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cnpj]);

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
  }, [password, passwordConfirmation]);

  useEffect(() => {
    if (passwordConfirmationErrorMessage !== '') {
      validatePasswordConfirmation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordConfirmation, password]);

  useEffect(() => {
    if (addressErrorMessage !== '') {
      validateAddress();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (whatsappErrorMessage !== '') {
      validateWhatsapp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [whatsapp]);

  useEffect(() => {
    if (instagramErrorMessage !== '') {
      validateInstagram();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instagram]);

  useEffect(() => {
    if (isFormValid) {
      register();
    }

    setIsFormValid(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  const register = async () => {
    setIsLoading(true);

    try {
      const response = await AuthService.establishmentRegister({
        name,
        cnpj,
        email,
        password,
        address,
        phone: whatsapp,
        instagram,
      });

      dispatch({
        type: 'SET_TOKEN',
        payload: response.access_token,
      });

      const promises = [];

      if (logo) {
        promises.push(PhotosService.updateProfilePicture(logo));
      }

      if (menu) {
        promises.push(PhotosService.updateMenu(menu));
      }

      await Promise.all(promises);

      navigation.reset({
        index: 0,
        routes: [{name: 'Splash'}],
      });
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);

      setIsLoading(false);
    }
  };

  const validateLogo = () => {
    const validatingLogo = logo !== null;

    setIsLogoValid(validatingLogo);

    if (!validatingLogo) {
      setLogoErrorMessage('Escolha uma imagem');
    }

    return validatingLogo;
  };

  const validateMenu = () => {
    const validatingMenu = menu !== null;

    setIsMenuValid(validatingMenu);

    if (!validatingMenu) {
      setMenuErrorMessage('Escolha uma imagem');
    }

    return validatingMenu;
  };

  const validateName = () => {
    const validatingName = name.length > 1;

    setIsNameValid(validatingName);

    if (!validatingName) {
      setNameErrorMessage('Nome precisa ter pelo menos 2 caracteres');
    }

    return validatingName;
  };

  const validateCnpj = () => {
    const validatingCnpj = cpfCnpjValidator.cnpj.isValid(cnpj);

    setIsValidCnpj(validatingCnpj);

    if (!validatingCnpj) {
      setCnpjErrorMessage('CNPJ precisa ser válido');
    }

    return validatingCnpj;
  };

  const validateEmail = () => {
    const validatingEmail = validator.isEmail(email);

    setIsEmailValid(validatingEmail);

    if (!validatingEmail) {
      setEmailErrorMessage('Email inválido');
    }

    return validatingEmail;
  };

  const validateEmailConfirmation = () => {
    const validatingEmailConfirmation = emailConfirmation === email;

    setIsEmailConfirmationValid(validatingEmailConfirmation);

    if (!validatingEmailConfirmation) {
      setEmailConfirmationErrorMessage('Os emails não são iguais');
    }

    return validatingEmailConfirmation;
  };

  const validatePassword = () => {
    const validatingPassword = password.length === 8;

    setIsPasswordValid(validatingPassword);

    if (!validatingPassword) {
      setPasswordErrorMessage('Senha precisa ter 8 caracteres');
    }

    return validatingPassword;
  };

  const validatePasswordConfirmation = () => {
    const validatingPasswordConfirmation = passwordConfirmation === password;

    setIsPasswordConfirmationValid(validatingPasswordConfirmation);

    if (!validatingPasswordConfirmation) {
      setPasswordConfirmationErrorMessage('As senhas não são iguais');
    }

    return validatingPasswordConfirmation;
  };

  const validateAddress = () => {
    const validatingAddress = address.length > 5;

    setIsAddressValid(validatingAddress);

    if (!validatingAddress) {
      setAddressErrorMessage('Endereço precisa ter mais de 5 caracteres');
    }

    return validatingAddress;
  };

  const validateWhatsapp = () => {
    const validatingWhatsapp = validator.isMobilePhone(whatsapp, 'pt-BR');

    setIsWhatsappValid(validatingWhatsapp);

    if (!validatingWhatsapp) {
      setWhatsappErrorMessage('Whatsapp inválido');
    }

    return validatingWhatsapp;
  };

  const validateInstagram = () => {
    const validatingInstagram = instagram.match(
      /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/,
    );

    setIsInstagramValid(validatingInstagram);

    if (!validatingInstagram) {
      setInstagramErrorMessage('Instagram inválido');
    }

    return validatingInstagram;
  };

  const validatedForm = () => {
    const validatingLogo = validateLogo();
    const validatingMenu = validateMenu();
    const validatingName = validateName();
    const validatingCnpj = validateCnpj();
    const validatingEmail = validateEmail();
    const validatingEmailConfirmation = validateEmailConfirmation();
    const validatingPassword = validatePassword();
    const validatingPasswordConfirmation = validatePasswordConfirmation();
    const validatingAddress = validateAddress();
    const validatingWhatsapp = validateWhatsapp();
    const validatingInstagram = validateInstagram();

    setIsFormValid(
      validatingLogo &&
        validatingMenu &&
        validatingName &&
        validatingCnpj &&
        validatingEmail &&
        validatingEmailConfirmation &&
        validatingPassword &&
        validatingPasswordConfirmation &&
        validatingAddress &&
        validatingWhatsapp &&
        validatingInstagram,
    );
  };

  const handleContinueButton = () => {
    validatedForm();
  };

  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
        <Container>
          <HeaderWithBackButton navigation={navigation} />
          <ContentArea>
            <LogoUploadArea>
              <PageTitle>Upload logo PNG</PageTitle>
              <LogoUploadActionArea>
                <Logo source={{uri: `data:image/jpeg;base64,${logo}`}} />
                <LogoUploadBackground source={AvatarAreaBackground} />
                <UploadLogoButton
                  onPress={() => pickImage('logo')}
                  disabled={disableForm}>
                  <CameraIcon width={17} height={17} color="#fff" />
                </UploadLogoButton>
              </LogoUploadActionArea>
              {logoErrorMessage !== '' && !isLogoValid && (
                <ErrorMessage>{logoErrorMessage}</ErrorMessage>
              )}
            </LogoUploadArea>
            <PageTitle>Faça upload do seu cardapio</PageTitle>
            <MenuUploadArea>
              <MenuUploadButton
                onPress={() => pickImage('menu')}
                disabled={disableForm}>
                {!menu && (
                  <>
                    <UploadIcon width={47} height={40} color="#ff3f6d" />
                    <MenuUploadButtonText>{menuLabel}</MenuUploadButtonText>
                  </>
                )}
                {menu && (
                  <MenuPreviewImage
                    source={{uri: `data:image/jpeg;base64,${menu}`}}
                  />
                )}
              </MenuUploadButton>
              {menuErrorMessage !== '' && !isMenuValid && (
                <ErrorMessage>{menuErrorMessage}</ErrorMessage>
              )}
            </MenuUploadArea>
            <PageTitle>Informe seus dados</PageTitle>
            <TextInputDefault
              label="Nome comercial*"
              placeholder="Qual nome que todos conhecem..."
              value={name}
              setValue={setName}
              isValid={isNameValid}
              validate={validateName}
              errorMessage={nameErrorMessage}
              disabled={disableForm}
            />
            <TextInputDefault
              label="CNPJ*"
              placeholder="Insira o seu CNPJ"
              value={cnpj}
              setValue={setCnpj}
              isValid={isValidCnpj}
              validate={validateCnpj}
              errorMessage={cnpjErrorMessage}
              disabled={disableForm}
              maxLength={14}
              keyboardType="numeric"
            />
            <TextInputDefault
              label="E-mail*"
              placeholder="Digite o seu e-mail de acesso"
              value={email}
              setValue={setEmail}
              isValid={isEmailValid}
              validate={validateEmail}
              errorMessage={emailErrorMessage}
              disabled={disableForm}
              keyboardType="email-address"
            />
            <TextInputDefault
              label="Confirme seu e-mail*"
              placeholder="Confirme o seu e-mail de acesso"
              value={emailConfirmation}
              setValue={setEmailConfirmation}
              isValid={isEmailConfirmationValid}
              validate={validateEmailConfirmation}
              errorMessage={emailConfirmationErrorMessage}
              disabled={disableForm}
              keyboardType="email-address"
            />
            <TextInputDefault
              label="Crie uma senha*"
              description="(8 dígitos)"
              placeholder="Crie uma senha de acesso"
              secureTextEntry={true}
              value={password}
              setValue={setPassword}
              isValid={isPasswordValid}
              validate={validatePassword}
              errorMessage={passwordErrorMessage}
              disabled={disableForm}
              maxLength={8}
            />
            <TextInputDefault
              label="Confirme sua senha*"
              description="(8 dígitos)"
              placeholder="Confirme sua senha de acesso"
              secureTextEntry={true}
              value={passwordConfirmation}
              setValue={setPasswordConfirmation}
              isValid={isPasswordConfirmationValid}
              validate={validatePasswordConfirmation}
              errorMessage={passwordConfirmationErrorMessage}
              disabled={disableForm}
              maxLength={8}
            />
            <TextInputDefault
              label="Endereço do local*"
              placeholder="Digite o endereço do local"
              value={address}
              setValue={setAddress}
              isValid={isAddressValid}
              validate={validateAddress}
              errorMessage={addressErrorMessage}
              disabled={disableForm}
            />
            <TextInputDefault
              label="WhatsApp*"
              placeholder="DDD 0000-0000"
              value={whatsapp}
              setValue={setWhatsapp}
              isValid={isWhatsappValid}
              validate={validateWhatsapp}
              errorMessage={whatsappErrorMessage}
              disabled={disableForm}
              maxLength={11}
              keyboardType="phone-pad"
            />
            <TextInputDefault
              label="Instagram*"
              placeholder="Informe o seu @ no Instagram"
              value={instagram}
              setValue={setInstagram}
              isValid={isInstagramValid}
              validate={validateInstagram}
              errorMessage={instagramErrorMessage}
              disabled={disableForm}
            />
            <PageActionArea>
              <ContinueButton
                onPress={handleContinueButton}
                disabled={disableForm}>
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
    </KeyboardAvoidingView>
  );
};

export default Page;
