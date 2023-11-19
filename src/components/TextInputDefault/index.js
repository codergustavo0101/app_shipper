import React from 'react';

import {
  InputArea,
  TextArea,
  Label,
  Description,
  Input,
  ErrorMessage,
  IconArea,
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
  maxLength = 50,
  secureTextEntry = false,
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
        secureTextEntry={secureTextEntry}
      />
      {hasIcon && (
        <IconArea onPress={onPressOnIcon} color={iconColor}>
          {icon}
        </IconArea>
      )}
      <ErrorMessage
        errorMessageColor={errorMessageColor}
        allowFontScaling={false}>
        {isValid ? '' : errorMessage}
      </ErrorMessage>
    </InputArea>
  );
};

export default Component;
