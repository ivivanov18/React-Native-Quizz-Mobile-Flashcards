import * as ActionTypes from '../actions/actionTypes'


const initialState = [
        {
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
        {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
    ]

const decks = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.DECK_ADD:
            console.log("DECK ADD")
            newState = [
                ...state,
                {
                    title:action.key,
                    questions:[]
                }
            ]
            console.log("new state: ", newState)
            return newState

        case ActionTypes.DECKS_LOAD_ALL:
            return [...action.decks]

        case ActionTypes.CARD_ADD:
            newQuestionsArray = state[action.key]['questions'].push({question:action.question, answer: action.answer})
            return{
                ...state,
                [action.key]:{
                    title: action.key,
                    questions: newQuestionsArray
                }
            }
        default:
            return state

    }
}

export default decks