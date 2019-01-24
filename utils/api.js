import {_getDecks, _saveDeck, _saveQuestion} from "./_DATA";

export function getInitialData() {
    return Promise.all([
        _getDecks(),
    ]).then(([decks]) => ({
        decks,
    }))
}


export function saveQuestion ({deckId, question, answer}) {
    return _saveQuestion({deckId, question, answer})
}

export function saveDeck ({title}) {
    return _saveDeck({title})
}