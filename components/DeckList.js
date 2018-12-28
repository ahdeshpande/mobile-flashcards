import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {white} from "../utils/colors";
import Deck from "./Deck";

class DeckList extends Component {

    renderItem = (deck) => {
        const {deckName, cardCount} = deck.item;

        return <Deck
            deckName={deckName}
            cardCount={cardCount}
        />
    };

    render() {
        const {decks} = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    data={decks}
                    renderItem={this.renderItem}
                    keyExtractor={(card) => card._key.toString()}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
    },
});

export default DeckList;