import React from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';

export default function Loading(props) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/dnlogo18-rectangular-azul.png')} style={styles.logo} />
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});