import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ROOT } from '../../constants/styles'

export default function CPerfilInfo(props) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.iconRow}>
          <FontAwesomeIcon icon={props.fontAwesomeIcon} size={20} color={ROOT.dn_azul} />
        </View>
        <View style={styles.infoRow}>
          <View >
            <Text style={styles.infoValorText}>{props.informacion}</Text>
          </View>
          <View >
            {props.descripcion.length !== 0 && (
              <Text style={styles.infoDescripcionText}>{props.descripcion}</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop:20
  },
  iconRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft:10,
    width:40
  },
  infoRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft:10
  },
  infoDescripcionText: {
    color: '#4E4E4E',
    fontSize: 12
  },
  infoValorText: {
    fontSize: 14
  }
})