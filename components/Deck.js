import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {white} from "../utils/colors";

class Deck extends Component {

    render() {
        const {deckName, cardCount, deckId, navigation} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(
                        'DeckDetail',
                        {deckId: deckId, deckName: deckName}
                    );
                }}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.header}>
                            {deckName}
                        </Text>
                        <Text style={styles.counter}>
                            {cardCount} card{cardCount !== 1 && 's'}
                        </Text>
                    </View>
                </TouchableOpacity>
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
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        alignItems: 'center',
    },
    header: {
        fontSize: 36,
    },
    counter: {
        fontSize: 22,
        color: 'gray',
    },
    innerContainer: {
        alignItems: 'center',
    }
});

export default Deck;