import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import DeckList from './components/DeckList'
import DeckAdd from './components/DeckAdd'
import DeckDetailWithNavigation from './components/DeckDetailWithNavigation'
import {TabNavigator} from 'react-navigation'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {white, purple} from './utils/colors'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <DeckDetailWithNavigation/>
      </View>
    );
  }
}

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions:{
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      
    }
  },

  DeckAdd:{
    screen: DeckAdd,
    navigationOptions:{
      tabBarLabel: 'ADD DECK',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
},{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
