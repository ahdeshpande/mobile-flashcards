let data = {
    React: {
        id: "React",
        title: 'React',
        questions: [
            {
                id: "q_asdf723r8yf78347",
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                id: "q_093487635879fsdvds",
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        id: "Javascript",
        title: 'JavaScript',
        questions: [
            {
                id: "q_867123g8g345vg7",
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
};

export function _getDecks() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...data}), 1000)
    })
}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatDeck({title}) {
    return {
        id: generateUID(),
        title: title,
        questions: [],
    }
}

function formatQuestion({question, answer}) {
    return {
        id: 'q_' + generateUID(),
        question: question,
        answer: answer,
    }
}


export function _saveDeck({title}) {
    return new Promise((res, rej) => {

        const formattedDeck = formatDeck({
            title,
            question: [],
        });

        setTimeout(() => {
            data = {
                ...data,
                [formattedDeck.id]: formattedDeck,
            };

            res(formattedDeck);
        }, 1000);
    });
}

export function _saveQuestion({deckId, question, answer}) {
    return new Promise((res, rej) => {
        const formattedQuestion = formatQuestion({
            question,
            answer,
        });

        setTimeout(() => {

            data = {
                ...data,
                [deckId]: {
                    ...data[deckId],
                    questions: data[deckId].questions.concat([formattedQuestion]),
                }
            };

            res(formattedQuestion);
        }, 1000)
    });
}