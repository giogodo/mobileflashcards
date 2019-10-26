import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class NewDeck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.lavel}>What is the title of your new deck?</Text>
                <TextInput style={{
                    height: 40,
                    width: "85%",
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 10,
                    margin: 30,
                    padding: 10
                }} />
                <Text style={styles.instructions}>To get started, edit NewDeck.js llll</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    lavel: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});