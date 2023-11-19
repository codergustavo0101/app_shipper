import React from 'react';

import {
  TableArea,
  TitlesArea,
  Title,
  BenefitsArea,
  BenefitArea,
  Benefit,
  ContainBenefits,
  ContainArea,
  VerticalLine,
} from './styled';

import TickIcon from '../../assets/icons/tick.svg';
import CloseIcon from '../../assets/icons/close.svg';

const PlansTable = ({plans}) => {
  const getBenefitKey = benefit => {
    return Object.keys(benefit);
  };

  const getBenefitVip = key => {
    const benefits = plans[1].benefits;

    let returnValue = false;

    benefits.forEach(benefit => {
      if (getBenefitKey(benefit)[0] === key) {
        returnValue = benefit[key].value;
      }
    });

    return returnValue;
  };

  return (
    <TableArea>
      <TitlesArea>
        {plans.map(plan => (
          <Title key={plan.id}>{plan.title}</Title>
        ))}
      </TitlesArea>
      <BenefitsArea>
        {plans[0]?.benefits.map((benefit, key) => (
          <BenefitArea key={key}>
            <Benefit>{benefit[getBenefitKey(benefit)].label}</Benefit>
            <ContainBenefits>
              {benefit[getBenefitKey(benefit)].value ? (
                <ContainArea>
                  <TickIcon width={18} height={18} color="#00F060" />
                </ContainArea>
              ) : (
                <ContainArea>
                  <CloseIcon width={18} height={18} color="#868686" />
                </ContainArea>
              )}
              <VerticalLine />
              {getBenefitVip(getBenefitKey(benefit)[0]) ? (
                <ContainArea>
                  <TickIcon width={18} height={18} color="#00F060" />
                </ContainArea>
              ) : (
                <ContainArea>
                  <CloseIcon width={18} height={18} color="#868686" />
                </ContainArea>
              )}
            </ContainBenefits>
          </BenefitArea>
        ))}
      </BenefitsArea>
    </TableArea>
  );
};

export default PlansTable;
