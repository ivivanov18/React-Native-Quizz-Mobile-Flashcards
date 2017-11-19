import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {action_add_card_to_deck} from '../actions'

class CardAdd extends Component{

    constructor(props){
        super(props)

        this.state = {
            question: "",
            answer:""
        }
    }

    _handleSubmit = () =>{
        const questionData = {
            title:this.props.navigation.state.params.title,
            question: this.state.question,
            answer: this.state.answer
        }
        this.props.addCardToDeck(questionData)
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

const mapDispatchToProps = dispatch => ({
    addCardToDeck: (data) => dispatch(action_add_card_to_deck(data))
})

export default connect(null,mapDispatchToProps)(CardAdd)