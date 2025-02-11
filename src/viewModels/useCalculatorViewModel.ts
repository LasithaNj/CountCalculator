
import * as React from 'react'

export function useCalculatorViewModel(){

    
    const [countNumber,setCountNumber] = React.useState(0)

    function DeductCount(){


        const currentCount = countNumber

        if(currentCount !== 0){

            const deductNumber = currentCount - 1
    
            setCountNumber(deductNumber)

        }
    }

    function IncreaseCount(){
        const currentCount = countNumber
        const increaseNumber = currentCount + 1

        setCountNumber(increaseNumber)
    }


    return{
        countNumber,
        setCountNumber,
        DeductCount,
        IncreaseCount
    }
}