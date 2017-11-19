import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {StackNavigator} from 'react-navigation'
import CardAdd from './CardAdd'
import Quizz from './Quizz'
import {gray, white, black} from '../utils/colors'

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
 * @param {function} onPressAddCard - the callback when the button Add card is pressed
 * @param {function} onPressStartQuiz - the callbak when the button start quiz is pressed
 */
const DeckDetail = ({
    onPressAddCard,
    onPressStartQuiz,
    navigation
}) => {
    return(
        <View>
            <View style={styles.textStyling}>
                <Text style={{fontSize:48, fontWeight: 'bold', marginTop:50}}>
                    {navigation.state.params.title}
                </Text>
                <Text style={{fontSize:30, paddingTop: 30, color:gray, marginBottom:100}}>
                    {navigation.state.params.questions.length} 
                    {navigation.state.params.questions.length <= 1 ? " card" : " cards"}
                </Text>
            </View>
            <AddCardBtn 
                onPress={() => navigation.navigate('CardAdd',
                                                {title:navigation.state.params.title})}
            />
            <StartQuizBtn 
                onPress={() => navigation.navigate('Quizz',
                                                {title:navigation.state.params.title})}
            />
        </View> 
    )

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