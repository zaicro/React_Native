import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import NavigationTab from './NavigationTab';
import PerfilScreen from '../screens/container/PerfilScreen';
import ConfiguracionScreen from '../screens/container/ConfiguracionScreen';
import { ROOT, MAIN } from '../constants/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faClipboardUser, faGear, faArrowRightArrowLeft, faNavicon } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native';
import Store from '../store/store';

const Drawer = createDrawerNavigator();

function Logout(props) {
  const navigation = useNavigation();
  const handleClose = () => {
    Store.remove({
      key: 'userLogin',
    });
    navigation.navigate('Login');
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Cerrar Sesión" 
        onPress={handleClose} /*icon={<FontAwesomeIcon icon={faArrowRightArrowLeft} />}*/ />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: ROOT.dn_azul,
          height: 50
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <FontAwesomeIcon icon={faNavicon} size={20} color={ROOT.dn_blanco}/>
          </TouchableOpacity>
        )
      })}
      drawerContent={(props) => <Logout {...props} />}>
      <Drawer.Screen
        name="Home"
        component={NavigationTab}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faHome} />,
          headerTitle: () => <Text style={styles.headerTitle}>Inicio</Text>
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faClipboardUser} />,
          headerTitle: () => <Text style={styles.headerTitle}>Perfil</Text>
        }}
      />
      <Drawer.Screen
        name="Configuracion"
        component={ConfiguracionScreen}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faGear} />,
          headerTitle: () => <Text style={styles.headerTitle}>Detalle</Text>
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: ROOT.dn_blanco,
    fontSize: 18,
    fontWeight: '500',
  }
})