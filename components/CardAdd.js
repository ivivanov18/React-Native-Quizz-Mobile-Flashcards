import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {action_add_card_to_deck} from '../actions'
import{addCardToDeck} from '../utils/api'

class CardAdd extends Component{

    constructor(props){
        super(props)

        this.state = {
            question:"",
            answer:""
        }
    }

    _handleSubmit = () =>{
        const questionData = {
            title:this.props.navigation.state.params.title,
            question: this.state.question,
            answer: this.state.answer
        }

        if(this.state.question === ""|| this.state.answer === ""){
            alert("All filled must be filled in")
            return
        }
        this.props.addCardToDeck(questionData)
        addCardToDeck(questionData.title,{question:questionData.question, answer:questionData.answer})

        this.props.navigation.goBack()
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:44, marginTop:20}}>Adding card to: {this.props.navigation.state.params.title}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Question"
                    onChangeText={(text) => this.setState({question: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Answer"
                    onChangeText={(text) => this.setState({answer: text})}
                />
                <TouchableOpacity
                    style={styles.SubmitBtn}
                    onPress={this._handleSubmit}>
                    <Text style={styles.SubmitBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addCardToDeck: (data) => dispatch(action_add_card_to_deck(data)),
})

const styles = StyleSheet.create({
    SubmitBtnText: {
        fontSize: 22,
        textAlign: 'center'
    },
    SubmitBtn:{
        borderWidth:1,
        height:45,
        padding: 10,
        borderRadius: 7,
        marginLeft: 40,
        marginRight: 40,
    },
    input: {
        marginTop:20,
        height: 45,
        padding: 10,
        backgroundColor: '#fff',
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 7,
        marginBottom:30
    },
})
export default connect(null,mapDispatchToProps)(CardAdd)