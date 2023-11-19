import React from 'react';

import {ComponentArea, Label, SwitchArea, SwitchIndicator} from './styled';

const Component = ({
  label = '',
  value = false,
  setValue = () => {},
  disabled = false,
}) => {
  return (
    <ComponentArea>
      <Label>{label}</Label>
      <SwitchArea
        isActive={value}
        onPress={() => setValue(!value)}
        disabled={disabled}>
        <SwitchIndicator isActive={value} />
      </SwitchArea>
    </ComponentArea>
  );
};

export default Component;
