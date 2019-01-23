import React, {Component} from 'react';
import {View, FlatList, StyleSheet, ListView} from 'react-native';
import {white} from "../utils/colors";
import Deck from "./Deck";
import {connect} from "react-redux";
import {handleInitialData} from "../actions";

class DeckList extends Component {

    renderItem = (deck) => {
        const {deckName, cardCount} = deck.item;

        return <Deck
            deckName={deckName}
            cardCount={cardCount}
        />
    };

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {decks} = this.props;

        console.log(decks)

        return (
            <View style={styles.container}>
                {decks && <FlatList
                    data={decks}
                    renderItem={this.renderItem}
                    keyExtractor={(card) => card._key.toString()}
                />}
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

function mapStateToProps(decks) {

    const tempDecks = [];

    // decks.forEach((doc) => {
    //     console.log(doc.data());
    //     // tempDecks.push({
    //     //     key: doc.id,
    //     //     doc, // DocumentSnapshot
    //     //     title,
    //     //     description,
    //     //     author,
    //     // });
    // });
    console.log(decks)
    return tempDecks;
}

export default connect(mapStateToProps)(DeckList);