import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Strains() {
  return (
    <View style={styles.container}>
      <ImageBackground source={'https://upload.wikimedia.org/wikipedia/commons/1/1e/SITIO-EN-CONSTRUCCION.jpg'} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>En construcción</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});