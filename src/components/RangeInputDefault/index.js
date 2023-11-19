import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';

import {
  InputArea,
  TextArea,
  Label,
  Description,
  ErrorMessage,
  RangeArea,
  ValueArea,
  Value,
  Unity,
  RangeInputArea,
  AboveThumbArea,
  AboveThumbText,
} from './styled';

const renderAboveThumbComponent = value => {
  return (
    <AboveThumbArea>
      <AboveThumbText>{value}</AboveThumbText>
    </AboveThumbArea>
  );
};

const Component = ({
  label,
  description = '',
  isValid,
  value,
  setValue,
  min = 0,
  max = 100,
  trackColor = '#FF3F6D',
  thumbColor = '#FF3F6D',
  errorMessage,
  errorMessageColor = '#ff3f6d',
  unity = '',
  onPress = () => {},
}) => {
  return (
    <InputArea onPress={onPress}>
      <TextArea>
        <Label>{label} </Label>
        <Description>{description}</Description>
      </TextArea>
      <RangeArea>
        <ValueArea>
          <Value>{value.toString()}</Value>
          <Unity>{unity}</Unity>
        </ValueArea>
        <RangeInputArea>
          <Slider
            value={value}
            minimumValue={min}
            maximumValue={max}
            step={1}
            onValueChange={setValue}
            animateTransitions
            renderAboveThumbComponent={() => renderAboveThumbComponent(value)}
            maximumTrackTintColor="#d3d3d3"
            minimumTrackTintColor={trackColor}
            thumbTintColor={thumbColor}
            // eslint-disable-next-line react-native/no-inline-styles
            trackStyle={{
              borderRadius: 0,
            }}
          />
        </RangeInputArea>
      </RangeArea>
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
