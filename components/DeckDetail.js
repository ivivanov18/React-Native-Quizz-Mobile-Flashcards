import React, { Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {StackNavigator} from 'react-navigation'
import CardAdd from './CardAdd'
import Quizz from './Quizz'
import {gray, white, black} from '../utils/colors'
import {getDeck} from '../utils/api'


const AddCardBtn = ({ onPress }) => {
    return (
      <TouchableOpacity
        style={styles.AddCardBtn}
        onPress={onPress}>
          <Text style={styles.AddCardBtnText}>Add Card</Text>
      </TouchableOpacity>
    )
}

const StartQuizBtn = ({ onPress }) => {
    return (
      <TouchableOpacity
        style={styles.StartQuizzBtn}
        onPress={onPress}>
          <Text style={styles.StartQuizzBtnText}>Start Quizz</Text>
      </TouchableOpacity>
    )
}

/**
 * 
 * @param {string} title - the name of the deck
 * @param {number} nbCards - the number of cards in the deck
 */
class DeckDetail extends Component {

    constructor(props){
        super(props)

        this.state = {
            questions: []
        }
        //TODO: Correct number of cards when card is added --> the updated number is not shown right after creation
    }


    componentDidMount(){
        getDeck(this.props.navigation.state.params.title).then(data => {
            console.log("data.questions:", data.questions)
            this.setState(() => ({questions: data.questions}))
            console.log("this.state.questions:", this.state.questions)
        })
    }

    render(){
        console.log("this.state.questions render:", this.state.questions)
        return(
            <View>
                <View style={styles.textStyling}>
                    <Text style={{fontSize:48, fontWeight: 'bold', marginTop:50}}>
                        {this.props.navigation.state.params.title}
                    </Text>
                    <Text style={{fontSize:30, paddingTop: 30, color:gray, marginBottom:100}}>
                        {this.state.questions.length} 
                        {this.state.questions.length <= 1 ? " card" : " cards"}
                    </Text>
                </View>
                <AddCardBtn 
                    onPress={() => this.props.navigation.navigate('CardAdd',
                                                    {title:this.props.navigation.state.params.title})}
                />
                <StartQuizBtn 
                    onPress={() => this.props.navigation.navigate('Quizz',
                                                    {title:this.props.navigation.state.params.title})}
                />
            </View> 
        )
    }

}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        flexDirection:'column',
    },
    textStyling: {
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 30
    },
    StartQuizzBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    StartQuizzBtn:{
        backgroundColor: black,
        height:45,
        padding: 10,
        borderRadius: 7,
        marginLeft: 40,
        marginRight: 40,
    },
    AddCardBtnText: {
        fontSize: 22,
        textAlign: 'center'
    },
    AddCardBtn:{
        borderWidth:1,
        height:45,
        padding: 10,
        borderRadius: 7,
        marginLeft: 40,
        marginRight: 40,
        marginBottom:30
    }

})

export default DeckDetail