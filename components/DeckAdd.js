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
                <Text style={{fontSize: 44, marginTop: 120,marginBottom: 120, padding:10}}>What is the title of your new deck ?</Text>                
                <TextInput
                    style={styles.input}
                    placeholder="Deck Title"
                    onChangeText={(text) => this.setState({deckTitle: text})}
                />
                <TouchableOpacity
                    style={styles.SubmitBtn}
                    onPress={() => this.submit()}>
                    <Text style={styles.SubmitBtnText}>Submit</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
    },
    input: {
        height: 45,
        padding: 10,
        backgroundColor: '#fff',
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 7,
        marginBottom:30
    },
    SubmitBtnText: {
        fontSize: 22,
        textAlign: 'center'
    },
    SubmitBtn:{
        borderWidth:1,
        height:45,
        padding: 10,
        borderRadius: 7,
        marginLeft: 40,
        marginRight: 40,
    }
})



export default connect(mapStateToProps,mapDispatchToProps)(DeckAdd)