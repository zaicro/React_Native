import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Home({ route }) {
    const navigation = useNavigation();
    const { email } = route?.params;
    return (
        <View style={styles.view}>
            <Text>Home</Text>
            <Text>Welcome {email}</Text>
            <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
            <Button title='Go to Profile' onPress={() => navigation.navigate('Profile', { email: 'Email Use: ' })} />
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