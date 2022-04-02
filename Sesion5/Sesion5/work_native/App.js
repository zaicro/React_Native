import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack';
import Drawer from './src/navigation/Drawer';
import ButtonTab from './src/navigation/ButtonTab';

const App = () => {
  return (
    <NavigationContainer >
      <ButtonTab />
    </NavigationContainer>
  );
};

export default App;
