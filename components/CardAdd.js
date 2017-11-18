import React, { Component } from 'react'
import {View, Text, TextInput} from 'react-native'

class CardAdd extends Component{

    constructor(props){
        super(props)

        this.state = {
            question: "",
            answer:""
        }
    }

    handleSubmit = () =>{
        
    }

    render(){
        return(
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Question"
                    //onChangeText={(text) => this.setState({deckTitle: text})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Answer"
                    //onChangeText={(text) => this.setState({deckTitle: text})}
                />
            </View>
        )
    }
}

export default CardAdd