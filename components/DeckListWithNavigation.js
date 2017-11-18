import React from 'react'
import {StackNavigator} from 'react-navigation'
import DeckList from './DeckList'
import DeckDetailWithNavigation from './DeckDetailWithNavigation'


const DeckListWithNavigation = ({}) => {
    return(
        <Stack/>
    )
}

const Stack = StackNavigator({
    DeckList:{
        screen: DeckList
    },
    DeckDetailWithNavigation:{
        screen: DeckDetailWithNavigation
    }
})

export default DeckListWithNavigation