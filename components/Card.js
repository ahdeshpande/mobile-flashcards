import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {adBlue, white} from "../utils/colors";

class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            answered: props.answered,
            showAnswer: false,
        }
    }

    render() {

        const {item, onAnswered, index} = this.props;

        return (
            <View>
                <View style={styles.qSlide}>

                    <Text style={styles.question}>{item.question}</Text>

                    {!this.state.showAnswer
                    && <TouchableOpacity onPress={() => {
                        this.setState(() => ({
                            showAnswer: true,
                        }));
                    }}>
                        <Text style={styles.primaryButtonQ}>
                            Show Answer
                        </Text>
                    </TouchableOpacity>
                    }

                </View>

                {this.state.showAnswer
                && <View style={styles.aSlide}>
                    <Text style={styles.answer}>{item.answer}</Text>

                    {!this.state.answered && <View style={styles.aButtons}>
                        <TouchableOpacity onPress={() => {
                            onAnswered(index, true);
                            this.setState(() => ({
                                answered: true,
                            }));
                        }}>
                            <Text style={styles.primaryButton}>
                                Correct
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            onAnswered(index, false);
                            this.setState(() => ({
                                answered: true,
                            }));
                        }}>
                            <Text style={styles.secondaryButton}>
                                Incorrect
                            </Text>
                        </TouchableOpacity>
                    </View>
                    }
                </View>
                }
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
    aButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    primaryButtonQ: {
        alignSelf: 'center',
        textAlign: 'center',
        padding: 10,
        width: 200,
        borderRadius: 5,
        backgroundColor: adBlue,
        color: white,
        fontSize: 20,
        marginTop: 30,
    },
    primaryButton: {
        alignSelf: 'center',
        textAlign: 'center',
        padding: 10,
        width: 120,
        borderRadius: 5,
        backgroundColor: adBlue,
        borderColor: adBlue,
        color: white,
        fontSize: 20,
        height: 50,
    },
    secondaryButton: {
        alignSelf: 'center',
        textAlign: 'center',
        padding: 10,
        width: 120,
        backgroundColor: white,
        borderWidth: 2,
        color: adBlue,
        borderColor: adBlue,
        fontSize: 20,
    },
    qSlide: {
        borderWidth: 1,
        borderColor: adBlue,
        borderRadius: 10,
        padding: 30,
        marginTop: 25,
        marginBottom: 5,
    },
    aSlide: {
        borderWidth: 1,
        borderColor: adBlue,
        borderRadius: 10,
        padding: 30,
        backgroundColor: '#f6f6f6',
    },
    question: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
    },
    answer: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
    },
});

export default Card;