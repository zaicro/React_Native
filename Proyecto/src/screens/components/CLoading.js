import React from 'react'
import { View, StyleSheet } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import {ROOT} from '../../constants/styles'

export default function CLoading() {
    return (
        <View>
            <Spinner
                visible={true}
                textContent={'Cargando...'}
                textStyle={styles.spinnerTextStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: ROOT.dn_blanco,
    },
});