import React, {useState} from 'react';

import {
  ComponentArea,
  CallToActionText,
  StarsArea,
  StarButton,
  ActionButton,
  ActionButtonText,
} from './styled';

import StarIcon from '../../../assets/icons/star.svg';

const RateArea = ({name, handler, rate}) => {
  const [internalRank, setInternalRank] = useState(rate);

  const getFillColor = starRate => {
    const filledColor = '#FFF505';
    const unfilledColor = '#EAEAE9';

    if (internalRank === null) {
      setInternalRank(3);
    }

    return starRate <= internalRank ? filledColor : unfilledColor;
  };

  return (
    <ComponentArea>
      <CallToActionText numberOfLines={2}>
        Como você avalia o perfil de {name}?
      </CallToActionText>
      <StarsArea>
        <StarButton onPress={() => setInternalRank(1)}>
          <StarIcon width={35} heigth={35} color={getFillColor(1)} />
        </StarButton>
        <StarButton onPress={() => setInternalRank(2)}>
          <StarIcon width={35} heigth={35} color={getFillColor(2)} />
        </StarButton>
        <StarButton onPress={() => setInternalRank(3)}>
          <StarIcon width={35} heigth={35} color={getFillColor(3)} />
        </StarButton>
        <StarButton onPress={() => setInternalRank(4)}>
          <StarIcon width={35} heigth={35} color={getFillColor(4)} />
        </StarButton>
        <StarButton onPress={() => setInternalRank(5)}>
          <StarIcon width={35} heigth={35} color={getFillColor(5)} />
        </StarButton>
      </StarsArea>
      <ActionButton onPress={() => handler(internalRank)}>
        <ActionButtonText>Avaliar Perfil</ActionButtonText>
      </ActionButton>
    </ComponentArea>
  );
};

export default RateArea;
