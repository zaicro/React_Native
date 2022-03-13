import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Alert } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  const [txtNombre, setTxtNombre] = useState("Ingrese su nombre.");
  const [txtCorreo, setTxtCorreo] = useState("Ingrese su correo.");
  const MsgInformacion = () => {
    Alert.alert('La información del usuario es:', 'Nombre:' + txtNombre + ' \n Correo:' + txtCorreo)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Ingrese sus datos:</Text>
        <TextInput style={styles.input} Text={txtNombre} onChangeText={setTxtNombre} />
        <TextInput style={styles.input} Text={txtCorreo} onChangeText={setTxtCorreo} />
        <Button style={styles.button} title="Pulsar" onPress={MsgInformacion} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5
  },
  input: {
    backgroundColor: '#FFF',
    width: 200,
    height: 40,
    marginLeft: 10,
    marginBottom: 5
  }
});
