import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements' //https://reactnativeelements.com/docs/2.3.2/card

function Product(props) {
  return (
    <Card>
      <Card.Title>{props.product.title}</Card.Title>
      <Card.Divider />
      <View style={styles.user}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: props.product.image }}
        />
        <Text style={styles.name}>{props.product.details}</Text>
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
