import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import Carousel from "react-native-snap-carousel";
import {adBlue, white} from "../utils/colors";
import Card from "./Card";

const {width: viewportWidth, } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(5);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sliderActiveSlide: 0,
            score: 0,
            answers: new Array(props.deck.questions.length),
            showScore: false,
        };
    }

    onAnswered = (aIndex, answer) => {

        const nextIndex = aIndex + 1 >= this.state.answers.length ? 0 : aIndex + 1;

        this.setState((prevState) => ({
            ...prevState,
            sliderActiveSlide: nextIndex >= prevState.answers.length ? 0 : nextIndex,
            answers: [
                ...prevState.answers.slice(0, aIndex),
                prevState.answers[aIndex] = answer,
                ...prevState.answers.slice(aIndex + 1),
            ],
        }));

        const allAnswers = this.state.answers.filter(a => a !== undefined);

        if (allAnswers.length === this.state.answers.length - 1) {
            const allTrue = this.state.answers.filter(a => a);
            const score = answer ? allTrue.length + 1 : allTrue.length;

            this.setState(() => ({
                score: score,
                showScore: true,
            }));
        }

        this._sliderRef.snapToItem(nextIndex >= this.state.answers.length ? 0 : nextIndex);
    };

    _renderItem(data) {

        const {item, answered} = data;

        return (
            <Card item={item.item} index={item.index} answered={answered}
                  onAnswered={this.onAnswered}/>
        );
    }

    render() {

        const {deck, navigation} = this.props;

        return (
            <View>
                <Text style={styles.qNumber}>
                    Question
                    #{this.state.sliderActiveSlide + 1} of {deck.questions.length}
                </Text>

                <Carousel
                    ref={c => this._sliderRef = c}
                    data={deck.questions}
                    renderItem={(item, index) => this._renderItem({
                        item,
                        index,
                        answered: !!this.state.answers[index]
                    })}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    layout={'default'}
                    firstItem={0}
                    enableSnap={true}
                    onSnapToItem={(index) => this.setState({sliderActiveSlide: index})}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.25}
                />

                {this.state.showScore &&
                <TouchableOpacity onPress={() => {
                    navigation.navigate(
                        'Score',
                        {
                            deckId: deck.deckId,
                            deckName: deck.deckName,
                            score: this.state.score,
                        }
                    );
                }}>
                    <Text style={styles.primaryButton}>
                        Show Score
                    </Text>
                </TouchableOpacity>
                }

            </View>
        );
    }
}

function mapStateToProps(decks, {navigation}) {
    const {deckId} = navigation.state.params;
    return {
        deck: deckId
            ?
            {
                deckId: deckId,
                deckName: decks[deckId].title,
                cardCount: decks[deckId].questions.length,
                questions: decks[deckId].questions,
            }
            : undefined,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        marginTop: 30,
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

export default connect(mapStateToProps)(Quiz);