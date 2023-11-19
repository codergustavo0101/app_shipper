import React, {useState, useEffect} from 'react';

import {
  InputArea,
  TextArea,
  Label,
  Description,
  Input,
  ErrorMessage,
  IconArea,
  LengthIndicatorArea,
  LengthIndicator,
} from './styled';

const Component = ({
  value,
  setValue = () => {},
  label,
  description = '',
  placeholder,
  isValid,
  errorMessage,
  validate,
  maxLength = 200,
  keyboardType = 'default',
  backgroundColor = '#FAF9F9',
  placeholderColor = '#B1B2B2',
  textColor = '#B1B2B2',
  errorMessageColor = '#ff3f6d',
  disabled = false,
  iconColor = '#000',
  hasIcon = false,
  icon = null,
  onFocus = () => {},
  onPress = () => {},
  onPressOnIcon = () => {},
}) => {
  const [valueLength, setValueLength] = useState(0);

  const getLengthIndicator = length => {
    const indicator = maxLength - length;

    return indicator;
  };

  const getIndicatorColor = length => {
    const _25percent = maxLength - maxLength / 4;
    const _5percent = maxLength - maxLength / 20;

    if (length >= _5percent) {
      return '#f52b2b';
    } else if (length >= _25percent) {
      return '#fff505';
    } else {
      return '#B1B2B2';
    }
  };

  useEffect(() => {
    setValueLength(value?.length || 0);
  }, [value]);

  return (
    <InputArea onPress={onPress}>
      <TextArea>
        <Label>{label} </Label>
        <Description>{description}</Description>
      </TextArea>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={val => setValue(val)}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onBlur={validate}
        onFocus={onFocus}
        maxLength={maxLength}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        background={backgroundColor}
        placeholderTextColor={placeholderColor}
        textColor={textColor}
        multiline={true}
        blurOnSubmit={true}
      />
      {hasIcon && (
        <IconArea onPress={onPressOnIcon} color={iconColor}>
          {icon}
        </IconArea>
      )}
      <LengthIndicatorArea>
        <LengthIndicator color={() => getIndicatorColor(valueLength)}>
          {getLengthIndicator(valueLength)}
        </LengthIndicator>
      </LengthIndicatorArea>
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
