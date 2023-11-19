import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Location from 'expo-location';
import LocationService from '../../services/LocationService';

import {
  PageArea,
  HeaderWithBackButton,
  TextAreaDefault,
  LocationInputDefault,
  RangeInputMinMax,
  RangeInputDefault,
  DropdownPickerDefault,
  TextInputDefault,
} from '../../components';

import {
  Container,
  ContentArea,
  SectionTitle,
  InputDropDownArea,
  TextInputArea,
  LabelInput,
  DropdownArea,
  PageActionArea,
  ContinueButton,
  ContinueButtonText,
  ErrorMessage,
  LoadingArea,
  LoadingIcon,
} from './styled';

import Photos from './photos';

import UserService from '../../services/UserService';
import PreferencesService from '../../services/PreferencesService';
import {otherInformationUpdate} from '../../utils/otherInformationUpdate';
import {heights, states} from '../../utils/utils';

const Page = ({navigation}) => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);

  const {user, preferences, otherInformation} = useSelector(state => ({
    user: state.user,
    preferences: state.preferences,
    otherInformation: state.otherInformation,
  }));

  const [photos, setPhotos] = useState([
    {
      id: 1,
      filled: false,
      photo: null,
    },
    {
      id: 2,
      filled: false,
      photo: null,
    },
    {
      id: 3,
      filled: false,
      photo: null,
    },
    {
      id: 4,
      filled: false,
      photo: null,
    },
    {
      id: 5,
      filled: false,
      photo: null,
    },
    {
      id: 6,
      filled: false,
      photo: null,
    },
  ]);

  const [description, setDescription] = useState(user.description);
  const [age, setAge] = useState([
    preferences.minAgePreference,
    preferences.maxAgePreference,
  ]);
  const [distance, setDistance] = useState(preferences.maxDistance);

  const [isHasChildrenDropdownOpen, setIsHasChildrenDropdownOpen] =
    useState(false);
  const [hasChildrenDropdownItems, setHasChildrenDropdownItems] = useState([
    {label: 'Sim', value: 'Sim'},
    {label: 'Não', value: 'Não'},
  ]);
  const [hasChildrenDropdownValue, setHasChildrenDropdownValue] = useState(
    otherInformation['Você tem filhos? (Opcional)'],
  );

  const [isDoYouSmokeDropdownOpen, setIsDoYouSmokeDropdownOpen] =
    useState(false);
  const [doYouSmokeDropdownItems, setDoYouSmokeDropdownItems] = useState([
    {label: 'Sim', value: 'Sim'},
    {label: 'Não', value: 'Não'},
  ]);
  const [doYouSmokeDropdownValue, setDoYouSmokeDropdownValue] = useState(
    otherInformation['Você fuma? (Opcional)'],
  );

  const [isWhatsYourHeightDropdownOpen, setIsWhatsYourHeightDropdownOpen] =
    useState(false);
  const [whatsYourHeightDropdownItems, setWhatsYourHeightDropdownItems] =
    useState(heights);
  const [whatsYourHeightDropdownValue, setWhatsYourHeightDropdownValue] =
    useState(otherInformation['Qual é sua altura? (Opcional)']);

  const [isWhatsYourSchoolDropdownOpen, setIsWhatsYourSchoolDropdownOpen] =
    useState(false);
  const [whatsYourSchoolDropdownItems, setWhatsYourSchoolDropdownItems] =
    useState([
      {label: 'Ensino Fundamental', value: 'Ensino Fundamental'},
      {label: 'Ensino Médio', value: 'Ensino Médio'},
      {label: 'Ensino Superior', value: 'Ensino Superior'},
    ]);
  const [whatsYourSchoolDropdownValue, setWhatsYourSchoolDropdownValue] =
    useState(otherInformation['Qual é sua escolaridade? (Opcional)']);

  const [isWhatsYourJobDropdownOpen, setIsWhatsYourJobDropdownOpen] =
    useState(false);
  const [whatsYourJobDropdownItems, setWhatsYourJobDropdownItems] = useState([
    {label: 'Estudante', value: 'Estudante'},
    {label: 'Trabalhador', value: 'Trabalhador'},
    {label: 'Autônomo', value: 'Autônomo'},
  ]);
  const [whatsYourJobDropdownValue, setWhatsYourJobDropdownValue] = useState(
    otherInformation['Qual é sua profissão? (Opcional)'],
  );

  const [isAreYouVaccinatedDropdownOpen, setIsAreYouVaccinatedDropdownOpen] =
    useState(false);
  const [areYouVaccinatedDropdownItems, setAreYouVaccinatedDropdownItems] =
    useState([
      {label: 'Sim', value: 'Sim'},
      {label: 'Não', value: 'Não'},
    ]);
  const [areYouVaccinatedDropdownValue, setAreYouVaccinatedDropdownValue] =
    useState(otherInformation['Você tá vacinado do COVID-19? (Opcional)']);

  const [isWhatsYourStateDropdownOpen, setIsWhatsYourStateDropdownOpen] =
    useState(false);
  const [whatsYourStateDropdownItems, setWhatsYourStateDropdownItems] =
    useState(states);
  const [whatsYourStateDropdownValue, setWhatsYourStateDropdownValue] =
    useState(otherInformation['Morando em (Opcional)']);

  const [
    isWhatsYourSexualOrientationDropdownOpen,
    setIsWhatsYourSexualOrientationDropdownOpen,
  ] = useState(false);
  const [
    whatsYourSexualOrientationDropdownItems,
    setWhatsYourSexualOrientationDropdownItems,
  ] = useState([
    {label: 'Heterossexual', value: 'Heterossexual'},
    {label: 'Bisexual', value: 'Bisexual'},
  ]);
  const [
    whatsYourSexualOrientationDropdownValue,
    setWhatsYourSexualOrientationDropdownValue,
  ] = useState(otherInformation['Orientação sexual (Opcional)']);

  const [formDisabled, setFormDisabled] = useState(false);

  const [isValidPhotos, setIsValidPhotos] = useState(false);
  const [photosErrorMessage, setPhotosErrorMessage] = useState('');

  const [instagram, setInstagram] = useState(
    otherInformation['Instagram (Opcional)'],
  );
  const [isInstagramValid, setIsInstagramValid] = useState(false);
  const [instagramErrorMessage, setInstagramErrorMessage] = useState('');

  const [linkedin, setLinkedin] = useState(
    otherInformation['Linkedin (Opcional)'],
  );

  const [isLoading, setIsLoading] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (photosErrorMessage !== '') {
      validatePhotos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos]);

  useEffect(() => {
    if (instagramErrorMessage !== '') {
      validateInstagram();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instagram]);

  useEffect(() => {
    if (isFormValid) {
      setIsLoading(true);

      updateProfile();
    }

    setIsFormValid(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

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

  useEffect(() => {
    if (location) {
      dispatch({
        type: 'SET_USER',
        payload: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });

      LocationService.reverseGeocode({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }).then(response => {
        dispatch({
          type: 'SET_CITY',
          payload: response,
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const updateProfile = async () => {
    const promises = [];

    promises.push(
      UserService.updateProfile({
        description,
      }),
    );

    promises.push(
      PreferencesService.updatePreferences({
        city: preferences.city,
        minAgePreference: age[0],
        maxAgePreference: age[1],
        maxDistance: typeof distance === 'number' ? distance : distance[0],
      }),
    );

    promises.push(
      otherInformationUpdate.update(
        [
          {
            question: 'Você tem filhos? (Opcional)',
            answer: hasChildrenDropdownValue,
          },
          {
            question: 'Você fuma? (Opcional)',
            answer: doYouSmokeDropdownValue,
          },
          {
            question: 'Qual é sua altura? (Opcional)',
            answer: whatsYourHeightDropdownValue,
          },
          {
            question: 'Qual é sua escolaridade? (Opcional)',
            answer: whatsYourSchoolDropdownValue,
          },
          {
            question: 'Qual é sua profissão? (Opcional)',
            answer: whatsYourJobDropdownValue,
          },
          {
            question: 'Você tá vacinado do COVID-19? (Opcional)',
            answer: areYouVaccinatedDropdownValue,
          },
          {
            question: 'Instagram (Opcional)',
            answer: instagram,
          },
          {
            question: 'Linkedin (Opcional)',
            answer: linkedin,
          },
          {
            question: 'Morando em (Opcional)',
            answer: whatsYourStateDropdownValue,
          },
          {
            question: 'Orientação sexual (Opcional)',
            answer: whatsYourSexualOrientationDropdownValue,
          },
        ],
        dispatch,
      ),
    );

    try {
      await Promise.all(promises);

      dispatch({
        type: 'SET_DESCRIPTION',
        payload: description,
      });

      dispatch({
        type: 'SET_MIN_AGE_PREFERENCE',
        payload: age[0],
      });

      dispatch({
        type: 'SET_MAX_AGE_PREFERENCE',
        payload: age[1],
      });

      dispatch({
        type: 'SET_MAX_DISTANCE',
        payload: typeof distance === 'number' ? distance : distance[0],
      });

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

  const validatePhotos = () => {
    const validatingPhotos = photos.some(photo => photo.filled);

    setIsValidPhotos(validatingPhotos);

    if (!validatingPhotos) {
      setPhotosErrorMessage('Você precisa enviar pelo menos uma foto.');
    }

    return validatingPhotos;
  };

  const validateInstagram = () => {
    if (instagram.length > 0) {
      const validatingInstagram = instagram.match(
        /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/,
      );

      setIsInstagramValid(validatingInstagram);

      if (!validatingInstagram) {
        setInstagramErrorMessage('Instagram inválido');
      }

      return validatingInstagram;
    }

    return true;
  };

  const validateForm = () => {
    const validatingPhotos = validatePhotos();
    const validatingInstagram = validateInstagram();

    setIsFormValid(validatingPhotos && validatingInstagram);
  };

  const handleContinueButton = () => {
    validateForm();
  };

  return (
    <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
      <Container>
        <HeaderWithBackButton navigation={navigation} />
        <ContentArea>
          <SectionTitle>Perfil e descrição</SectionTitle>
          <Photos
            photos={photos}
            setPhotos={setPhotos}
            disabled={formDisabled}
          />
          {photosErrorMessage !== '' && !isValidPhotos && (
            <ErrorMessage>{photosErrorMessage}</ErrorMessage>
          )}
          <TextAreaDefault
            label="Descrição"
            placeholder="Capriche na descrição"
            value={description}
            setValue={setDescription}
            disabled={formDisabled}
          />
          <SectionTitle>Preferências</SectionTitle>
          <LocationInputDefault label="Localização" />
          <RangeInputMinMax
            label="Preferência de idade"
            value={age}
            setValue={setAge}
            min={18}
            max={50}
          />
          <RangeInputDefault
            label="Distância máxima"
            value={distance}
            setValue={setDistance}
            unity="KM"
          />
          <SectionTitle>Outras informações</SectionTitle>
          <InputDropDownArea isDropdownOpen={isHasChildrenDropdownOpen}>
            <TextInputArea>
              <LabelInput>Você tem filhos? (Opcional)</LabelInput>
            </TextInputArea>
            <DropdownArea>
              <DropdownPickerDefault
                placeholder="Selecione se você tem filhos"
                open={isHasChildrenDropdownOpen}
                setOpen={setIsHasChildrenDropdownOpen}
                value={hasChildrenDropdownValue}
                setValue={setHasChildrenDropdownValue}
                items={hasChildrenDropdownItems}
                setItems={setHasChildrenDropdownItems}
                zIndex={6000}
                zIndexInverse={1000}
                disabled={formDisabled}
              />
            </DropdownArea>
          </InputDropDownArea>
          <InputDropDownArea isDropdownOpen={isDoYouSmokeDropdownOpen}>
            <TextInputArea>
              <LabelInput>Você fuma? (Opcional)</LabelInput>
            </TextInputArea>
            <DropdownArea>
              <DropdownPickerDefault
                placeholder="Selecione"
                open={isDoYouSmokeDropdownOpen}
                setOpen={setIsDoYouSmokeDropdownOpen}
                value={doYouSmokeDropdownValue}
                setValue={setDoYouSmokeDropdownValue}
                items={doYouSmokeDropdownItems}
                setItems={setDoYouSmokeDropdownItems}
                zIndex={5000}
                zIndexInverse={2000}
                disabled={formDisabled}
              />
            </DropdownArea>
          </InputDropDownArea>
          <InputDropDownArea isDropdownOpen={isWhatsYourHeightDropdownOpen}>
            <TextInputArea>
              <LabelInput>Qual é sua altura? (Opcional)</LabelInput>
            </TextInputArea>
            <DropdownArea>
              <DropdownPickerDefault
                placeholder="Selecione sua altura"
                open={isWhatsYourHeightDropdownOpen}
                setOpen={setIsWhatsYourHeightDropdownOpen}
                value={whatsYourHeightDropdownValue}
                setValue={setWhatsYourHeightDropdownValue}
                items={whatsYourHeightDropdownItems}
                setItems={setWhatsYourHeightDropdownItems}
                zIndex={4000}
                zIndexInverse={3000}
                disabled={formDisabled}
              />
            </DropdownArea>
          </InputDropDownArea>
          <InputDropDownArea isDropdownOpen={isWhatsYourSchoolDropdownOpen}>
            <TextInputArea>
              <LabelInput>Qual é sua escolaridade? (Opcional)</LabelInput>
            </TextInputArea>
            <DropdownArea>
              <DropdownPickerDefault
                placeholder="Selecione sua escolaridade"
                open={isWhatsYourSchoolDropdownOpen}
                setOpen={setIsWhatsYourSchoolDropdownOpen}
                value={whatsYourSchoolDropdownValue}
                setValue={setWhatsYourSchoolDropdownValue}
                items={whatsYourSchoolDropdownItems}
                setItems={setWhatsYourSchoolDropdownItems}
                zIndex={3000}
                zIndexInverse={4000}
                disabled={formDisabled}
              />
            </DropdownArea>
          </InputDropDownArea>
          <InputDropDownArea isDropdownOpen={isWhatsYourJobDropdownOpen}>
            <TextInputArea>
              <LabelInput>Qual é sua profissão? (Opcional)</LabelInput>
            </TextInputArea>
            <DropdownArea>
              <DropdownPickerDefault
                placeholder="Selecione sua profissão"
                open={isWhatsYourJobDropdownOpen}
                setOpen={setIsWhatsYourJobDropdownOpen}
                value={whatsYourJobDropdownValue}
                setValue={setWhatsYourJobDropdownValue}
                items={whatsYourJobDropdownItems}
                setItems={setWhatsYourJobDropdownItems}
                zIndex={2000}
                zIndexInverse={5000}
                disabled={formDisabled}
              />
            </DropdownArea>
          </InputDropDownArea>
          <InputDropDownArea isDropdownOpen={isAreYouVaccinatedDropdownOpen}>
            <TextInputArea>
              <LabelInput>Você tá vacinado do COVID-19? (Opcional)</LabelInput>
            </TextInputArea>
            <DropdownArea>
              <DropdownPickerDefault
                placeholder="Selecione"
                open={isAreYouVaccinatedDropdownOpen}
                setOpen={setIsAreYouVaccinatedDropdownOpen}
                value={areYouVaccinatedDropdownValue}
                setValue={setAreYouVaccinatedDropdownValue}
                items={areYouVaccinatedDropdownItems}
                setItems={setAreYouVaccinatedDropdownItems}
                zIndex={1000}
                zIndexInverse={6000}
                disabled={formDisabled}
              />
            </DropdownArea>
          </InputDropDownArea>
          <TextInputDefault
            label="Instagram (Opcional)"
            placeholder="Informe seu instagram"
            value={instagram}
            setValue={setInstagram}
            isValid={isInstagramValid}
            validate={validateInstagram}
            errorMessage={instagramErrorMessage}
            disabled={formDisabled}
          />
          <TextInputDefault
            label="Linkedin (Opcional)"
            placeholder="Informe seu linkedin"
            value={linkedin}
            setValue={setLinkedin}
            disabled={formDisabled}
          />
          <InputDropDownArea isDropdownOpen={isWhatsYourStateDropdownOpen}>
            <TextInputArea>
              <LabelInput>Morando em (Opcional)</LabelInput>
            </TextInputArea>
            <DropdownArea>
              <DropdownPickerDefault
                placeholder="Selecione o estado que você mora"
                open={isWhatsYourStateDropdownOpen}
                setOpen={setIsWhatsYourStateDropdownOpen}
                value={whatsYourStateDropdownValue}
                setValue={setWhatsYourStateDropdownValue}
                items={whatsYourStateDropdownItems}
                setItems={setWhatsYourStateDropdownItems}
                zIndex={2000}
                zIndexInverse={1000}
                disabled={formDisabled}
              />
            </DropdownArea>
          </InputDropDownArea>
          <InputDropDownArea
            isDropdownOpen={isWhatsYourSexualOrientationDropdownOpen}>
            <TextInputArea>
              <LabelInput>Orientação sexual (Opcional)</LabelInput>
            </TextInputArea>
            <DropdownArea>
              <DropdownPickerDefault
                placeholder="Selecione sua orientação sexual"
                open={isWhatsYourSexualOrientationDropdownOpen}
                setOpen={setIsWhatsYourSexualOrientationDropdownOpen}
                value={whatsYourSexualOrientationDropdownValue}
                setValue={setWhatsYourSexualOrientationDropdownValue}
                items={whatsYourSexualOrientationDropdownItems}
                setItems={setWhatsYourSexualOrientationDropdownItems}
                zIndex={1000}
                zIndexInverse={2000}
                disabled={formDisabled}
              />
            </DropdownArea>
          </InputDropDownArea>
          <PageActionArea>
            {photosErrorMessage !== '' && !isValidPhotos && (
              <ErrorMessage>{photosErrorMessage}</ErrorMessage>
            )}
            <ContinueButton
              onPress={handleContinueButton}
              disabled={formDisabled}>
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
