import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function CEmail(props) {

  console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <FontAwesomeIcon icon={faEnvelope} size={20} color='gray' />
      </View>
      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>{props.email}</Text>
        </View>
        <View style={styles.emailNameColumn}>
          {props.name.length !== 0 && (
            <Text style={styles.emailNameText}>{props.name}</Text>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 3,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 14,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 50
  }
})