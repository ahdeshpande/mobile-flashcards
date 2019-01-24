import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {adBlue, white} from "../utils/colors";
import {handleAddDeck} from "../actions";
import {NavigationActions} from 'react-navigation';
import {connect} from "react-redux";

class AddDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckName: '',
            error: false,
        };
    }

    submit = () => {
        const {deckName} = this.state;

        if (deckName.trim() === "") {

            // Show error
            this.setState(() => ({
                error: true,
            }));

        } else {

            this.props.dispatch(handleAddDeck(deckName));

            this.setState(() => ({
                deckName: '',
            }));

        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    What is the title of your new deck?
                </Text>

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({
                        deckName: text,
                        error: false,
                    })}
                    value={this.state.deckName}
                    required
                />

                <Text style={{color: this.state.error ? "red" : "white"}}>
                    Deck Name cannot be empty
                </Text>


                <TouchableOpacity onPress={this.submit}>
                    <Text style={styles.primaryButton}>
                        Add Deck
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
        justifyContent: 'space-evenly',
        padding: 20,
    },
    innerContainer: {
        alignItems: 'center',
    },
    header: {
        fontSize: 36,
        textAlign: 'center',
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
        height: 48,
        fontSize: 20,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'stretch',
    }
});

export default connect()(AddDeck);