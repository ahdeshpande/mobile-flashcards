import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {white} from "../utils/colors";
import Deck from "./Deck";
import {connect} from "react-redux";
import {handleInitialData} from "../actions";

class DeckList extends Component {

    renderItem = (deck) => {
        const {title, cardCount, id} = deck.item;
        const {navigation} = this.props;

        return <Deck
            deckId={id}
            deckName={title}
            cardCount={cardCount}
            navigation={navigation}
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
        padding: 10,
        backgroundColor: white,
    },
});

function mapStateToProps(decks, {navigation}) {

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