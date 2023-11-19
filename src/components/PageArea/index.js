import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {PageArea, PageAreaTabBar, ShadowArea} from './styled';

const Component = ({
  children,
  backgroundColor = '#fff',
  statusBarStyle = 'dark-content',
  statusBarColor = '#fff',
  statusBarTranslucent = false,
  isTabBar = false,
  ...rest
}) => {
  useEffect(() => {
    if (!isTabBar) {
      StatusBar.setBarStyle(statusBarStyle);
    } else {
      StatusBar.setBarStyle('light-content');
    }
  }, [statusBarStyle, isTabBar]);

  return (
    <>
      {!isTabBar ? (
        <PageArea backgroundColor={backgroundColor} {...rest}>
          <StatusBar
            barStyle={statusBarStyle}
            backgroundColor={
              statusBarTranslucent ? 'transparent' : statusBarColor
            }
            translucent={statusBarTranslucent}
          />
          {children}
        </PageArea>
      ) : (
        <PageAreaTabBar backgroundColor={backgroundColor} {...rest}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor="transparent"
            translucent={true}
          />
          {children}
          <ShadowArea />
        </PageAreaTabBar>
      )}
    </>
  );
};

export default Component;
