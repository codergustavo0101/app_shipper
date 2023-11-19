import React, {useState, useEffect} from 'react';

import {PageArea, HeaderWithBackButton} from '../../components';

import {
  Container,
  PageTitle,
  DescriptionArea,
  DescriptionText,
  BoldDescriptionText,
  EmailImageArea,
  EmailImage,
  ResendArea,
  DidntReceiveEmailText,
  ResendEmailButton,
  ResendEmailButtonText,
  AgreeButton,
  AgreeButtonText,
} from './styled';

import EmailIcon from '../../assets/images/mail.png';
import AuthService from '../../services/AuthService';
import {Alert} from 'react-native';

let intervalSeconds = null;
let timeoutRequest = null;

const Page = ({navigation, route}) => {
  const email = route.params.email;

  const [allowEmailResend, setAllowEmailResend] = useState(false);
  const [timerText, setTimerText] = useState('00:00');

  const censoredEmail =
    email.substring(0, 3) + '***' + email.substring(email.indexOf('@'));

  const sendEmail = async () => {
    setAllowEmailResend(false);

    try {
      await AuthService.recoverPassword(email);
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }

    timeoutRequest = setTimeout(() => {
      setAllowEmailResend(true);
      setTimerText('00:00');

      clearInterval(intervalSeconds);
    }, 1000 * 60 * 5); // 5 minutes

    return;
  };

  const handleClickOnResendEmailButton = async () => {
    await sendEmail();
  };

  const handleClickOnAgreeButton = () => {
    navigation.goBack();
  };

  useEffect(() => {
    sendEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (allowEmailResend) {
      setTimerText('00:00');
      return;
    } else {
      let minutes = 4;
      let seconds = 59;

      intervalSeconds = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalSeconds);
          setTimerText('00:00');
          return;
        }

        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }

        setTimerText(`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
      }, 1000);
    }
  }, [allowEmailResend]);

  useEffect(() => {
    return () => {
      clearInterval(intervalSeconds);
      clearTimeout(timeoutRequest);
    };
  }, []);

  return (
    <PageArea statusBarStyle={'dark-content'} statusBarTranslucent={false}>
      <HeaderWithBackButton navigation={navigation} />
      <Container>
        <PageTitle>E-mail enviado!</PageTitle>
        <DescriptionArea>
          <DescriptionText>
            As intruções foram enviadas para o e-mail {'\n'} abaixo:{'\n'}
            <BoldDescriptionText>{censoredEmail}</BoldDescriptionText>
          </DescriptionText>
        </DescriptionArea>
        <EmailImageArea>
          <EmailImage source={EmailIcon} />
        </EmailImageArea>
        <ResendArea>
          <DidntReceiveEmailText>Não recebeu?</DidntReceiveEmailText>
          <ResendEmailButton
            onPress={handleClickOnResendEmailButton}
            disabled={!allowEmailResend}>
            <ResendEmailButtonText>
              {allowEmailResend ? 'Reenviar' : timerText}
            </ResendEmailButtonText>
          </ResendEmailButton>
        </ResendArea>
        <AgreeButton onPress={handleClickOnAgreeButton}>
          <AgreeButtonText>Entendi</AgreeButtonText>
        </AgreeButton>
      </Container>
    </PageArea>
  );
};

export default Page;
