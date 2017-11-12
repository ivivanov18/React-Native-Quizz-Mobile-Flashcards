import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'

class DeckAdd extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            deckTitle: ""
        }
    }
    render(){
        return(
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Deck Title"
                    onChangeText={(text) => this.setState({deckTitle: text})}
                />
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DeckAdd