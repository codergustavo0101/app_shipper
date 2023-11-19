import React from 'react';

import {ComponentArea, Title} from './styled';

const Component = ({title = ''}) => {
  return (
    <ComponentArea>
      <Title>{title}</Title>
    </ComponentArea>
  );
};

export default Component;
