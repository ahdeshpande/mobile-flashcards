import {getInitialData, saveDeck, saveQuestion} from "../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export function getDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addCard({question, answer}) {
    return {
        type: ADD_CARD,
        question,
        answer,
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({decks}) => {
                dispatch(getDecks(decks));
            });
    };
}

export function handleAddDeck(deckName) {
    return (dispatch) => {
        return saveDeck({title: deckName})
            .then(({deck}) => {
                dispatch(addDeck(deck));
                return getInitialData()
                    .then(({decks}) => {
                        dispatch(getDecks(decks));
                    });
            });
    };
}

export function handleAddCard({deckId, question, answer}) {
    return (dispatch) => {
        return saveQuestion({deckId, question, answer})
            .then(({question, answer}) => {
                dispatch(addCard({question, answer}));
                return getInitialData()
                    .then(({decks}) => {
                        dispatch(getDecks(decks));
                    });
            });
    };
}