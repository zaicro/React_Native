import React, { useState, Fragment, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion'; //https://yarnpkg.com/package/react-native-collapsible
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ROOT } from '../../constants/styles'
import axios from 'axios';
import CLoading from '../components/CLoading'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-elements'
import CPerfilInfo from '../components/CPerfilInfo'
import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons'


export default function VacacionesScreen() {
  const [loading, setLoading] = useState();
  const [vacaciones, setVacaciones] = useState([{
    "id_user": 0,
    "pais_id": 0,
    "antiguedad_anios": 0.00,
    "festivos": true,
    "dias_permitidos": 0.00,
    "dias_pendientes": 0.00,
    "dias_aprobado": 0.00,
    "dias_rechazado": 0.00,
    "dias_por_aprobar": 0.00,
    "dias_programados": 0.00,
    "dias_tomados": 0.00,
    "anio": 0
  }]);
  const [aprobados, setAprobados] = useState([
    {
      "id_holiday": 0,
      "id_user": 0,
      "stard_date": '',
      "end_date": null,
      "number_of_day": 0,
      "status_request": 0,
      "date_of_entry": null,
      "id_boss": 0,
      "return_date": null,
      "planeacion": 0,
      "programacion": null,
      "response_date_boss": null
    }]);
  const [activeSections, setActiveSections] = useState([]);
  setSections = (sections) => {
    let section = sections.includes(undefined) ? [] : sections
    setActiveSections(section)
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const user_id = await AsyncStorage.getItem('@user_id');
      const jwt = await AsyncStorage.getItem('@jwt');
      const [firstResponse, secondResponse] = await Promise.all([
        axios.get(`https://erp.dichter-neira.com/Api/ReactNative/v1/Holidays/Abstract/${user_id}/${new Date().getFullYear()}`,
        {
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        }),
        axios.get(`https://erp.dichter-neira.com/Api/ReactNative/V1/Holidays/Approved/${user_id}/${new Date().getFullYear()}`,
        {
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        })
      ]);

      setVacaciones(firstResponse.data.result[0]);
      setAprobados(secondResponse.data.result[0]);
      setLoading(false);
    };
    fetchData()
      .catch(console.error);;
  }, []);


  renderHeader = (section, _, isActive) => {
    return (
      <Text style={styles.headerText}>Vacaciones disponibles: {vacaciones.dias_pendientes}</Text>
    );
  };
  renderContent = (section, _, isActive) => {
    return (
      <Fragment>
        <View style={styles.accVacaciones}>
          <FontAwesomeIcon icon={faCircle} style={{ color: ROOT.dn_warning }} />
          <Text style={{ marginLeft: 20 }}>Días solicitados: {vacaciones.dias_por_aprobar}</Text>
        </View>
        <View style={styles.accVacaciones}>
          <FontAwesomeIcon icon={faCircle} style={{ color: ROOT.dn_primary_light }} />
          <Text style={{ marginLeft: 20 }}>Días aprobados: {vacaciones.dias_aprobado}</Text>
        </View>
        <View style={styles.accVacaciones}>
          <FontAwesomeIcon icon={faCircle} style={{ color: ROOT.dn_success_light }} />
          <Text style={{ marginLeft: 20 }}>Días disfrutados: {vacaciones.dias_tomados}</Text>
        </View>
      </Fragment>
    );
  }
  renderInformacion = () => (
    <ScrollView contentContainerStyle={{ padding: 30, backgroundColor: '#fff' }}>
      <Accordion style={{}}
        activeSections={activeSections}
        sections={[{}]}
        touchableComponent={TouchableOpacity}
        expandMultiple={false}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
        duration={400}
        onChange={this.setSections}
        renderAsFlatList={false}
      />
    </ScrollView>
  );
  renderAprobadas = () => (
    <FlatList data={aprobados}
      renderItem={(list) => {
        const { stard_date, id_holiday } = list.item
        return (
          <CPerfilInfo fontAwesomeIcon={faCartFlatbedSuitcase} descripcion={stard_date} informacion={id_holiday} />
        )
      }}
    />
  );
  return (
    <Card containerStyle={{ borderRadius: ROOT.border_radius }} style={styles.container}>
      {loading ? (
        <CLoading />
      ) : (
        <>
          {this.renderInformacion()}
          {this.renderAprobadas()}
        </>
      )}
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    padding: 10,
    backgroundColor: ROOT.dn_blanco,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  accVacaciones: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap"
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