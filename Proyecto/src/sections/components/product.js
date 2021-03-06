import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements' //https://reactnativeelements.com/docs/2.3.2/card
import {ROOT} from '../../constants/styles'

function Product(props) {
  return (
    <Card containerStyle={{borderRadius: ROOT.border_radius}}>
      <Card.Title>{props.product.nombre}</Card.Title>
      <Card.Divider />
      <View style={styles.user}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: props.product.imagen }}
        />
        <Text style={styles.name}>{props.product.descripcion}</Text>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  image:{
    minHeight:200,
    resizeMode: "contain",
    marginBottom:10
  }
});

export default Product;
