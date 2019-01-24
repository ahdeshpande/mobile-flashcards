import React, {Component} from 'react';
import {adBlue} from "../utils/colors";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import DeckList from "../App";
import {Constants} from "expo";

function FCStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent
                       backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

class Home extends Component {

    render() {
        return (
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
        )
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

export default Home;