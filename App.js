import React from 'react';
import {View, StyleSheet, Platform, StatusBar} from 'react-native';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from './reducers';
import thunk from 'redux-thunk';

import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import {adBlue, white} from "./utils/colors";
import {Constants} from "expo";
import DeckDetail from "./components/DeckDetail";
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import logger from "./middleware/logger";

const Home = createBottomTabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Home',
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
        }
    },
}, {
    navigationOptions: {
        header: null,
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? adBlue : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : adBlue,
            shadowRadius: 6,
            shadowOpacity: 1,
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset: {
                width: 0,
                height: 3,
            },
        }
    }
});

const MainNavigator = createStackNavigator({
    DeckList: {
        screen: Home,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: adBlue,
            }
        },
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: adBlue,
            },
            headerForceInset: {top: 'never', bottom: 'never'}
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: adBlue,
            },
            headerForceInset: {top: 'never', bottom: 'never'}
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: adBlue,
            },
            headerForceInset: {top: 'never', bottom: 'never'}
        }
    },
    Score: {
        screen: Score,
        navigationOptions: {
            header: null,
        }
    },
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
            <Provider
                store={createStore(reducer, applyMiddleware(thunk, logger))}>
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