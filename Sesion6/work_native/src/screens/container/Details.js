import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Details() {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <Text>Details</Text>
            <Button title='Go to Details... again' onPress={() => navigation.navigate('Home', { email: null }) } />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})