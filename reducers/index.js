import * as ActionTypes from '../actions/actionTypes'


const initialState = {

    React:{
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

    JavaScript:{
        title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
}

const decks = (state = {} , action) => {
    switch(action.type){
        case ActionTypes.DECK_ADD:
            return {
                ...state,
                [action.key]:{
                    title:action.key,
                    questions:[]
                }
            }

        case ActionTypes.DECKS_LOAD_ALL:
            return action.decks

        case ActionTypes.CARD_ADD:
            console.log("ADD CARD")
            console.log("State:", state)
            console.log("action: ", action)
            console.log("state[action.key]:", state[action.key])
            console.log("state[action.key]['questions']:", state[action.key].questions)
            console.log("state[action.key]['questions'] longueur:", state[action.key].questions.length)
            console.log("New state:", {
                ...state,
                [action.key]:{
                    title: action.key,
                    questions: [{
                        question: action.question,
                        answer: action.answer
                    },
                    ...state[action.key].questions
                    ]
                }
            })
            return{
                ...state,
                [action.key]:{
                    title: action.key,
                    questions: [{
                        question: action.question,
                        answer: action.answer
                    },
                    ...state[action.key].questions
                    ]
                }
            }
        default:
            console.log("Default")
            return state

    }
}

export default decks