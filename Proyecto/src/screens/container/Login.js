import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';
import 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CInput from '../components/CInput'
import { ROOT, MAIN } from '../../constants/styles'
import axios from 'axios';
import Store from '../../store/store';

export default function Login() {
  const [loading, setLoading] = useState();
  const navigation = useNavigation();
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Por favor introduzca un correo electrónico válido.")
      .required('Se requiere correo.'),
    password: yup
      .string()
      .required('Contraseña es requerida.'),
  });

  async function login(emailUser, passwordUser) {
    setLoading(true);
    try {
      await axios
        .get(`https://erp.dichter-neira.com/Api/ReactNative/v1/Authenticate?userName=${emailUser}&password=${passwordUser}`)
        .then((response) => {
          let json = response.data;
          if (json.code === '000') {
            let result = json.result;
            if (result.is_authenticate) {
              Store.setItem(
                { key: "user_id", value: result.user_id },
                { key: "jwt", value: result.jwt }
              );
              navigation.navigate('DrawerNavigation');
            }
            else {
              Alert.alert(
                "Error",
                result.message,
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
            }
          }
          else
            console.error(json.error)
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={MAIN.container}>
      <Image
        source={require('../../../assets/dnlogo18-estandar-azul.png')}
        style={styles.logo}
      />
      <View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={values => login(values.email, values.password)}>
          {({ handleSubmit, isValid }) => (
            <>
              <Field
                component={CInput}
                name="email"
                placeholder="Email Address"
                passedStyle={{ width: 320 }}
                keyboardType="email-address"
              />
              <Field
                component={CInput}
                name="password"
                placeholder="Password"
                passedStyle={{ width: 320 }}
                secureTextEntry
              />
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={styles.button}>
                {loading ? (
                  <Spinner
                    visible={true}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                  />
                ) : (
                  <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
                )}
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo: {
    height: 200,
    resizeMode: 'contain',
    marginTop: -200,
    marginBottom: 10
  },
  spinnerTextStyle: {
    color: ROOT.dn_blanco,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: ROOT.dn_primary,
    borderRadius: ROOT.border_radius,
    marginTop: 5,
  },
  buttonLabel: {
    color: ROOT.dn_blanco,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
