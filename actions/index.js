import * as ActionTypes from './actionTypes'

export function action_decks_load_all(decks){
    console.log("load decks action :", decks)
    
    return {
        type: ActionTypes.DECKS_LOAD_ALL,
        decks: decks
    }
}

export function action_add_deck(deckTitle){
    console.log("deck add title :", deckTitle)
    return {
        type: ActionTypes.DECK_ADD,
        key: deckTitle
    }
}

export function action_add_card_to_deck(questionData){
    return {
        type: ActionTypes.CARD_ADD,
        key: questionData.title,
        question: questionData.question,
        answer:questionData.answer
    }
}