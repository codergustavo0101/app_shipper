import React, {useState} from 'react';

import {InputArea, Input, ErrorMessage, IconArea} from './styled';

import EyeSlashIcon from '../../assets/icons/eye-slash.svg';
import EyeIcon from '../../assets/icons/eye.svg';

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
  iconColor = '#000',
  onFocus = () => {},
  onPress = () => {},
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <InputArea onPress={onPress}>
      <Input
        placeholder={label}
        value={value}
        onChangeText={val => setValue(val)}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onBlur={validate}
        onFocus={onFocus}
        maxLength={maxLength}
        disabled={disabled}
        background={backgroundColor}
        placeholderTextColor={placeholderColor}
        textColor={textColor}
      />
      <IconArea onPress={() => setSecureTextEntry(!secureTextEntry)}>
        {secureTextEntry ? (
          <EyeSlashIcon width={22} height={22} color={iconColor} />
        ) : (
          <EyeIcon width={22} height={22} color={iconColor} />
        )}
      </IconArea>
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
