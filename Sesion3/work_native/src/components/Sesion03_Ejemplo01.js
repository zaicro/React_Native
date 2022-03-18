import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Sesion03_Ejemplo01() {
    return (
        <View style={styles.container}>
            <View style={[styles.square, { backgroundColor: '#CC4BC2' }]} />
            <View style={[styles.square, { backgroundColor: '#DD5E98' }]} />
            <View style={[styles.square, { backgroundColor: '#E16F7C' }]} />
            <View style={[styles.square, { backgroundColor: '#C1AE7C' }]} />
            <View style={[styles.square, { backgroundColor: '#A5FF7C' }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'space-between',
        width: '100%',
        height: '100%',
        padding: 15
    },
    square: {
        width: '100%',
        height: 100,
        marginBottom: 16
    }
})