import React from 'react';

import {
  PricesArea,
  PriceArea,
  MonthsLabel,
  MonthLabel,
  PriceLabel,
  EconomyLabel,
} from './styled';

const PlansPrice = ({prices, selectedPlan, setSelectedPlan}) => {
  return (
    <PricesArea>
      {prices.map(price => (
        <PriceArea
          key={price.id}
          selected={selectedPlan === price.id}
          onPress={() => {
            setSelectedPlan(price.id);
          }}>
          <MonthsLabel selected={selectedPlan === price.id}>
            {price.months}
          </MonthsLabel>
          <MonthLabel selected={selectedPlan === price.id}>Mês</MonthLabel>
          <PriceLabel selected={selectedPlan === price.id}>
            R$ {price.price.toFixed(2).replace('.', ',')}
          </PriceLabel>
          {selectedPlan === price.id && price.economy && (
            <EconomyLabel>Economize {price.economy}%</EconomyLabel>
          )}
        </PriceArea>
      ))}
    </PricesArea>
  );
};

export default PlansPrice;
