import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {adBlue, white} from "../utils/colors";

class Score extends Component {

    static navigationOptions = ({navigation}) => {

        return {
            title: `Score: ${navigation.state.params.deckName}`,
        }

    };

    render() {

        const {deck, score, navigation} = this.props;

        return (
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
                    <Text style={styles.header}>
                        Your Score: {score}
                    </Text>
                </View>

                <View style={styles.innerContainer}>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate(
                            'DeckDetail', {
                                deckId: deck.deckId
                            }
                        );
                        navigation.navigate(
                            'Quiz', {
                                deckId: deck.deckId
                            }
                        );
                    }}>
                        <Text style={styles.secondaryButton}>
                            Restart Quiz
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate(
                            'DeckDetail', {
                                deckId: deck.deckId
                            }
                        );
                    }}>
                        <Text style={styles.secondaryButton}>
                            Go Home
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(decks, {navigation}) {
    const {deckId, score} = navigation.state.params;

    return {
        deck: deckId
            ?
            {
                deckId: deckId,
                deckName: decks[deckId].title,
                cardCount: decks[deckId].questions.length,
            }
            : undefined,
        score,
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
        borderRadius: 5,
        backgroundColor: white,
        color: adBlue,
        borderColor: adBlue,
        borderWidth: 2,
        fontSize: 20,
        margin: 10,
    },
});

export default connect(mapStateToProps)(Score);