import React from 'react'
import { View, Image, StyleSheet, SafeAreaView } from 'react-native'

export default function Header() {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image source={require('../../../assets/imges/dnlogo18-icono-azul.png')} style={styles.logo}></Image>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    }
})