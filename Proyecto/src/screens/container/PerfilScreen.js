import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { ROOT } from '../../constants/styles'
import axios from 'axios';
import { Card } from 'react-native-elements'
import { FlatList, Image, Platform, StyleSheet, Text, View, } from 'react-native'
import CPerfilInfo from '../components/CPerfilInfo'
import CLoading from '../components/CLoading'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PerfilScreen() {
  const [loading, setLoading] = useState();
  const [info, setInfo] = useState({
    "id": 0,
    "document_user": null,
    "SmallName": null,
    "birth_date": null,
    "birth_country": null,
    "resident_country": null,
    "resident_city": null,
    "telephone": null,
    "address": null,
    "gender": null,
    "personal_email": null,
    "business_email": null,
    "number_children": null,
    "civil_status": null,
    "blood_type": null,
    "name_chief": null,
    "position": null,
    "date_admission": null,
    "contract_type": null,
    "name_office": null,
    "photo": null
  });
  const [eMails, setEMails] = useState();
  const [telephones, setTelephones] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const user_id = await AsyncStorage.getItem('@user_id');
      const jwt = await AsyncStorage.getItem('@jwt');
      await axios
        .get(`https://erp.dichter-neira.com/Api/ReactNative/v1/User/${user_id}`,
          {
            headers: {
              'Authorization': `Bearer ${jwt}`
            }
          })
        .then((response) => {
          let json = response.data
          if (json.code === '000') {
            setInfo(json.result);
            setEMails([
              { email: json.result.personal_email, name: 'Personal' },
              { email: json.result.business_email, name: 'Oficina' }
            ]);
            setTelephones([
              { number: json.result.telephone, name: 'Personal' }
            ]);
          }
          else
            console.error(json.error)
        });
      setLoading(false);
    };
    fetchData()
      .catch(console.error);;
  }, []);


  renderHeader = () => {
    return (
      <View>
        {loading ? (
          <CLoading />
        ) : (
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri: `data:image/png;base64,${info.photo}`
              }}
            />
            <Text style={styles.userNameText}>{info.SmallName}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <FontAwesomeIcon icon={faBuilding} size={20} color={ROOT.dn_azul} />
              </View>
              <View>
                <Text style={styles.userCityText}>
                  {info.position}
                </Text>
              </View>
            </View>
            <View style={styles.userAddressRow}>
              <View>
                <FontAwesomeIcon icon={faLocationDot} size={20} color={ROOT.dn_success} />
              </View>
              <View>
                <Text style={styles.userCityText}>
                  {`${info.resident_city}, ${info.resident_country}`}
                </Text>
              </View>
            </View >
          </View >
        )}
      </View >
    );
  };
  renderTel = () => (
    <FlatList data={telephones}
      renderItem={(list) => {
        const { name, number } = list.item
        return (
          <CPerfilInfo fontAwesomeIcon={faPhone} descripcion={name} informacion={number} />
        )
      }}
    />
  );
  renderEmail = () => (

    <FlatList data={eMails}
      renderItem={(list) => {
        const { name, email } = list.item
        return (
          <CPerfilInfo fontAwesomeIcon={faEnvelope} descripcion={name} informacion={email} />
        )
      }}
    />
  );

  return (
    <Card containerStyle={{ borderRadius: ROOT.border_radius }} style={styles.container}>
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
    backgroundColor: '#E4F4Fd',
    borderRadius: ROOT.border_radius,
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
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  userCityText: {
    color: '#4E4E4E',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
  userImage: {
    marginTop: 10,
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
    margin: 10
  },
})