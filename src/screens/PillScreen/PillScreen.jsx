import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {
    Card,
    Divider,
    Text
} from 'react-native-elements';

export default class PillScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text h2>
                    Pill Screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})