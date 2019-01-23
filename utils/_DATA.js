import {firebaseConfig} from "./firebase";
import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = {timestampsInSnapshots: true};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export function _getDecks() {
    // return new Promise((res,) => {
    //
    //     firebaseApp.database().ref()
    //         .child('decks')
    //         .on('value', (snapshot) => {
    //
    //             // get children as an array
    //             let decks = [];
    //             snapshot.forEach((child) => {
    //                 decks.push({
    //                     deckName: child.val().deckName,
    //                     cardCount: child.val().cardCount,
    //                     _key: child.key,
    //                 });
    //             });
    //
    //             res(decks);
    //         }, (errorObject) => {
    //             console.log("The read failed: " + errorObject.code);
    //             return {};
    //         });
    // });
    return firebase.firestore().collection('decks');
}

export default firebase;