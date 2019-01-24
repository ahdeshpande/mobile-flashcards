import React from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from './reducers';
import thunk from 'redux-thunk';
import Home from "./components/Home";

import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';


const MainNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    // DeckDetail: {
    //     screen: EntryDetail,
    //     navigationOptions: {
    //         headerTintColor: white,
    //         headerStyle: {
    //             backgroundColor: purple,
    //         }
    //     }
    // }
});

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {

    render() {
        return (
            <Provider store={createStore(reducer, applyMiddleware(thunk))}>
                <AppContainer/>
            </Provider>
        );
    }
}


export default App;