import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function CTel(props) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.iconRow}>
          <FontAwesomeIcon icon={faPhone} size={20} color='gray' />
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}>{props.number}</Text>
          </View>
          <View style={styles.telNameColumn}>
            {props.name.length !== 0 && (
              <Text style={styles.telNameText}>{props.name}</Text>
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
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 3,
  },  
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  }, 
  telRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  telNumberText: {
    fontSize: 14,
  },  
  iconRow: {
    flex: 2,
    justifyContent: 'center',
    marginLeft:50
  }  
})