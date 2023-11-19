import React from 'react';

import {
  MessageArea,
  MessageAvatarArea,
  MessageAvatar,
  MessageTextArea,
  MessageText,
} from './styled';

const Message = ({message, isMine, matchAvatar}) => {
  return (
    <MessageArea isMine={isMine}>
      {!isMine && (
        <MessageAvatarArea>
          <MessageAvatar source={{uri: matchAvatar}} />
        </MessageAvatarArea>
      )}
      <MessageTextArea isMine={isMine}>
        <MessageText
          isMine={isMine}
          selectable={true}
          selectionColor={isMine ? '#f1f1f1' : '#FF3F6D'}>
          {message}
        </MessageText>
      </MessageTextArea>
    </MessageArea>
  );
};

export default Message;
