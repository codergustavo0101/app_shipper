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

const renderAboveThumbComponent = (index, value) => {
  return (
    <AboveThumbArea>
      <AboveThumbText>{value[index]}</AboveThumbText>
    </AboveThumbArea>
  );
};

const Component = ({
  label,
  description = '',
  isValid,
  value = [0, 100],
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
          <Value>{value.join(' - ')}</Value>
          <Unity>{unity}</Unity>
        </ValueArea>
        <RangeInputArea>
          <Slider
            animateTransitions
            value={value}
            onValueChange={setValue}
            maximumTrackTintColor="#d3d3d3"
            maximumValue={max}
            minimumTrackTintColor={trackColor}
            minimumValue={min}
            step={1}
            thumbTintColor={thumbColor}
            renderAboveThumbComponent={e => renderAboveThumbComponent(e, value)}
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
