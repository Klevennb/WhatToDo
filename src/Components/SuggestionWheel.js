import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
// import { connect } from 'react-redux'
import WheelOfFortune from 'react-native-wheel-of-fortune'
import { getList } from "../Services/Suggestions/suggestionService";

export const SuggestionWheel = () => {
    const [list, setList] = useState('')
    useEffect(() => {
        setList(getList('default'))
    }, [])
    const getSuggestionNames = (_list) => {
        const suggestionNames =[];
        _list.forEach(sug => {
            suggestionNames.push(sug.suggestion)
        });
    }
    const wheelOptions = {
        rewards: getSuggestionNames(list),
        knobSize: 50,
        borderWidth: 5,
        borderColor: '#000',
        innerRadius: 50,
        duration: 4000,
        backgroundColor: 'transparent',
        textAngle: 'horizontal',
        getWinner: (value, index) => {
            console.log({ winnerValue: value, winnerIndex: index });
        },
        onRef: ref => (console.log('ref:', ref)
        ),
    };
    return (
        <View>
         <WheelOfFortune wheelOptions={wheelOptions}/>   
        </View>
    )
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SuggestionWheel)
export default SuggestionWheel
