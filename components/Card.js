import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {adBlue, white} from "../utils/colors";

class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            answered: props.answered,
        }
    }

    render() {

        const {item, onAnswered, index} = this.props;

        return (
            <View>
                <View style={styles.qSlide}>

                    <Text style={styles.question}>{item.question}</Text>

                    <TouchableOpacity onPress={() => {
                    }}>
                        <Text style={styles.primaryButton}>
                            Show Answer
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.aSlide}>
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
    aButtons: {
        justifyContent: 'space-evenly',
    },
    primaryButton: {
        alignSelf: 'center',
        textAlign: 'center',
        padding: 10,
        width: 120,
        borderRadius: 5,
        backgroundColor: adBlue,
        color: white,
        fontSize: 20,
        // marginTop: 30,
    },
    secondaryButton: {
        alignSelf: 'center',
        textAlign: 'center',
        padding: 10,
        width: 120,
        borderRadius: 5,
        backgroundColor: white,
        color: adBlue,
        borderColor: adBlue,
        borderWidth: 2,
        fontSize: 20,
        // marginTop: 30,
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
    qNumber: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    }
});

export default Card;