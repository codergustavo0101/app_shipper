import React, {useState, useEffect, useCallback} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import {store, persistor} from './store';

import Navigator from './navigation/Navigator';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Poppins-Light': require('./fonts/Poppins/Poppins-Light.ttf'),
          'Poppins-Regular': require('./fonts/Poppins/Poppins-Regular.ttf'),
          'Poppins-Medium': require('./fonts/Poppins/Poppins-Medium.ttf'),
          'Poppins-SemiBold': require('./fonts/Poppins/Poppins-SemiBold.ttf'),
          'Poppins-Bold': require('./fonts/Poppins/Poppins-Bold.ttf'),
          'Poppins-ExtraBold': require('./fonts/Poppins/Poppins-ExtraBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigator onLayout={onLayoutRootView} />
      </PersistGate>
    </Provider>
  );
};

export default App;
