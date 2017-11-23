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
            return state

    }
}

export default decks