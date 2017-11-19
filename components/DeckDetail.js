import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {StackNavigator} from 'react-navigation'
import CardAdd from './CardAdd'
import Quizz from './Quizz'

const AddCardBtn = ({ onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}>
          <Text>Add Card</Text>
      </TouchableOpacity>
    )
}

const StartQuizBtn = ({ onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}>
          <Text>Start Quizz</Text>
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
            <Text>Title: {navigation.state.params.title}</Text>
            <Text>Nb of Cards: {navigation.state.params.questions.length}</Text>
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

export default DeckDetail