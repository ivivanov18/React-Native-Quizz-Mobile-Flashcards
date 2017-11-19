import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

class CardAdd extends Component{

    constructor(props){
        super(props)

        this.state = {
            question: "",
            answer:""
        }
    }

    _handleSubmit = () =>{

    }

    render(){
        return(
            <View>
                <Text>Adding card to: {this.props.navigation.state.params.title}</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Question"
                    onChangeText={(text) => this.setState({question: text})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Answer"
                    onChangeText={(text) => this.setState({answer: text})}
                />
                <TouchableOpacity onPress={this._handleSubmit}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CardAdd