import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";
import {createStore} from "redux";
import firebase from 'firebase';
import reducer from './reducers';
import DeckList from "./components/DeckList";
import {firebaseConfig} from "./utils/firebase";


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
        this.decksRef = App.getRef().child('decks');
        console.ignoredYellowBox = ['Setting a timer'];
    }


    static getRef() {
        return firebaseApp.database().ref();
    }

    listenForItems(decksRef) {
        decksRef.on('value', (snap) => {

            // get children as an array
            let decks = [];
            snap.forEach((child) => {
                decks.push({
                    deckName: child.val().deckName,
                    cardCount: child.val().cardCount,
                    _key: child.key,
                });
            });

            this.setState({
                dataSource: decks,
            });

        });
    }

    componentDidMount() {
        this.listenForItems(this.decksRef);
    }

    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.container}>
                <DeckList
                    decks={this.state.dataSource}/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

AppRegistry.registerComponent(
    '6Ar6ms^QzyTkc@QW^X3bD4iR6dCrZYx*0WKAHZ3Vh',
    () => App
);