import {AsyncStorage} from 'react-native'

export const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY';

let initialData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer:
                    'The combination of a function and the lexical environment within which that function was declared.',
            }
        ]
    }
};

/**
 * 
 */
function setInitialData() {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData));
    return initialData;
}

/**
 * 
 */
export function getDecks(){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(data => {
        return data === null ? setInitialData() : JSON.parse(data)
    });
}

/**
 * 
 * @param {string} id - the id/key of the deck record
 * @return the deck
 */
export function getDeck(id){
    return getDecks().then(data => (
        data[id]   
    ))
}

/**
 * 
 * @param {string} title - the title of the new deck to be saved
 */
export function saveDeckTitle(title){
    const newDeck = {
        title: title,
        questions:[]
    }

    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: newDeck
    }))
}

/**
 * 
 * @param {*} title 
 * @param {*} card 
 */
export function addCardToDeck(title, card){

    return getDecks().then(data => {
        const deckToAddCard = data[title]
        deckToAddCard.questions.push(card)

        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title]: deckToAddCard
        }))

        
    })
}