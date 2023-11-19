import React, {useState, useRef, useEffect} from 'react';
import {KeyboardAvoidingView, Platform, Alert} from 'react-native';
import uuid from 'react-native-uuid';
import {useSelector} from 'react-redux';

import {PageArea} from '../../components';
import {
  HeaderArea,
  LeftHeaderArea,
  RightHeaderArea,
  RightTopHeaderArea,
  RightBottomHeaderArea,
  RankingAndLogoArea,
  RankingArea,
  RankingTitle,
  RankingNumberAndStarArea,
  RankingNumber,
  RateMatchButtonArea,
  RateMatchButton,
  RateMatchButtonText,
  BackButton,
  NameAndAvatarArea,
  Avatar,
  Name,
  ChatArea,
  KeyboardEntryArea,
  InputKeyboardArea,
  InputKeyboard,
  SendButton,
  RateArea,
  CloseRateAreaButton,
  Chat,
} from './styled';

import Message from './message';
import Rate from './rate';

import ArrowCircleLeftIcon from '../../assets/icons/arrow-circle-left.svg';
import StarIcon from '../../assets/icons/star.svg';
import ChevronRightIcon from '../../assets/icons/chevron-right.svg';

import socket from '../../utils/socket';
import MatchRankService from '../../services/MatchRankService';

const Page = ({navigation, route}) => {
  const scrollViewRef = useRef(null);

  const user = useSelector(state => state.user);

  const {
    id: chatId,
    userMatchId,
    matchName,
    matchAvatar,
    profileRank,
  } = route.params;
  let {matchRank: matchRankParam} = route.params;

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [showRateArea, setShowRateArea] = useState(false);
  const [rate, setRate] = useState(null);
  const [matchRank, setMatchRank] = useState(matchRankParam);

  const handleClickSend = () => {
    const trimmedMessage = message.trim();

    if (trimmedMessage.length > 0) {
      setMessages(prevMessages => [
        ...prevMessages,
        {id: uuid.v4(), message: trimmedMessage, isMine: true},
      ]);
      setMessage('');

      socket.emit('send-message', {
        chatRoomId: chatId,
        userId: user.id,
        message: trimmedMessage,
      });
    }
  };

  const matchRanking = async starRate => {
    try {
      const response = await MatchRankService.rank({
        id: userMatchId,
        rank: starRate,
      });

      setMatchRank(Number(response.average).toFixed(1));
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }
  };

  const handleRateAreaButton = starRate => {
    setRate(starRate);
    setShowRateArea(false);
    matchRanking(starRate);
  };

  const filterMessages = messagesSynced => {
    const messagesFiltered = messagesSynced.map(messageObject => {
      const isMine = messageObject.user.id === user.id;

      return {
        id: messageObject.id,
        message: messageObject.message,
        isMine,
      };
    });

    setMessages(messagesFiltered);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({animated: true});
    }, 200);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    socket.emit('sync-chat-room', chatId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on('sync-chat-room', chatMessages => {
      filterMessages(chatMessages);
    });

    return () => {
      socket.off('sync-chat-room');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateMessages = messageObject => {
    const isMine = messageObject.userId === user.id;

    const newMessage = {
      id: messageObject.id,
      message: messageObject.message,
      isMine,
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  useEffect(() => {
    socket.on('new-message', messageObject => {
      if (messageObject.chatRoomId === chatId) {
        updateMessages(messageObject);
      }
    });

    return () => {
      socket.off('new-message');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <PageArea statusBarTranslucent={false} barStyle="light-content">
        <HeaderArea>
          <LeftHeaderArea>
            <BackButton onPress={() => navigation.goBack()}>
              <ArrowCircleLeftIcon width={27} height={27} color="#FF3F6D" />
            </BackButton>
          </LeftHeaderArea>
          <RightHeaderArea>
            <RightTopHeaderArea>
              <NameAndAvatarArea>
                <Avatar source={{uri: matchAvatar}} />
                <Name numberOfLines={1}>{matchName}</Name>
              </NameAndAvatarArea>
            </RightTopHeaderArea>
            <RightBottomHeaderArea>
              <RankingAndLogoArea>
                <RankingArea>
                  <RankingTitle>Perfil</RankingTitle>
                  <RankingNumberAndStarArea>
                    <RankingNumber>{profileRank}</RankingNumber>
                    <StarIcon width={12} height={12} color={'#FFF505'} />
                  </RankingNumberAndStarArea>
                </RankingArea>
                <RankingArea>
                  <RankingTitle>Match</RankingTitle>
                  <RankingNumberAndStarArea>
                    <RankingNumber>{matchRank}</RankingNumber>
                    <StarIcon width={12} height={12} color={'#FFF505'} />
                  </RankingNumberAndStarArea>
                </RankingArea>
              </RankingAndLogoArea>
              <RateMatchButtonArea>
                <RateMatchButton onPress={() => setShowRateArea(true)}>
                  <StarIcon width={14} height={14} color={'#fff'} />
                  <RateMatchButtonText>Avalia match</RateMatchButtonText>
                </RateMatchButton>
              </RateMatchButtonArea>
            </RightBottomHeaderArea>
          </RightHeaderArea>
        </HeaderArea>
        <ChatArea>
          {messages.length > 0 && (
            <Chat
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}
              // eslint-disable-next-line react-native/no-inline-styles
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'flex-end',
              }}
              data={messages}
              renderItem={({item}) => (
                <Message
                  message={item.message}
                  isMine={item.isMine}
                  matchAvatar={matchAvatar}
                />
              )}
              keyExtractor={item => item.id}
            />
          )}
        </ChatArea>
        <KeyboardEntryArea>
          <InputKeyboardArea>
            <InputKeyboard
              placeholder="Somente escrita"
              value={message}
              onChangeText={setMessage}
              placeholderTextColor="#767676"
              maxLength={255}
            />
          </InputKeyboardArea>
          <SendButton onPress={handleClickSend}>
            <ChevronRightIcon width={24} height={24} color="#000000" />
          </SendButton>
        </KeyboardEntryArea>
      </PageArea>
      {/* //TODO: Sync rate with backend */}
      {showRateArea && (
        <RateArea>
          <Rate name={matchName} rate={rate} handler={handleRateAreaButton} />
          <CloseRateAreaButton onPress={() => setShowRateArea(false)} />
        </RateArea>
      )}
    </KeyboardAvoidingView>
  );
};

export default Page;
