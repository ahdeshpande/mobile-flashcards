import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from './reducers';
import DeckList from "./components/DeckList";
import thunk from 'redux-thunk';

class App extends React.Component {

    render() {
        return (
            <Provider store={createStore(reducer, applyMiddleware(thunk))}>
                <View style={styles.container}>
                    <DeckList/>
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


export default App;

AppRegistry.registerComponent(
    '6Ar6ms^QzyTkc@QW^X3bD4iR6dCrZYx*0WKAHZ3Vh',
    () => App
);