import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'


class Quizz extends Component{
    constructor(props){
        super(props)
        this.state = {
            isQuestion: true, //question or answer to print on screen
            currentQuestion: 1,
            correctAnswers: 0,
        }
    }
 
    componentDidMount(){

    }

    render(){
        return(
            <View>
                <Text>Starting {this.props.navigation.state.params.title} quizz</Text>
            </View>
        )
    }
}

export default Quizz