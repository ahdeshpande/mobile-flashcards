import React from 'react';
import {AppRegistry, StyleSheet, View, Text, StatusBar} from 'react-native';
import {Constants} from 'expo';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from './reducers';
import DeckList from "./components/DeckList";
import thunk from 'redux-thunk';
import {adBlue, purple} from "./utils/colors";


function FCStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent
                       backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

class App extends React.Component {

    render() {
        return (
            <Provider store={createStore(reducer, applyMiddleware(thunk))}>
                <View style={styles.container}>
                    <FCStatusBar backgroundColor={adBlue}
                                 barStyle={'light-content'}/>
                    <View style={styles.appHeader}>
                        <Text style={styles.appName}>
                            Flashcards
                        </Text>
                    </View>
                    <DeckList style={styles.deckList}/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    deckList: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    appHeader: {
        padding: 5,
        backgroundColor: adBlue,
    },
    appName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    }
});


export default App;