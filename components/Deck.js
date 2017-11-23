import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

class Deck extends PureComponent{
    _onPress = () => {
        this.props.onPressItem(this.props.id, this.props.questions);
    }

    render(){
        return(
            <TouchableOpacity onPress={this._onPress}>              
                <View id={this.props.title} style={styles.row}>
                        <Text style={{fontSize:32}}>{this.props.title}</Text>
                        <Text style={{fontSize:20}}>{this.props.questions.length} 
                                {this.props.questions.length <=1 ? " card": " cards"}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        flexDirection:'column',
    },
    row: {
        backgroundColor: 'steelblue', 
        justifyContent:'center',
        borderBottomWidth: 0.5,
        height: 150,
        alignItems:'center'
        
    },
})

export default Deck