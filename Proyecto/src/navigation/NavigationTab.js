import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationHome from './NavigationHome';
import StrainsScreen from '../screens/components/strains/strains';
import VacacionesScreen from '../screens/container/VacacionesScreen';
import CertificadosScreen from '../screens/container/CertificadosScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faPersonWalkingLuggage, faFile, faDonate } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();
const TabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: 'blue',
        labelStyle: {
          fontSize: 23,
        },
        style: {
          backgroundColor: 'red',
          color: 'blue'
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={NavigationHome}
        options={{
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => {
            return <FontAwesomeIcon icon={faHome} size={20} style={{ color: color }} />
          }
        }}
      />
      <Tab.Screen
      name="Vacaciones"
        component={VacacionesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Vacaciones',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPersonWalkingLuggage} size={20} style={{ color: color }} />
          )
        }}
      />
      <Tab.Screen
        name="Certificados"
        component={CertificadosScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Certificados',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faFile} size={20} style={{ color: color }} />
          )
        }}
      />
      <Tab.Screen
        name="Desprendibles"
        component={StrainsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Desprendibles',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faDonate} size={20} style={{ color: color }} />
          )
        }}
      />
    </Tab.Navigator>
  );
};
export default TabLayout;
