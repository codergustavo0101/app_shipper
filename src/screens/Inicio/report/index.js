import React from 'react';

import {
  ComponentArea,
  CallToActionText,
  ActionButton,
  ActionButtonText,
} from './styled';

const ReportArea = ({name, handler}) => {
  return (
    <ComponentArea>
      <CallToActionText>{name} está fazendo algo de errado?</CallToActionText>
      <ActionButton onPress={handler}>
        <ActionButtonText>Denunciar Perfil</ActionButtonText>
      </ActionButton>
    </ComponentArea>
  );
};

export default ReportArea;
