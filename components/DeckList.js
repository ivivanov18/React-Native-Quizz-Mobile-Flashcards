import React, { Component, PureComponent } from 'react'
import {View, Text, TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux' 

class Deck extends PureComponent{
    _onPress = () => {
        this.props.onPressItem(this.props.id);        
    }

    render(){
        return(
            <View id={this.props.title} style={styles.row} onPress={this._onPress}>
                <Text style={{fontSize:20}} onPress={this._onPress}>{this.props.title}</Text>
                <Text onPress={this._onPress}>{this.props.questions.length} 
                        {this.props.questions.length <=1 ? " card": " cards"}</Text>
            </View>
        )
    }

}

class DeckList extends Component {

    _keyExtractor = (item, index) => item.id;
    
    _onPressItem = (id) => {
        console.log("ID: ", id)
    }

    _renderItem = ({item}) => (
        <Deck
            id={item.title}
            onPressItem={this._onPressItem}
            title={item.title}
            questions={item.questions}
      />
    )
    

    render(){
        return(
            <View style={styles.container}> 
                <FlatList
                    data={this.props.decks}
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
        //backgroundColor: 'steelblue', 
        justifyContent:'center',
        borderBottomWidth: 0.5,
        height: 100,
        alignItems:'center'
        
    },
})

const mapStateToProps = (state) => ({
    decks:state
})

export default connect(mapStateToProps, null)(DeckList)