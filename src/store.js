import {createStore} from 'redux';
import Reducers from './redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'auth',
    'otherInformation',
    'preferences',
    'user',
    'establishment',
  ],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export {store, persistor};
