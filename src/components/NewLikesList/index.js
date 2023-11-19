import React from 'react';

import {
  NewLikesList,
  NewLikesCardArea,
  NewLikesCard,
  NewLikesCardAvatar,
  NewLikesCardName,
  NewLikesCardActionsArea,
  RefuseLikeButton,
  AcceptLikeButton,
} from './styled';

import HeartIcon from '../../assets/icons/heart.svg';
import CloseIcon from '../../assets/icons/close.svg';

import MatchService from '../../services/MatchService';

const Component = ({newLikes = []}) => {
  const handlePressOnRefuseLikeButton = async id => {
    await MatchService.dislikeUser({
      id,
    });
  };

  const handlePressOnAcceptLikeButton = async id => {
    await MatchService.likeUser({
      id,
    });
  };

  return (
    <NewLikesList
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => null}
      numColumns={2}
      data={newLikes}
      renderItem={({item, index}) => (
        <NewLikesCardArea key={index}>
          <NewLikesCard isEven={index % 2 === 0}>
            <NewLikesCardAvatar source={{uri: item.avatar}} />
            <NewLikesCardName numberOfLines={1}>{item.name}</NewLikesCardName>
            <NewLikesCardActionsArea>
              <RefuseLikeButton
                onPress={() => handlePressOnRefuseLikeButton(item.id)}>
                <CloseIcon width={16} height={16} color="#fff" />
              </RefuseLikeButton>
              <AcceptLikeButton
                onPress={() => handlePressOnAcceptLikeButton(item.id)}>
                <HeartIcon width={21} height={21} color="#fff" fill="#fff" />
              </AcceptLikeButton>
            </NewLikesCardActionsArea>
          </NewLikesCard>
        </NewLikesCardArea>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Component;
