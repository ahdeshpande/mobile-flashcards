import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {white} from "../utils/colors";
import Deck from "./Deck";

class DeckList extends Component {

    renderItem = ({deck}) => {
        return <Deck
            {...deck}
        />
    };

    render() {
        const {decks} = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    data={decks}
                    renderItem={this.renderItem}
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