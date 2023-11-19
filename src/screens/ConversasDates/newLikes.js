import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {NewLikesArea, NewLikesTitle} from './styled';

import {NewLikesList} from '../../components';

import socket from '../../utils/socket';

const NewLikes = () => {
  const user = useSelector(state => state.user);

  const [newLikes, setNewLikes] = useState([]);

  useEffect(() => {
    socket.emit('sync-liked-me', user.id);

    const timer = setInterval(() => {
      socket.emit('sync-liked-me', user.id);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on('sync-liked-me', likes => {
      setNewLikes(likes);
    });

    return () => {
      socket.off('sync-liked-me');
    };
  }, []);

  return (
    <NewLikesArea>
      <NewLikesTitle>
        {newLikes.length} {newLikes.length === 1 ? 'Novo Like' : 'Novos Likes'}
      </NewLikesTitle>
      <NewLikesList newLikes={newLikes} />
    </NewLikesArea>
  );
};

export default NewLikes;
