import React from 'react';
import {useSelector} from 'react-redux';

import {
  InputArea,
  TextArea,
  Label,
  Description,
  ErrorMessage,
  LocationArea,
  MyLocationLabel,
  MyLocationValue,
} from './styled';

const Component = ({
  label,
  description = '',
  isValid,
  errorMessage,
  errorMessageColor = '#ff3f6d',
  onPress = () => {},
}) => {
  const preferences = useSelector(state => state.preferences);

  return (
    <InputArea onPress={onPress}>
      <TextArea>
        <Label>{label} </Label>
        <Description>{description}</Description>
      </TextArea>
      <LocationArea>
        <MyLocationLabel>Minha localização atual: </MyLocationLabel>
        <MyLocationValue numberOfLines={1}>{preferences.city}</MyLocationValue>
      </LocationArea>
      {!isValid && (
        <ErrorMessage
          errorMessageColor={errorMessageColor}
          allowFontScaling={false}>
          {errorMessage}
        </ErrorMessage>
      )}
    </InputArea>
  );
};

export default Component;
