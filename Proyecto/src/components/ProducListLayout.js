import React from 'react';
import 'react-native-gesture-handler';
import {Text, StyleSheet, ImageBackground} from 'react-native';

function ProductListLayout(props) {
  return (
    <>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default ProductListLayout;
