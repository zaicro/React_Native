import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { ROOT } from '../../constants/styles'
import axios from 'axios';
import Store from '../../store/store';
import { Card } from 'react-native-elements'
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Email from '../components/CEmail'
import Tel from '../components/CTel'




export default function PerfilScreen() {
  const [userId, setuserId] = useState(
    Store.getItem({ key: 'user_id' }) || ''
  );
  const [token, setToken] = useState(
    Store.getItem({ key: 'jwt' }) || ''
  );
  const [info, setInfo] = useState();
  const [eMails, setEMails] = useState();
  const [telephones, setTelephones] = useState();

  useEffect(() => {
    let _userId = '419';
    let _token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkZpbmFuemFzIiwiVXNlciI6IkZpbmFuemFzIiwibmJmIjoxNjI4Mzc1Njk1LCJleHAiOjE2NTk5MTE2OTUsImlhdCI6MTYyODM3NTY5NSwiaXNzIjoiaHR0cHM6Ly9lcnAuZGljaHRlci1uZWlyYS5jb20iLCJhdWQiOiJodHRwczovL2VycC5kaWNodGVyLW5laXJhLmNvbSJ9.HqJZRJT6KxgA4xKJzqZ25nDVS04KfsMR_zw0klvCfYk';

    const fetchData = async () => {
      await axios
        .get(`https://erp.dichter-neira.com/Api/ReactNative/v1/User/${_userId}`,
          {
            headers: {
              'Authorization': `Bearer ${_token}`
            }
          })
        .then((response) => {
          let json = response.data
          if (json.code === '000') {
            setInfo(json.result[0]);
            setEMails([
              { email: info.personal_email, name: 'Personal' },
              { email: info.business_email, name: 'Oficina' }
            ]);
            setTelephones([
              { number: info.telephone, name: 'Personal' }
            ]);
          }
          else
            console.error(json.error)
        });
    };
    fetchData()
      .catch(console.error);;
  }, []);


  renderHeader = (props) => {
    return (
      <View style={styles.headerContainer}>
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{ uri: 'https://e7.pngegg.com/pngimages/676/170/png-clipart-cartoon-business-man-cartoon-characters-illustration.png' }}
            />
            <Text style={styles.userNameText}>{info.SmallName}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <FontAwesomeIcon icon={faLocationDot} size={20} color='gray' />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  Bogotá, Colombia
                </Text>
              </View>
            </View>
          </View>
      </View>
    )
  }
  renderTel = () => (
    <FlatList
      data={telephones}
      renderItem={(list) => {
        const { name, number } = list.item
        return (
          <Tel
            name={name}
            number={number}
          />
        )
      }}
    />
  )
  renderEmail = () => (
    <FlatList
      data={eMails}
      renderItem={(list) => {
        const { name, email } = list.item
        return (
          <Email
            name={name}
            email={email}
          />
        )
      }}
    />
  );

  return (
    <Card style={styles.container}>
      {this.renderHeader()}
      {this.renderTel()}
      {this.renderEmail()}
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    padding: 10,
    backgroundColor: ROOT.dn_blanco
  },
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
})