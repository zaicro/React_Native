import React from 'react'
import { Pressable, Text } from 'react-native'
import { MAIN } from '../../constants/styles'

export default function CButton(props) {
    return (
        <Pressable
            style={MAIN.button.pressable}
            onPress={props.onPress}>
            <Text style={MAIN.button.text}>{props.text}</Text>
        </Pressable>
    )
}