import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {white} from "../utils/colors";

class Deck extends Component {

    render() {
        const {deckName, cardCount} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    {deckName}
                </Text>
                <Text style={styles.counter}>
                    {cardCount} card{cardCount !== 1 && 's'}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
        textAlign: 'center',
    },
    header: {
        fontSize: 36,
    },
    counter: {
        fontSize: 22,
        color: 'gray',
    }
});

export default Deck;