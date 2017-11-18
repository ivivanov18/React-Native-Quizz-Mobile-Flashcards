import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import {connect} from 'react-redux';
import {action_add_deck, action_decks_load_all} from '../actions'

const initialState = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
}


class DeckAdd extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            deckTitle: ""
        }
        //this.props.loadDecks(initialState)
    }

    submit = () => {
        this.props.addDeck(this.state.deckTitle)
        //this.props.dispatch(action_add_deck("Hello"))
        console.log(this.props)
    }

    render(){
        return(
            <View>
                <Text style={{fontSize: 28}}>What is the title of your new deck ?</Text>                
                <TextInput
                    style={style.input}
                    placeholder="Deck Title"
                    onChangeText={(text) => this.setState({deckTitle: text})}
                />
                <TouchableOpacity
                    style={style.submitText}
                    onPress={() => this.submit()}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addDeck: (data) => dispatch(action_add_deck(data)),
    loadDecks: (data) => dispatch(action_decks_load_all(data))
});

const mapStateToProps = (state) => ({
    decks: state
});

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    input: {
        width: 300,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        margin: 24,
    },
    submitButton: {
        backgroundColor: '#000',
        padding: 10,
        height: 44,
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(DeckAdd)