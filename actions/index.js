import {getInitialData} from "../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';

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

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({decks}) => {
                dispatch(getDecks(decks));
            });
    };
}