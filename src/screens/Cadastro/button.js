import React from 'react';

import {ButtonArea, ButtonImageArea, ButtonImage, ButtonText} from './styled';

const Button = ({onPress = () => {}, image = null, text = ''}) => {
  return (
    <ButtonArea onPress={onPress}>
      <ButtonImageArea>
        <ButtonImage source={image} />
      </ButtonImageArea>
      <ButtonText>{text}</ButtonText>
    </ButtonArea>
  );
};

export default Button;
