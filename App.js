import React from 'react';
import {View, StyleSheet, Platform, StatusBar} from 'react-native';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from './reducers';
import thunk from 'redux-thunk';

import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import {adBlue, white} from "./utils/colors";
import {Constants} from "expo";
import DeckDetail from "./components/DeckDetail";
import DeckList from "./components/DeckList";

const MainNavigator = createStackNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: adBlue,
            }
        },
        title: 'Flashcards',
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: adBlue,
            }
        }
    }
});

const AppContainer = createAppContainer(MainNavigator);

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
                    <AppContainer/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App;