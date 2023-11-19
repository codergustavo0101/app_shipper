import React from 'react';

import {
  InputArea,
  TextArea,
  Label,
  Description,
  ErrorMessage,
  LocationArea,
  Option,
  OptionTextSelectedArea,
  OptionTextSelected,
  OptionText,
} from './styled';

const Component = ({
  label,
  description = '',
  value = '',
  setValue,
  options = [],
  isValid,
  errorMessage,
  errorMessageColor = '#ff3f6d',
  onPress = () => {},
}) => {
  return (
    <InputArea onPress={onPress}>
      <TextArea>
        <Label>{label} </Label>
        <Description>{description}</Description>
      </TextArea>
      <LocationArea>
        {options.map((option, index) => (
          <Option
            key={option.value}
            onPress={() => setValue(option.value)}
            isSelected={option.value === value}
            isLastOne={index === options.length - 1}>
            {option.value === value ? (
              <OptionTextSelectedArea>
                <OptionTextSelected>{option.label}</OptionTextSelected>
              </OptionTextSelectedArea>
            ) : (
              <OptionText>{option.label}</OptionText>
            )}
          </Option>
        ))}
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
