import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  /* font-weight: 300; */
  font-family: 'Poppins-Light';
  color: #000;
`;

const CustomText = ({children, allowFontScaling = false, ...rest}) => {
  return (
    <Text {...rest} allowFontScaling={allowFontScaling}>
      {children}
    </Text>
  );
};

export default CustomText;
