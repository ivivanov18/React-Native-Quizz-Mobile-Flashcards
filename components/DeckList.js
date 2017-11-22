import React, { Component, PureComponent } from 'react'
import {View, Text, TouchableOpacity,StyleSheet, FlatList, Button} from 'react-native'
import {connect} from 'react-redux'
import {gray} from '../utils/colors'
import {getDeck, getDecks} from '../utils/api' 
import {action_decks_load_all} from '../actions'

class Deck extends PureComponent{
    _onPress = () => {
        this.props.onPressItem(this.props.id, this.props.questions);
    }

    render(){
        return(
            <TouchableOpacity onPress={this._onPress}>              
                <View id={this.props.title} style={styles.row}>
                        <Text style={{fontSize:32}}>{this.props.title}</Text>
                        <Text style={{fontSize:20}}>{this.props.questions.length} 
                                {this.props.questions.length <=1 ? " card": " cards"}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

class DeckList extends Component {

    componentDidMount(){
        getDecks().then(data => {
            this.props.loadDecks(data)
        })   
    }

    _keyExtractor = (item, index) => item.id;
    
    _onPressItem = (id, questions) => {
        this.props.navigation.navigate('DeckDetail',{title:id, questions:questions})
    }

    _renderItem = ({item}) => (
        <Deck
            key={item.title} 
            id={item.title}
            onPressItem={this._onPressItem}
            title={item.title}
            questions={item.questions}
            navigation={this.props.navigation}
      />
    )
    

    render(){
        if(this.props.decks === null || this.props.decks === undefined)
            return <View></View>
        return(
            <View style={styles.container}> 
                <FlatList
                    data={Object.values(this.props.decks)}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
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
    row: {
        backgroundColor: 'steelblue', 
        justifyContent:'center',
        borderBottomWidth: 0.5,
        height: 150,
        alignItems:'center'
        
    },
})

const mapStateToProps = (state) => ({
    decks:state
})

const mapDispatchToProps = (dispatch) => ({
    loadDecks: (data) => dispatch(action_decks_load_all(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)