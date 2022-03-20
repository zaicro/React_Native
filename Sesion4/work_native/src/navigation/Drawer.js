import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/container/Login';
import Home from '../screens/container/Home';
import Details from '../screens/container/Details';
import Profile from '../screens/container/Profile';

export default function Drawer() {
    let component = createDrawerNavigator();
    return (
      <component.Navigator initialRouteName='Login'>
        <component.Screen name="Login" component={Login} />
        <component.Screen name="Home" component={Home} />
      </component.Navigator>
    );
}