import * as ActionTypes from './actionTypes'

export function action_decks_load_all(decks){
    console.log("load decks title :", decks)
    
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

export function card_add(deckTitle, question, answer){
    return {
        type: ActionTypes.CARD_ADD,
        key: deckTitle,
        question: question,
        answer:answer
    }
}