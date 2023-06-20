// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ScreenStack from './routes/ScreenStack/index';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
<ScreenStack/>
    </NavigationContainer>
  );
}

export default App;