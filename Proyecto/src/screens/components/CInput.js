import React from 'react'
import { Text, TextInput } from 'react-native'
import { MAIN } from '../../constants/styles'

export default function CInput(props) {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        style={[
          MAIN.textInput,
          props.passedStyle,
          hasError && MAIN.errorInput
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        placeholderTextColor='#4e4e4e' 
        {...inputProps}
      />
      {hasError && <Text style={MAIN.errorText}>{errors[name]}</Text>}
    </>
  )
}
