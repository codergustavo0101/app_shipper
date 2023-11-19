import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import validator from 'validator';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import {useSelector, useDispatch} from 'react-redux';

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
  LogoutButton,
  LogoutButtonText,
  AppVersion,
  LogoArea,
  LogoBottom,
  VersionBorder,
  AppVersionText,
  DeleteAccount,
  DeleteAccountText,
  ErrorMessage,
  LoadingArea,
  LoadingIcon,
} from './styled';

import PhotosService from '../../services/PhotosService';
import EstablishmentService from '../../services/EstablishmentService';

import AvatarAreaBackground from '../../assets/images/avatar-area-background.png';
import CameraIcon from '../../assets/icons/camera.svg';
import UploadIcon from '../../assets/icons/upload.svg';
import LogoImage from '../../assets/images/logo-pink.png';

const Page = ({navigation}) => {
  const establishment = useSelector(state => state.establishment);
  const dispatch = useDispatch();

  const [profilePicture, setProfilePicture] = useState(null);
  const [menuPicture, setMenuPicture] = useState(null);

  const [logo, setLogo] = useState(null);
  const [menu, setMenu] = useState(null);
  const [menuPreviewHeight, setMenuPreviewHeight] = useState(0);
  const [menuLabel, setMenuLabel] = useState('Faça upload do seu\ncardapio');

  const filterImagesAndSetAvatarAndMenu = () => {
    if (establishment.photos) {
      const avatar = establishment.photos.find(item => item.type === 'profile');
      const menuUrl = establishment.photos.find(item => item.type === 'menu');

      if (avatar) {
        setProfilePicture(avatar.photoUrl);
      }

      if (menuUrl) {
        setMenuPicture(menuUrl.photoUrl);
      }
    }

    return null;
  };

  useEffect(() => {
    filterImagesAndSetAvatarAndMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [establishment]);

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

  const [name, setName] = useState(establishment.name);
  const [isNameValid, setIsNameValid] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const [address, setAddress] = useState(establishment.address);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [addressErrorMessage, setAddressErrorMessage] = useState('');

  const [whatsapp, setWhatsapp] = useState(establishment.phone);
  const [isWhatsappValid, setIsWhatsappValid] = useState(false);
  const [whatsappErrorMessage, setWhatsappErrorMessage] = useState('');

  const [instagram, setInstagram] = useState(establishment.instagram);
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
      update();
    }

    setIsFormValid(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  const update = async () => {
    setIsLoading(true);

    try {
      const promises = [];

      if (logo) {
        promises.push(PhotosService.updateProfilePicture(logo));
      }

      if (menu) {
        promises.push(PhotosService.updateMenu(menu));
      }

      promises.push(
        EstablishmentService.updateProfile({
          name,
          address,
          phone: whatsapp,
          instagram,
        }),
      );

      dispatch({
        type: 'SET_ESTABLISHMENT',
        payload: {
          name,
          address,
          phone: whatsapp,
          instagram,
        },
      });

      await Promise.all(promises);

      navigation.goBack();
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }

    setIsLoading(false);
  };

  const validateLogo = () => {
    const validatingLogo = logo !== null || profilePicture !== null;

    setIsLogoValid(validatingLogo);

    if (!validatingLogo) {
      setLogoErrorMessage('Escolha uma imagem');
    }

    return validatingLogo;
  };

  const validateMenu = () => {
    const validatingMenu = menu !== null || menuPicture !== null;

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
    const validatingAddress = validateAddress();
    const validatingWhatsapp = validateWhatsapp();
    const validatingInstagram = validateInstagram();

    setIsFormValid(
      validatingLogo &&
        validatingMenu &&
        validatingName &&
        validatingAddress &&
        validatingWhatsapp &&
        validatingInstagram,
    );
  };

  const handleContinueButton = () => {
    validatedForm();
  };

  const handleLogoutButton = () => {
    dispatch({
      type: 'LOGOUT',
    });

    navigation.reset({
      index: 0,
      routes: [{name: 'Splash'}],
    });
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Excluir conta',
      'Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            setIsLoading(true);

            EstablishmentService.deleteAccount()
              .then(() => {
                dispatch({
                  type: 'SET_TOKEN',
                  payload: '',
                });

                navigation.reset({
                  index: 0,
                  routes: [{name: 'Splash'}],
                });
              })
              .catch(error => {
                console.log(error);

                let errorMessage =
                  error?.response?.data?.message || error.message;
                Alert.alert('Erro', errorMessage);

                setIsLoading(false);
              });
          },
        },
      ],
    );
  };

  return (
    <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
      <Container>
        <HeaderWithBackButton navigation={navigation} />
        <ContentArea>
          <LogoUploadArea>
            <PageTitle>Upload logo PNG</PageTitle>
            <LogoUploadActionArea>
              <Logo
                source={{
                  uri: logo ? `data:image/png;base64,${logo}` : profilePicture,
                }}
              />
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
              {!menu && !menuPicture && (
                <>
                  <UploadIcon width={47} height={40} color="#ff3f6d" />
                  <MenuUploadButtonText>{menuLabel}</MenuUploadButtonText>
                </>
              )}
              {(menu || menuPicture) && (
                <MenuPreviewImage
                  source={{
                    uri: menu ? `data:image/png;base64,${menu}` : menuPicture,
                  }}
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
              <ContinueButtonText>Salvar</ContinueButtonText>
            </ContinueButton>
            <LogoutButton onPress={handleLogoutButton} disabled={disableForm}>
              <LogoutButtonText>Sair</LogoutButtonText>
            </LogoutButton>
          </PageActionArea>
          <AppVersion>
            <LogoArea>
              <LogoBottom source={LogoImage} />
            </LogoArea>
            <VersionBorder />
            <AppVersionText>
              Versão: {Constants.manifest.version}
            </AppVersionText>
          </AppVersion>
          <DeleteAccount onPress={handleDeleteAccount} disabled={disableForm}>
            <DeleteAccountText>Excluir conta</DeleteAccountText>
          </DeleteAccount>
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
