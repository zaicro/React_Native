import React, { useState, Fragment } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion'; //https://yarnpkg.com/package/react-native-collapsible
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ROOT } from '../../constants/styles'



export default function VacacionesScreen() {
  const [vacaciones, setVacaciones] = useState([{
    dias_disponibles: 9,
    dias_solicitados: 6,
    dias_aprobados: 4,
    dias_disfrutados: 2
  }]);
  const [activeSections, setActiveSections] = useState([]);
  setSections = (sections) => {
    let section = sections.includes(undefined) ? [] : sections
    setActiveSections(section)
  };
  renderHeader = (section, _, isActive) => {
    return (
      <Text style={styles.headerText}>Vacaciones disponibles: {vacaciones.dias_disponibles}</Text>
    );
  };
  renderContent = (section, _, isActive) => {
    return (
      <Fragment>
        <View style={styles.accVacaciones}>
          <FontAwesomeIcon icon={faCircle} style={{ color: ROOT.dn_warning }} />
          <Text style={{ marginLeft: 20 }}>Días solicitados: {vacaciones.dias_solicitados}</Text>
        </View>
        <View style={styles.accVacaciones}>
          <FontAwesomeIcon icon={faCircle} style={{ color: ROOT.dn_primary_light }} />
          <Text style={{ marginLeft: 20 }}>Días aprobados: {vacaciones.dias_aprobados}</Text>
        </View>
        <View style={styles.accVacaciones}>
          <FontAwesomeIcon icon={faCircle} style={{ color: ROOT.dn_success_light }} />
          <Text style={{ marginLeft: 20 }}>Días disfrutados: {vacaciones.dias_disfrutados}</Text>
        </View>
      </Fragment>
    );
  }

  return (
    <View style={styles.container}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:15,
    padding:10,
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
  }
});