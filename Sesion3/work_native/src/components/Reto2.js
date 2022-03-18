import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Reto2() {
    return (
        <View style={styles.container}>
            <View style={styles.topLeftContainer} />
            <View style={styles.longRectangle} />
            <NegativeBottomRightRadius right={0} top={windowHeight / 2 - 100} />
            <NegativeTopLeftRadius top={123} />
            <NegativeTopLeftRadius left={127} top={23} />
            <NegativeTopRightRadius top={23} right={0} />
            <View style={styles.halfScreen} />
            <Circles />
            <Squares top={windowHeight * 3 / 4 - 116} />
            <Squares top={windowHeight * 3 / 4 + 66} />
        </View>
    )
}

const NegativeBottomRightRadius = (props) => {
    return (
        <View>
            <View style={[styles.negativeBorderRadius, { ...props }]} />
            <View style={[styles.negativeBorderRadius, { backgroundColor: "#5171A5", borderBottomRightRadius: 50 }, { ...props }]} />
        </View>
    )
}

const NegativeTopLeftRadius = (props) => {
    return (
        <View>
            <View style={[styles.negativeBorderRadius, { ...props }]} />
            <View style={[styles.negativeBorderRadius, { backgroundColor: "#5171A5", borderTopLeftRadius: 50 }, { ...props }]} />
        </View>
    )
}

const NegativeTopRightRadius = (props) => {
    return (
        <View>
            <View style={[styles.negativeBorderRadius, { ...props }]} />
            <View style={[styles.negativeBorderRadius, { backgroundColor: "#5171A5", borderTopRightRadius: 50 }, { ...props }]} />
        </View>
    )
}

const Squares = (props) => {
    const colors = ["#cc4bc2", "#dd5e98", "#e16f7c", "#c1ae7c"];
    return <View style={[styles.squaresContainer, { left: windowWidth / 2 - 104, ...props }]}>
        {
            colors.map(color =>
                <View style={[styles.square, { backgroundColor: color }]} />
            )
        }
    </ View>
}

const Circles = () => {
    return <View style={{
        position: "absolute",
        top: windowHeight * 3 / 4 - 50,
        flexDirection: "row",
        width: 332,
        justifyContent: "space-between",
        marginLeft:35
    }}>
        <View style={[styles.circle, { borderTopEndRadius: 0, borderBottomEndRadius: 0 }]} />
        <View style={styles.circle} />
        <View style={[styles.circle, { borderTopStartRadius: 0, borderBottomStartRadius: 0 }]} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5171A5",
        width: "100%",
        height: "100%"
    },
    halfScreen: {
        backgroundColor: "#3F3047",
        width: "100%",
        height: windowHeight / 2,
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 50,
    },
    negativeBorderRadius: {
        width: 100,
        height: 100,
        backgroundColor: "#3F3047",
        position: "absolute",
    },
    topLeftContainer: {
        width: 127,
        height: 123,
        backgroundColor: "#3F3047",
        borderBottomRightRadius: 50,
        position: "absolute",
    },
    longRectangle: {
        backgroundColor: "#3F3047",
        position: "absolute",
        width: "100%",
        height: 23
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#5171A5",
    },
    square: {
        width: 50,
        height: 50,
        marginRight: 8
    },
    squaresContainer: {
        flexDirection: "row",
        position: "absolute",
    }
})