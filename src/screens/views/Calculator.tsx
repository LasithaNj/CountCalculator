import * as React from 'react'
import {View,StyleSheet} from 'react-native'
import CountButton from '../../components/buttons/CountButton'
import CountLabel from '../../components/labels/CountLabel'
import { useCalculatorViewModel } from '../../viewModels/useCalculatorViewModel'





function Calculator(){


    const {countNumber,DeductCount,IncreaseCount} = useCalculatorViewModel()

    return(

        <View style={styles.container}>

            <View style={styles.calcContainer}>

                <CountButton 
                    buttonTxt='-'  
                    style={styles.calcButtonStyle}
                    onPress={() => DeductCount()}
                />
                <CountLabel 
                    count={countNumber}
                />
                <CountButton 
                    buttonTxt='+' 
                    style={styles.calcButtonStyle}
                    onPress={() => IncreaseCount()}
                />
            </View>

        </View>




    )
}

export default Calculator

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    calcButtonStyle:{
        width:40,
        height:40,
        backgroundColor:'blue',
        alignSelf:'center'
    },
    calcContainer:{
        flexDirection:'row',
    }
})