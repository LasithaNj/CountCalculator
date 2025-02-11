import * as React from 'react'
import {TouchableOpacity,StyleSheet, Text,TouchableOpacityProps} from 'react-native'

interface CountButtonProps extends TouchableOpacityProps{
    buttonTxt: string
}



function CountButton(props :CountButtonProps){


    return(
        <TouchableOpacity style={styles.container} {...props}>
            <Text style={styles.textStyle}>{props.buttonTxt}</Text>
        </TouchableOpacity>


    )
}

export default CountButton

const styles = StyleSheet.create({
    container:{
        flex:0.1

    },
    textStyle:{
        color:'white',textAlign:'center',fontSize:30
    }
})