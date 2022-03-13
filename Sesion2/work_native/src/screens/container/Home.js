import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Header from '../../sections/components/Header.js'

const handleClose = () => {
    alert('Cerrando Sesión');
}

const Home = (Props) => {
    return (
        <View>
            <Header>
                <TouchableOpacity onPress={handleClose} styles={styles.button} >
                    <Text styles={styles.button}>Crerrar Sesión</Text>
                </TouchableOpacity>
            </Header>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E350A8',
        borderRadius: 5
    }
})

export default Home;