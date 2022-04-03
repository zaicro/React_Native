import React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'

export default function ConfiguracionScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.preview}
        source={{
          uri: 'https://es.web.img2.acsta.net/c_310_420/pictures/22/02/14/15/04/5762364.jpg',
        }}
      />
      <Text style={styles.text}>
        Ámame
        Dirigida por Leonardo Brzezicki
        Con Leonardo Sbaraglia, Miranda de la Serna, Eva Llorach, Iván González, Alberto Ajaka
        Fecha de estreno 1 de abril de 2022
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.button_text}>Ver mas</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: 150,
    height: 180,
    paddingBottom: 80
  },
  text: {
    paddingTop: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
