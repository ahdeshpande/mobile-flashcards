import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {adBlue, white} from "../utils/colors";
import {connect} from "react-redux";
import {handleAddCard, handleAddDeck} from "../actions";

class AddCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
            errorQ: false,
            errorA: false,
        };
    }

    static navigationOptions = () => {

        return {
            title: 'Add Card',
        }

    };

    submit = () => {
        const {question, answer} = this.state;
        const {deck} = this.props;

        if (question.trim() === "") {

            // Show error
            this.setState(() => ({
                errorQ: true,
            }));

        } else if (answer.trim() === "") {

            // Show error
            this.setState(() => ({
                errorA: true,
            }));

        } else {

            this.props.dispatch(handleAddCard({
                deckId: deck.deckId,
                question,
                answer
            }));

            this.setState(() => ({
                question: '',
                answer: '',
            }));

        }
    };

    render() {

        // const {deck} = this.props;

        return (
            <View style={styles.container}>

                {/*<View style={styles.innerContainer}>*/}
                {/*<Text style={styles.header}>*/}
                {/*Deck Name: {deck.deckName}*/}
                {/*</Text>*/}
                {/*<Text style={styles.counter}>*/}
                {/*{deck.cardCount} card{deck.cardCount !== 1 && 's'}*/}
                {/*</Text>*/}
                {/*</View>*/}

                <Text style={styles.counter}>
                    Question
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({
                        question: text,
                        errorQ: false,
                    })}
                    value={this.state.question}
                    required
                />
                <Text style={{color: this.state.errorQ ? "red" : "white"}}>
                    Question cannot be empty
                </Text>

                <Text style={styles.counter}>
                    Answer
                </Text>
                <TextInput
                    multiline={true}
                    maxLength={160}
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({
                        answer: text,
                        errorA: false,
                    })}
                    value={this.state.answer}
                    required
                />
                <Text style={{color: this.state.errorA ? "red" : "white"}}>
                    Answer cannot be empty
                </Text>


                <TouchableOpacity onPress={this.submit}>
                    <Text style={styles.primaryButton}>
                        Add Card
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
    innerContainer: {
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
    },
    counter: {
        fontSize: 18,
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
    textInput: {
        minHeight: 48,
        maxHeight: 192,
        fontSize: 20,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'stretch',
    }
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


export default connect(mapStateToProps)(AddCard);