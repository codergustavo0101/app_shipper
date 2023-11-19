import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {
  TabScreenTitle,
  TextAreaDefault,
  TextInputDefault,
} from '../../../components';

import {
  CreateCouponArea,
  TopTitleArea,
  BackButtonArea,
  BackButton,
  InputsArea,
  SameRowInput,
  InputSpacement,
  ActionsArea,
  CreateCouponButton,
  CreateCouponButtonText,
  PreviewButton,
  PreviewButtonText,
} from './styled';

import ArrowCircleLeftIcon from '../../../assets/icons/arrow-circle-left.svg';
import CouponsService from '../../../services/CouponsService';

const LocalDetails = ({setShowCreateCouponArea, navigation}) => {
  const [disableForm, setDisableForm] = useState(false);

  const [product, setProduct] = useState('');
  const [isValidProduct, setIsValidProduct] = useState(false);
  const [productErrorMessage, setProductErrorMessage] = useState('');

  const [discount, setDiscount] = useState('');
  const [isValidDiscount, setIsValidDiscount] = useState(false);
  const [discountErrorMessage, setDiscountErrorMessage] = useState('');

  const [quantity, setQuantity] = useState('');
  const [isValidQuantity, setIsValidQuantity] = useState(false);
  const [quantityErrorMessage, setQuantityErrorMessage] = useState('');

  const [textValue, setTextValue] = useState('');
  const [isValidTextValue, setIsValidTextValue] = useState(false);
  const [textValueErrorMessage, setTextValueErrorMessage] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const createCoupon = async () => {
    setDisableForm(true);

    try {
      await CouponsService.createCoupon({
        product,
        discount,
        quantity: Number(quantity),
        description: textValue,
      });
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }

    setDisableForm(false);
    setShowCreateCouponArea(false);
  };

  useEffect(() => {
    if (productErrorMessage !== '') {
      validateProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  useEffect(() => {
    if (discountErrorMessage !== '') {
      validateDiscount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discount]);

  useEffect(() => {
    if (quantityErrorMessage !== '') {
      validateQuantity();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  useEffect(() => {
    if (textValueErrorMessage !== '') {
      validateTextValue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textValue]);

  useEffect(() => {
    if (isFormValid) {
      createCoupon();
    }

    setIsFormValid(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  const validateProduct = () => {
    const validatingProduct = product.length > 1;

    setIsValidProduct(validatingProduct);

    if (!validatingProduct) {
      setProductErrorMessage('Produto precisa ter pelo menos 2 caracteres');
    }

    return validatingProduct;
  };

  const validateDiscount = () => {
    const validatingDiscount = discount.length;

    setIsValidDiscount(validatingDiscount);

    if (!validatingDiscount) {
      setDiscountErrorMessage('Desconto é obrigatório');
    }

    return validatingDiscount;
  };

  const validateQuantity = () => {
    const validatingQuantity = quantity.length;

    setIsValidQuantity(validatingQuantity);

    if (!validatingQuantity) {
      setQuantityErrorMessage('Quantidade obrigatória');
    }

    return validatingQuantity;
  };

  const validateTextValue = () => {
    const validatingTextValue = textValue.length;

    setIsValidTextValue(validatingTextValue);

    if (!validatingTextValue) {
      setTextValueErrorMessage('Texto obrigatório');
    }

    return validatingTextValue;
  };

  const validateForm = () => {
    const validatingProduct = validateProduct();
    const validatingDiscount = validateDiscount();
    const validatingQuantity = validateQuantity();
    const validatingTextValue = validateTextValue();

    setIsFormValid(
      validatingProduct &&
        validatingDiscount &&
        validatingQuantity &&
        validatingTextValue,
    );
  };

  const handleClickOnGoBack = () => {
    setShowCreateCouponArea(false);
  };

  const handleClickOnCreateCouponButton = () => {
    validateForm();
  };

  const handleClickOnPreview = () => {
    navigation.navigate('MatchEstabelecimento', {
      product,
      discount,
      textValue,
    });
  };

  return (
    <CreateCouponArea>
      <TopTitleArea>
        <BackButtonArea>
          <BackButton onPress={handleClickOnGoBack} disabled={disableForm}>
            <ArrowCircleLeftIcon width={28} height={28} color="#FF3F6D" />
          </BackButton>
        </BackButtonArea>
        <TabScreenTitle title={'Criar cupom'} />
      </TopTitleArea>
      <InputsArea>
        <TextInputDefault
          label="Qual produto:"
          placeholder={'Ex: Chopp, Pastel de Camarão, ...'}
          value={product}
          setValue={setProduct}
          isValid={isValidProduct}
          validate={validateProduct}
          errorMessage={productErrorMessage}
          disabled={disableForm}
        />
        <SameRowInput>
          <TextInputDefault
            label="Desconto"
            placeholder={'Ex: 50 ou 20%'}
            value={discount}
            setValue={setDiscount}
            isValid={isValidDiscount}
            validate={validateDiscount}
            errorMessage={discountErrorMessage}
            disabled={disableForm}
          />
          <InputSpacement width={21} />
          <TextInputDefault
            label="Qtd de cupons"
            placeholder={'Ex: 10 ou 100'}
            value={quantity}
            setValue={setQuantity}
            isValid={isValidQuantity}
            validate={validateQuantity}
            errorMessage={quantityErrorMessage}
            keyboardType="numeric"
            disabled={disableForm}
          />
        </SameRowInput>
        <TextAreaDefault
          label="Texto:"
          placeholder={'Capriche na chamada...'}
          value={textValue}
          setValue={setTextValue}
          isValid={isValidTextValue}
          validate={validateTextValue}
          errorMessage={textValueErrorMessage}
          disabled={disableForm}
        />
      </InputsArea>
      <ActionsArea>
        <CreateCouponButton
          onPress={handleClickOnCreateCouponButton}
          disabled={disableForm}>
          <CreateCouponButtonText>Criar cupom</CreateCouponButtonText>
        </CreateCouponButton>
        <PreviewButton onPress={handleClickOnPreview} disabled={disableForm}>
          <PreviewButtonText>Pre-Visualizar Cupom</PreviewButtonText>
        </PreviewButton>
      </ActionsArea>
    </CreateCouponArea>
  );
};

export default LocalDetails;
