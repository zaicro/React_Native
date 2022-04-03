import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'; //https://github.com/hoaphantn7604/react-native-element-dropdown
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { ROOT, MAIN } from '../../constants/styles'
import CButton from '../components/CButton'
import { Formik, Field, yupToFormErrors } from 'formik'
import * as yup from 'yup'
import CInput from '../components/CInput'
import { render } from "react-dom";

const data = [
    { label: 'Certificado Laboral', value: '1' },
    { label: 'Certificado Salarial', value: '2' }
];

export default function CertificadosScreen() {

    const [tipoCertificado, setTipoCertificado] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const formikSchema = yup.object().shape({
        destinatario: yup
            .string()
            .required('Se requiere destinatario.'),
        tipo_certificado: yup
            .string()
            .required('Se requiere tipo de certificado.'),
    });
    function generarPdf(destinatario, tipo_certificado) {
        console.log(errors)

    }


    return (
        <View style={styles.container}>
            <Formik
                validationSchema={formikSchema}
                initialValues={{ destinatario: '', tipo_certificado: '' }}
                onSubmit={values => generarPdf(values.destinatario)}>
                {({ handleSubmit, isValid, errors }) => (
                    <>


                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Seleccionar opción' : '...'}
                            searchPlaceholder="Buscar..."
                            value={tipoCertificado}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setTipoCertificado(item.tipoCertificado);
                                setIsFocus(false);
                                console.log(errors)
                            }}
                            renderLeftIcon={() => (
                                <FontAwesomeIcon icon={faFilePdf} size={20} style={styles.icon} color={isFocus ? 'blue' : 'black'} />
                            )}
                            name="tipoCertificado"
                        />
                        {errors.tipoCertificado && <Text style={MAIN.errorText}>{errors.tipoCertificado}</Text>}


                        <Field
                            component={CInput}
                            name="destinatario"
                            placeholder="A quien se dirige el certificado"
                        />


                        <CButton text='Generar'
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        padding: 10,
        backgroundColor: ROOT.dn_blanco,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});