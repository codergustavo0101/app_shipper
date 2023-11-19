import React from 'react';

import {
  IndicationsAndComissionArea,
  IndicationsAndComissionItem,
  IndicationsAreaTitle,
  IndicationsAndComissionValueArea,
  IndicationsAndComissionValueAreaText,
  ShareLinkArea,
  ShareLinkAreaTitle,
  ShareLinkAreaActions,
  ShareLinkAreaActionButton,
  ShareLinkAreaActionButtonText,
  IndicatedsListArea,
  IndicatedsListTitle,
  IndicatedsListHeader,
  IndicatedsListHeaderIcon,
  IndicatedsListHeaders,
  IndicatedsListField,
  IndicatedsListFieldTitle,
  IndicatedsListFieldValue,
} from './styled';

import FollowingIcon from '../../../assets/icons/following.svg';
import BankIcon from '../../../assets/icons/bank.svg';
import CopyIcon from '../../../assets/icons/copy.svg';
import ShareIcon from '../../../assets/icons/share.svg';

const Indications = ({copyToClipboard, onShare, indications}) => {
  const sumCommissionsByUser = commissions => {
    const filteredCommissions = commissions.filter(
      commission => commission.status === 'PENDING',
    );

    if (filteredCommissions?.length > 0) {
      const result = filteredCommissions.reduce((accumulator, currentValue) => {
        return accumulator + parseFloat(currentValue.value);
      }, 0);

      return `R$${result.toFixed(2).replace('.', ',')}`;
    } else {
      return 'R$ 0,00';
    }
  };

  const sumAllCommissions = () => {
    const allCommissions = [];

    indications.map(indication => {
      if (indication.commission) {
        allCommissions.push(...indication.commission);
      }
    });

    const filteredCommissions = allCommissions.filter(
      commission => commission.status === 'PENDING',
    );

    if (filteredCommissions?.length > 0) {
      const result = filteredCommissions.reduce((accumulator, currentValue) => {
        return accumulator + parseFloat(currentValue.value);
      }, 0);

      return `R$${result.toFixed(2).replace('.', ',')}`;
    } else {
      return 'R$ 0,00';
    }
  };

  return (
    <>
      <IndicationsAndComissionArea>
        <IndicationsAndComissionItem>
          <IndicationsAreaTitle>N° de indicações</IndicationsAreaTitle>
          <IndicationsAndComissionValueArea>
            <FollowingIcon width={22} height={22} color="#fff" />
            <IndicationsAndComissionValueAreaText>
              N° {indications.length}
            </IndicationsAndComissionValueAreaText>
          </IndicationsAndComissionValueArea>
        </IndicationsAndComissionItem>
        <IndicationsAndComissionItem>
          <IndicationsAreaTitle>Comissão</IndicationsAreaTitle>
          <IndicationsAndComissionValueArea>
            <BankIcon width={22} height={22} color="#fff" />
            <IndicationsAndComissionValueAreaText>
              {sumAllCommissions()}
            </IndicationsAndComissionValueAreaText>
          </IndicationsAndComissionValueArea>
        </IndicationsAndComissionItem>
      </IndicationsAndComissionArea>
      <ShareLinkArea>
        <ShareLinkAreaTitle>
          Compartilhe seu link de indicação
        </ShareLinkAreaTitle>
        <ShareLinkAreaActions>
          <ShareLinkAreaActionButton onPress={copyToClipboard}>
            <CopyIcon width={22} height={22} color="#fff" />
            <ShareLinkAreaActionButtonText>
              Copiar link
            </ShareLinkAreaActionButtonText>
          </ShareLinkAreaActionButton>
          <ShareLinkAreaActionButton onPress={onShare}>
            <ShareIcon width={22} height={22} color="#fff" />
            <ShareLinkAreaActionButtonText>
              Compartilhar
            </ShareLinkAreaActionButtonText>
          </ShareLinkAreaActionButton>
        </ShareLinkAreaActions>
      </ShareLinkArea>
      {indications.length > 0 && (
        <IndicatedsListArea>
          <IndicatedsListTitle>Lista de indicados</IndicatedsListTitle>
          <IndicatedsListHeader>
            <IndicatedsListHeaderIcon>
              <FollowingIcon width={22} height={22} color="#FF3F6D" />
            </IndicatedsListHeaderIcon>
            <IndicatedsListHeaders>
              <IndicatedsListField width={83}>
                <IndicatedsListFieldTitle>Indicado</IndicatedsListFieldTitle>
                {indications.map(({user}) => (
                  <IndicatedsListFieldValue key={user.id} numberOfLines={1}>
                    {user.name}
                  </IndicatedsListFieldValue>
                ))}
              </IndicatedsListField>
              <IndicatedsListField width={44}>
                <IndicatedsListFieldTitle>Plano</IndicatedsListFieldTitle>
                {indications.map(({user}) => (
                  <IndicatedsListFieldValue key={user.id}>
                    {user?.usersPlans?.plan}
                  </IndicatedsListFieldValue>
                ))}
              </IndicatedsListField>
              <IndicatedsListField width={74}>
                <IndicatedsListFieldTitle>Comissão</IndicatedsListFieldTitle>
                {indications.map(({user, commission}) => (
                  <IndicatedsListFieldValue key={user.id}>
                    {sumCommissionsByUser(commission)}
                  </IndicatedsListFieldValue>
                ))}
              </IndicatedsListField>
              <IndicatedsListField width={49}>
                <IndicatedsListFieldTitle>Status</IndicatedsListFieldTitle>
                {indications.map(({user}) => (
                  <IndicatedsListFieldValue key={user.id}>
                    {user.status === 'blocked' ? 'Inativo' : 'Ativo'}
                  </IndicatedsListFieldValue>
                ))}
              </IndicatedsListField>
            </IndicatedsListHeaders>
          </IndicatedsListHeader>
        </IndicatedsListArea>
      )}
    </>
  );
};

export default Indications;
