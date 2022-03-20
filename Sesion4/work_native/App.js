import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack';
import Drawer from './src/navigation/Drawer';

const App = () => {
  return (
    <NavigationContainer >
      <Stack />
    </NavigationContainer>
  );
};

export default App;
