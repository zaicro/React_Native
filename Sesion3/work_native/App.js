import React from 'react';
import { SafeAreaView, View, Dimensions, StyleSheet } from 'react-native';
import StyleSheetPreview from './src/components/StylesheetPreview.js'
import Sesion02_Ejemplo02 from './src/components/Sesion02_Ejemplo02.js'
import Menu from './src/components/Menu.js'
import Sesion03_Ejemplo01 from './src/components/Sesion03_Ejemplo01.js'
import Reto1 from './src/components/Reto1.js'
import Reto2 from './src/components/Reto2.js'

const window = Dimensions.get('window');
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/*<StyleSheetPreview />*/}
        {/*<Sesion02_Ejemplo02 />*/}
        {/*<Menu />*/}
        {/*<Sesion03_Ejemplo01 />*/}
        {/*<Reto1 />*/}
        <Reto2 />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    height: window.height,
    width: window.width
  }
})


export default App;
