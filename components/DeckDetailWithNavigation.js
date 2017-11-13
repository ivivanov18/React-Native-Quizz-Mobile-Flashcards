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
    title,
    nbCards,
    onPressAddCard,
    onPressStartQuiz,
    navigation
}) => {
    return(
        <View>
            <Text>{title}</Text>
            <Text>{nbCards}</Text>
            <AddCardBtn onPress={() => navigation.navigate('CardAdd')}/>
            <StartQuizBtn onPress={() => navigation.navigate('Quizz')}/>
        </View> 
    )

}

const DeckDetailWithNavigation = ({}) => {
    return(
        <Stack/>
    )
}

const Stack = StackNavigator({
    DeckDetail:{
        screen: DeckDetail
    },
    CardAdd:{
        screen: CardAdd
    },
    Quizz:{
        screen: Quizz
    }
})

export default DeckDetailWithNavigation