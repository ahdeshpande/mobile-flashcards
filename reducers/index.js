import {ADD_CARD, ADD_DECK, RECEIVE_DECKS} from "../actions";

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            };
        case ADD_DECK:
            return {
                ...state,
                ...action.deck,
            };
        case ADD_CARD:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default decks;