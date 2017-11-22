import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import {white, black, green, red} from '../utils/colors'
import {getDeck} from '../utils/api'

const CorrectBtn = ({ onPress }) => {
    return (
      <TouchableOpacity
        style={styles.CorrectBtn}
        onPress={onPress}>
          <Text style={styles.CorrectBtnText}>Correct</Text>
      </TouchableOpacity>
    )
}

const IncorrectBtn = ({ onPress }) => {
    return (
      <TouchableOpacity
        style={styles.IncorrectBtn}
        onPress={onPress}>
          <Text style={styles.IncorrectBtnText}>Incorrect</Text>
      </TouchableOpacity>
    )
}

const SwitchQuestionAnswer = ({ onPress, title }) => {
    return (
        <Button
            onPress={onPress}
            title={title}>
        </Button>    
    )
}

const QuestionAnswer = ({questionAnswer}) => {
    return(
        <View>
            <Text style={styles.textStyling}>{questionAnswer}</Text>
        </View>
    )
}

class Quizz extends Component{
    constructor(props){
        super(props)
        this.state = {
            isQuestion: true, //question or answer to print on screen
            currentQuestion: 0,
            nbCorrectAnswers: 0,
            nbIncorrectAnswers:0,
            nbTotalQuestions:0,
            questionsRemaining:0,
            endQuestions: false,
            questions: null
        }
    }
 
    componentWillMount(){
        getDeck(this.props.navigation.state.params.title).then(data => {
            this.setState(() => ({
                questions:data.questions,
                nbTotalQuestions:data.questions.length,
                questionsRemaining: data.questions.length
            }))
        })
    }

    _onPressCorrectBtn = () => {
        if((this.state.currentQuestion + 1) === this.state.nbTotalQuestions){
            this.setState((prevState) => ({
                nbCorrectAnswers: prevState.nbCorrectAnswers + 1,                
                endQuestions: true
            }))
            return
        }
        
        this.setState((prevState) => ({
            nbCorrectAnswers: prevState.nbCorrectAnswers + 1,
            currentQuestion: prevState.currentQuestion + 1,
            questionsRemaining: prevState.questionsRemaining - 1,
            isQuestion : true
        }))
    }

    _onPressIncorrectBtn = () => {
        //TODO si questionRemaining 0 --> afficher le score
        if((this.state.currentQuestion + 1) === this.state.nbTotalQuestions){
            this.setState((prevState) => ({
                nbIncorrectAnswers: prevState.nbIncorrectAnswers + 1,
                endQuestions: true
            }))
            return
        }

        this.setState((prevState) => ({
            nbIncorrectAnswers: prevState.nbIncorrectAnswers + 1,
            currentQuestion: prevState.currentQuestion + 1,
            questionsRemaining: prevState.questionsRemaining - 1,
            isQuestion : true
        }))
    }


    _onPressSwitchAQBtn = () => {
        this.setState((prevState) => ({
            isQuestion: !prevState.isQuestion
        }))

    }


    render(){

        const {currentQuestion, questions} = this.state

        if(this.state.questions === null || this.state.questions === undefined){
            return(<View></View>)
        }
        
        if(this.state.nbTotalQuestions === 0){
            return(
                <View><Text style={styles.titleStyling}>No quiz possible!</Text></View>
            )
        }

        if(this.state.endQuestions === false)
            return(
                   <View>
                        <Text style={{fontSize:22}}>{this.state.currentQuestion + 1}/{this.state.nbTotalQuestions}</Text>
                        <Text style={styles.titleStyling}>Starting {this.props.navigation.state.params.title} Quiz</Text>
                        <QuestionAnswer 
                            questionAnswer={this.state.isQuestion === true 
                                            ? this.state.questions[currentQuestion].question
                                            : this.state.questions[currentQuestion].answer}>
                        </QuestionAnswer>
                        <SwitchQuestionAnswer 
                            title={this.state.isQuestion === true ? "Question" : "Answer" }
                            onPress={this._onPressSwitchAQBtn}/>
                        <CorrectBtn onPress={this._onPressCorrectBtn}/>
                        <IncorrectBtn onPress={this._onPressIncorrectBtn}/>
                    </View>   
            )
        else  
            return( 
            <View>
                <Text style={styles.titleStyling}>
                    You have {this.state.nbCorrectAnswers} correct answers.
                </Text>
            </View>
            )
        
        
    }
}

export default Quizz

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        flexDirection:'column',
    },
    titleStyling: {
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 20,
        fontSize:40,
        textAlign:'center'
    },
    textStyling: {
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 30,
        marginTop:30,
        marginBottom:20,
        fontSize:28,
        textAlign:'center'
    },
    CorrectBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    CorrectBtn:{
        backgroundColor: green,
        height:45,
        padding: 10,
        borderRadius: 7,
        marginLeft: 40,
        marginRight: 40,
        borderWidth:1,
        marginTop:40
    },
    IncorrectBtnText: {
        color: white,        
        fontSize: 22,
        textAlign: 'center'
    },
    IncorrectBtn:{
        backgroundColor:red,
        borderWidth:1,
        height:45,
        padding: 10,
        borderRadius: 7,
        marginLeft: 40,
        marginRight: 40,
        marginBottom:30,
        marginTop:40
    }

})