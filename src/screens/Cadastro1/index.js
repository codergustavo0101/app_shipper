import React, {useState, useEffect} from 'react';

import {PageArea, HeaderWithBackButton} from '../../components';

import {
  Container,
  PageTitle,
  TermsArea,
  TermsText,
  TermsActionArea,
  TermsActionToggleButton,
  TermsActionToggleButtonView,
  TermsActionReadButton,
  TermsActionReadButtonText,
  PageActionArea,
  AgreeButton,
  AgreeButtonText,
  DisagreeButton,
  DisagreeButtonText,
  ErrorMessageText,
} from './styled';

const Page = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [isValidChecked, setIsValidChecked] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('');

  useEffect(() => {
    if (formErrorMessage !== '') {
      validateChecked();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  useEffect(() => {
    if (isFormValid) {
      navigation.replace('Cadastro2');
    }

    setIsFormValid(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  const validateChecked = () => {
    const validatingChecked = checked;

    setIsValidChecked(validatingChecked);

    if (!validatingChecked) {
      setFormErrorMessage('Você precisa aceitar os termos de uso');
    }

    return validatingChecked;
  };

  const validateForm = () => {
    const validatingChecked = validateChecked();

    setIsFormValid(validatingChecked);
  };

  const handleClickOnAgreeButton = () => {
    validateForm();
  };

  const handleClickOnDisagreeButton = () => {
    navigation.goBack();
  };

  return (
    <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
      <HeaderWithBackButton navigation={navigation} />
      <Container>
        <PageTitle>Termos de privacidade e condulta</PageTitle>
        <TermsArea>
          <TermsText>
            Para continuar é necessário que você esteja{'\n'}
            de acordo com a nossa política de{'\n'}
            armazenamento e processamento de dados,{'\n'}
            bem como, com as condições de boas{'\n'}
            maneiras e conduta do Shipper
          </TermsText>
          <TermsActionArea>
            <TermsActionToggleButton onPress={() => setChecked(!checked)}>
              <TermsActionToggleButtonView checked={checked} />
            </TermsActionToggleButton>
            <TermsActionReadButton>
              <TermsActionReadButtonText>
                Leia nossa política de privacidade e{'\n'}
                conduta.
              </TermsActionReadButtonText>
            </TermsActionReadButton>
          </TermsActionArea>
        </TermsArea>
        <PageActionArea>
          {formErrorMessage !== '' && !isValidChecked && (
            <ErrorMessageText>{formErrorMessage}</ErrorMessageText>
          )}
          <AgreeButton onPress={handleClickOnAgreeButton}>
            <AgreeButtonText>Aceito</AgreeButtonText>
          </AgreeButton>
          <DisagreeButton onPress={handleClickOnDisagreeButton}>
            <DisagreeButtonText>Desisto</DisagreeButtonText>
          </DisagreeButton>
        </PageActionArea>
      </Container>
    </PageArea>
  );
};

export default Page;
