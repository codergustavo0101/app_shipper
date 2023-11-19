import React from 'react';

import {InputArea, Input, ErrorMessage, IconArea} from './styled';

const Component = ({
  value,
  setValue = () => {},
  label,
  isValid,
  errorMessage,
  validate,
  maxLength = 50,
  keyboardType = 'default',
  backgroundColor = '#fff',
  placeholderColor = '#000000A6',
  textColor = '#000',
  errorMessageColor = '#fff',
  disabled = false,
  hasIcon = false,
  onFocus = () => {},
  onPress = () => {},
  onPressOnIcon = () => {},
  bordered = false,
}) => {
  return (
    <InputArea onPress={onPress}>
      <Input
        placeholder={label}
        value={value}
        onChangeText={val => setValue(val)}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onBlur={validate}
        onFocus={onFocus}
        maxLength={maxLength}
        disabled={disabled}
        background={backgroundColor}
        placeholderTextColor={placeholderColor}
        textColor={textColor}
        bordered={bordered}
      />
      {hasIcon && <IconArea onPress={onPressOnIcon} />}
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
