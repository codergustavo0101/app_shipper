import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {PixDataArea} from './styled';

import {TextInputDefault} from '../../../components';
import UserService from '../../../services/UserService';

let timer = null;

const PixData = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [pixKey, setPixKey] = useState(user.pixKey);
  const [isValidPixKey, setIsValidPixKey] = useState(false);
  const [pixKeyErrorMessage, setPixKeyErrorMessage] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const validatePixKey = () => {
    const validatingPixKey = pixKey?.length > 0 && pixKey?.length <= 36;

    setIsValidPixKey(validatingPixKey);

    if (!validatingPixKey) {
      setPixKeyErrorMessage('Chave Pix inválida');
    }

    return validatingPixKey;
  };

  const validateForm = () => {
    const isPixKeyValid = validatePixKey();

    setIsFormValid(isPixKeyValid);
  };

  const updatePixKeyInfo = async () => {
    try {
      await UserService.updatePix({
        pix: pixKey,
      });

      dispatch({
        type: 'SET_PIX_KEY',
        payload: pixKey,
      });
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }
  };

  useEffect(() => {
    if (pixKeyErrorMessage !== '') {
      validatePixKey();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pixKey]);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setIsFormValid(false);
      validateForm();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pixKey]);

  useEffect(() => {
    if (isFormValid) {
      updatePixKeyInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  return (
    <PixDataArea>
      <TextInputDefault
        label="Sua Chave Pix"
        placeholder="Cole sua chave pix aqui"
        value={pixKey}
        setValue={setPixKey}
        isValid={isValidPixKey}
        validate={validatePixKey}
        errorMessage={pixKeyErrorMessage}
        disabled={false}
        maxLength={36}
      />
    </PixDataArea>
  );
};

export default PixData;
