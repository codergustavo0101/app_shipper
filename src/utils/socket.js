import {io} from 'socket.io-client';
import {urls} from '../services/api';

const namespace = '/match';

const socket = io.connect(
  __DEV__ ? urls.development + namespace : urls.production + namespace,
  {
    transports: ['websocket', 'polling'],
  },
);

socket.on('connect', () => {
  console.log('Connected to server');
});

export default socket;
