import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {
    Card,
    Divider,
    Text
} from 'react-native-elements';

export default class EdibleScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text h2>
                    Edible Screen
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