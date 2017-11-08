import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const DeckList =({
    title,
    nbCards,
    onPress
}) => {
    return(
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity style={{flex:1, backgroundColor: 'steelblue', paddingTop:40, paddingBottom:40}}>
                    <Text style={{fontSize:20}}>{title}</Text>
                    <Text >{nbCards} cards</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DeckList