import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const StyleSheetPreview = () => (
    <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        justifyContent: 'center',
        alignItems: 'center',
        height: window.height,
        width: window.width
    },
    title: {
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232A',
        borderRadius: 6,
        backgroundColor: '#61DAFB',
        color: '#20232A',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default StyleSheetPreview;