import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from '../screens/container/Login';
import Home from '../screens/container/Home';
import Details from '../screens/container/Details';
import Profile from '../screens/container/Profile';

export default function ButtonTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='Login' screenOptions={{
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 23,
            },
            style: {
                backgroundColor: '#eaeaea',
            },
        }}>
            <Tab.Screen name='Logout' component={Login} options={{
                headerShown: false,
                tabBarLabel: 'Login',
                tabBarIcon: (color, size) => (
                    <Icon name="home" size={23} color='red' />
                ),
            }} />
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Details' component={Details} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    screen: {
        color: 'red'
    }
});
