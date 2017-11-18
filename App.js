import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import DeckList from './components/DeckList'
import DeckAdd from './components/DeckAdd'
import DeckDetailWithNavigation from './components/DeckDetailWithNavigation'
import {TabNavigator} from 'react-navigation'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {white, purple} from './utils/colors'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {action_decks_load_all} from './actions'


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.store = createStore(
                  reducer,
                  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                )
    console.log(this.store.getState())
  }   


  render() {
    return (
      <Provider store={this.store}>
        <View style={styles.container} >
          <Tabs/>
        </View>
      </Provider>
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