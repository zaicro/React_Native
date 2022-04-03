import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator } from '@react-navigation/compat';
import Loading from './src/sections/components/loading';
import Login from './src/screens/container/Login';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import friendsReducer from './src/reducers/FriendsReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(friendsReducer);
function App(props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <NavigationContainer>
          <SwitchNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
const SwitchNavigator = createSwitchNavigator(
  {
    Loading: { screen: Loading },
    DrawerNavigation: DrawerNavigation,
    Login: Login,
  },
  {
    initialRouteName: 'Login',
  },
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})


export default App;
