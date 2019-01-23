import React, {Component} from 'react';
import {View, FlatList, StyleSheet, ListView} from 'react-native';
import {white} from "../utils/colors";
import Deck from "./Deck";
import {connect} from "react-redux";
import {handleInitialData} from "../actions";

class DeckList extends Component {

    renderItem = (deck) => {
        const {title, cardCount} = deck.item;

        return <Deck
            deckName={title}
            cardCount={cardCount}
        />
    };

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {decks} = this.props;

        return (
            <View style={styles.container}>
                {decks && <FlatList
                    data={decks}
                    renderItem={this.renderItem}
                    keyExtractor={(deck) => deck.id}
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

    return {
        decks: decks
            ? Object.keys(decks)
                .map((id) => {
                    return {
                        id: id,
                        title: decks[id].title,
                        cardCount: decks[id].questions.length,
                    }
                })
            : [],
    };
}

export default connect(mapStateToProps)(DeckList);