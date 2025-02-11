import * as React from 'react'
import {View,StyleSheet, Text,TextProps} from 'react-native'

interface CountLablelProps extends TextProps{
    count: number
}



function CountLabel(props :CountLablelProps){


    return(
        <View style={styles.container} {...props}>
            <Text style={styles.textStyle}>{props.count}</Text>
        </View>


    )
}


export default CountLabel

const styles = StyleSheet.create({
    container:{
        flex:0.1,
        alignSelf:'center'
    },
    textStyle:{
        textAlign:'center'
    }
})