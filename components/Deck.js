import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {white} from "../utils/colors";

class Deck extends Component {

    render() {
        const {deckName, cardCount, id} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    // this.props.navigation.navigate(
                    //     'EntryDetail',
                    //     {entryId: key}
                    // );
                }}>
                    <Text style={styles.header}>
                        {deckName}
                    </Text>
                    <Text style={styles.counter}>
                        {cardCount} card{cardCount !== 1 && 's'}
                    </Text>
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