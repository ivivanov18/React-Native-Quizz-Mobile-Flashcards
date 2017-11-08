import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

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
    title,
    nbCards,
    onPressAddCard,
    onPressStartQuiz
}) => {
    return(
        <View>
            <Text>{title}</Text>
            <Text>{nbCards}</Text>
            <AddCardBtn onPress={onPressAddCard}/>
            <StartQuizBtn onPress={onPressStartQuiz}/>
        </View> 
    )

}

export default DeckDetail