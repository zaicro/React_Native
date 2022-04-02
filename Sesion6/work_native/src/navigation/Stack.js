import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/container/Login';
import Home from '../screens/container/Home';
import Details from '../screens/container/Details';
import Profile from '../screens/container/Profile';

export default function Stack() {
    let component = createNativeStackNavigator();
    return (
      <component.Navigator initialRouteName='Login'>
        <component.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <component.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <component.Screen name='Details' component={Details} options={{ headerShown: true }} />
        <component.Screen name='Profile' component={Profile} options={({ route }) => ({ title: route.params.email })} />
      </component.Navigator >
    );
}