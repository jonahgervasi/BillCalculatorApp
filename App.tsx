import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

import HomeScreen from './src/Screens/HomeScreen/HomeScreen';

function App(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeScreen />
    </NavigationContainer>
  );
}

export default App;
