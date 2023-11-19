import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {
  NewMatchesArea,
  NewMatchTitle,
  NewPeopleHorizontalList,
  NewLikesItem,
  NewLikesItemBackground,
  NewLikesItemAvatar,
  NewLikesItemText,
  NewMatchItem,
  NewMatchItemBackground,
  NewMatchItemAvatar,
  NewMatchItemText,
  ChatArea,
  ChatItem,
  ChatItemAvatarArea,
  ChatItemAvatar,
  ChatItemTextArea,
  ChatItemTitle,
  ChatItemSubtitleArea,
  ChatItemSubtitle,
  NotificationIcon,
  NotificationText,
} from './styled';

import EyeIcon from '../../assets/icons/eye.svg';
import UndoIcon from '../../assets/icons/undo.svg';

import socket from '../../utils/socket';

const Chats = ({setShowNewLikes, navigation}) => {
  const user = useSelector(state => state.user);

  const [newMatches, setNewMatches] = useState([]);
  const [incomingMessages, setIncomingMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const [numberOfLikedMe, setNumberOfLikedMe] = useState(0);

  const handleChatClick = ({
    id,
    userMatchId,
    matchName,
    matchAvatar,
    profileRank,
    matchRank,
  }) => {
    navigation.navigate('Chat', {
      id,
      userMatchId,
      matchName,
      matchAvatar,
      profileRank,
      matchRank,
    });
  };

  const filterMatchUser = chatRoom => {
    const userOne = chatRoom.matches[0].userOne;
    const userTwo = chatRoom.matches[0].userTwo;

    const matchUser = userOne.id === user.id ? userTwo : userOne;

    return matchUser;
  };

  const filterAndSetNewMatches = newMatchesSynced => {
    const newMatchesFiltered = newMatchesSynced.map(chatRoom => {
      const matchUser = filterMatchUser(chatRoom);

      return {
        id: chatRoom.id,
        userMatchId: matchUser.id,
        avatar: matchUser.photos[0].photoUrl,
        name: matchUser.name,
        profileRank: matchUser.profileRank,
        matchRank: matchUser.matchRank,
      };
    });

    setNewMatches(newMatchesFiltered);
  };

  const filterAndSetIncomingMessages = incomingMessagesSynced => {
    const incomingMessagesFiltered = incomingMessagesSynced.map(chatRoom => {
      const matchUser = filterMatchUser(chatRoom);

      return {
        id: chatRoom.id,
        userMatchId: matchUser.id,
        avatar: matchUser.photos[0].photoUrl,
        name: matchUser.name,
        message: chatRoom.chatMessages[0].message,
        profileRank: matchUser.profileRank,
        matchRank: matchUser.matchRank,
      };
    });

    setIncomingMessages(incomingMessagesFiltered);
  };

  const filterAndSetSentMessages = sentMessagesSynced => {
    const sentMessagesFiltered = sentMessagesSynced.map(chatRoom => {
      const matchUser = filterMatchUser(chatRoom);

      return {
        id: chatRoom.id,
        userMatchId: matchUser.id,
        avatar: matchUser.photos[0].photoUrl,
        name: matchUser.name,
        message: chatRoom.chatMessages[0].message,
        profileRank: matchUser.profileRank,
        matchRank: matchUser.matchRank,
      };
    });

    setSentMessages(sentMessagesFiltered);
  };

  const handlePressOnNewLikeItem = () => {
    if (numberOfLikedMe > 0) {
      setShowNewLikes(true);
    }
  };

  useEffect(() => {
    socket.emit('sync-matches', user.id);

    if (user?.usersPlans?.plan === 'VIP') {
      socket.emit('sync-liked-me-quantity', user.id);
    }

    const timer = setInterval(() => {
      socket.emit('sync-matches', user.id);

      if (user?.usersPlans?.plan === 'VIP') {
        socket.emit('sync-liked-me-quantity', user.id);
      }
    }, 10000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on('sync-matches', matches => {
      const newMatchesSynced = matches.newMatches;
      const incomingMessagesSynced = matches.incomingMessages;
      const sentMessagesSynced = matches.sentMessages;

      filterAndSetNewMatches(newMatchesSynced);
      filterAndSetIncomingMessages(incomingMessagesSynced);
      filterAndSetSentMessages(sentMessagesSynced);
    });

    if (user?.usersPlans?.plan === 'VIP') {
      socket.on('sync-liked-me-quantity', quantity => {
        setNumberOfLikedMe(quantity);
      });
    }

    return () => {
      socket.off('sync-matches');
      socket.off('sync-liked-me-quantity');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {(newMatches.length > 0 ||
        (numberOfLikedMe > 0 && user?.usersPlans?.plan === 'VIP')) && (
        <NewMatchesArea>
          <NewMatchTitle>Novos matchs</NewMatchTitle>
          <NewPeopleHorizontalList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            overScrollMode="never">
            {user?.usersPlans?.plan === 'VIP' && (
              <NewLikesItem
                onPress={handlePressOnNewLikeItem}
                disabled={numberOfLikedMe === 0}>
                <NewLikesItemBackground>
                  <NewLikesItemAvatar
                    source={{uri: 'https://picsum.photos/200'}}
                  />
                  <EyeIcon width={20} height={20} color="#FD0440" />
                </NewLikesItemBackground>
                <NewLikesItemText>
                  {numberOfLikedMe}{' '}
                  {numberOfLikedMe === 1 ? 'Curtida' : 'Curtidas'}
                </NewLikesItemText>
              </NewLikesItem>
            )}
            {newMatches.map((newMatch, index) => (
              <NewMatchItem
                key={index}
                onPress={() =>
                  handleChatClick({
                    id: newMatch.id,
                    userMatchId: newMatch.userMatchId,
                    matchName: newMatch.name,
                    matchAvatar: newMatch.avatar,
                    profileRank: newMatch.profileRank,
                    matchRank: newMatch.matchRank,
                  })
                }>
                <NewMatchItemBackground>
                  <NewMatchItemAvatar source={{uri: newMatch.avatar}} />
                </NewMatchItemBackground>
                <NewMatchItemText numberOfLines={1}>
                  {newMatch.name}
                </NewMatchItemText>
              </NewMatchItem>
            ))}
          </NewPeopleHorizontalList>
        </NewMatchesArea>
      )}
      <ChatArea overScrollMode="never">
        {incomingMessages.map((incomingMessage, index) => (
          <ChatItem
            key={index}
            onPress={() =>
              handleChatClick({
                id: incomingMessage.id,
                userMatchId: incomingMessage.userMatchId,
                matchName: incomingMessage.name,
                matchAvatar: incomingMessage.avatar,
                profileRank: incomingMessage.profileRank,
                matchRank: incomingMessage.matchRank,
              })
            }
            isLastItem={
              sentMessages.length === 0 &&
              incomingMessage.id ===
                incomingMessages[incomingMessages.length - 1].id
            }>
            <ChatItemAvatarArea>
              <ChatItemAvatar source={{uri: incomingMessage.avatar}} />
            </ChatItemAvatarArea>
            <ChatItemTextArea>
              <ChatItemTitle>{incomingMessage.name}</ChatItemTitle>
              <ChatItemSubtitleArea>
                <ChatItemSubtitle numberOfLines={1}>
                  {incomingMessage.message}
                </ChatItemSubtitle>
              </ChatItemSubtitleArea>
            </ChatItemTextArea>
            {incomingMessage.numberOfUnreadMessages > 0 && (
              <NotificationIcon>
                <NotificationText>
                  {incomingMessage.numberOfUnreadMessages}
                </NotificationText>
              </NotificationIcon>
            )}
          </ChatItem>
        ))}
        {sentMessages.map((sentMessage, index) => (
          <ChatItem
            key={index}
            onPress={() =>
              handleChatClick({
                id: sentMessage.id,
                userMatchId: sentMessage.userMatchId,
                matchName: sentMessage.name,
                matchAvatar: sentMessage.avatar,
                profileRank: sentMessage.profileRank,
                matchRank: sentMessage.matchRank,
              })
            }
            isLastItem={
              sentMessage.id === sentMessages[sentMessages.length - 1].id
            }>
            <ChatItemAvatarArea>
              <ChatItemAvatar source={{uri: sentMessage.avatar}} />
            </ChatItemAvatarArea>
            <ChatItemTextArea>
              <ChatItemTitle>{sentMessage.name}</ChatItemTitle>
              <ChatItemSubtitleArea>
                <UndoIcon
                  width={14}
                  height={14}
                  color="#9B9B9B"
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{marginRight: 9}}
                />
                <ChatItemSubtitle numberOfLines={1}>
                  {sentMessage.message}
                </ChatItemSubtitle>
              </ChatItemSubtitleArea>
            </ChatItemTextArea>
          </ChatItem>
        ))}
      </ChatArea>
    </>
  );
};

export default Chats;
