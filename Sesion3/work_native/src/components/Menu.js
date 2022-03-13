import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function Menu() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>Alpha</Text>
                <Text style={styles.text}>Bravo</Text>
                <Text style={styles.text}>Charli</Text>
                <Text style={styles.text}>Delta</Text>
                <Text style={styles.text}>Echo</Text>
                <Text style={styles.text}>Foxtrot</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#6804CD',
        width: '100%',
        height: 30
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})
