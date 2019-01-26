import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {adBlue, white} from "../utils/colors";
import {connect} from "react-redux";

class DeckDetail extends Component {

    static navigationOptions = ({navigation}) => {

        return {
            title: navigation.state.params.deckName,
        }

    };

    render() {
        const {deck, navigation} = this.props;

        return (
            deck
                ?
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.header}>
                            {deck.deckName}
                        </Text>
                        <Text style={styles.counter}>
                            {deck.cardCount} card{deck.cardCount !== 1 && 's'}
                        </Text>
                    </View>

                    <View style={styles.innerContainer}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(
                                'AddCard',
                                {deckId: deck.deckId,}
                            );
                        }}>
                            <Text style={styles.secondaryButton}>
                                Add Card
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            navigation.navigate(
                                'Quiz',
                                {deckId: deck.deckId,}
                            );
                        }}>
                            <Text style={styles.primaryButton}>
                                Start Quiz
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={styles.container}>
                    <Text>
                        No such deck found!
                    </Text>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    innerContainer: {
        alignItems: 'center',
    },
    header: {
        fontSize: 48,
    },
    counter: {
        fontSize: 24,
        color: 'gray',
    },
    primaryButton: {
        textAlign: 'center',
        padding: 20,
        width: 150,
        borderRadius: 5,
        backgroundColor: adBlue,
        color: white,
        fontSize: 20,
        margin: 10,
    },
    secondaryButton: {
        textAlign: 'center',
        padding: 20,
        width: 150,
        backgroundColor: white,
        color: adBlue,
        borderColor: adBlue,
        borderWidth: 2,
        fontSize: 20,
        margin: 10,
    },
});

function mapStateToProps(decks, {navigation}) {
    const {deckId} = navigation.state.params;
    return {
        deck: deckId
            ?
            {
                deckId: deckId,
                deckName: decks[deckId].title,
                cardCount: decks[deckId].questions.length,
            }
            : undefined,
    }
}

function mapDispatchToProps(dispatch, {navigation}) {

    return {
        goBack: () => navigation.goBack(),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);