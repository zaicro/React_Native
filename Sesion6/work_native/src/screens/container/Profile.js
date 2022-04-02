import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <Text>Profile</Text>
            <Button title='Go back' onPress={() => navigation.goBack() } />

            <Text>Update</Text>
            <Button title='Update' onPress={() => navigation.setOptions({title: 'Update'}) } />
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