import {_getDecks, _saveDeck} from "./_DATA";

export function getInitialData() {
    return Promise.all([
        _getDecks(),
    ]).then(([decks]) => ({
        decks,
    }))
}

export function saveDeck ({title}) {
    return _saveDeck({title})
}