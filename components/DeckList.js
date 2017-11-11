import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native'

const DeckList =({
    title,
    nbCards,
    onPress
}) => {
    return(
        <View style={styles.container}> 
            <View style={styles.row}>
                <TouchableOpacity >
                        <Text style={{fontSize:20}}>{title}</Text>
                        <Text >{nbCards} cards</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        flexDirection:'column',
    },
    row: {
        flex: 1,
        backgroundColor: 'steelblue', 
        justifyContent:'center'
    },
})

export default DeckList