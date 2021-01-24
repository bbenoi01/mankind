import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Icon
                        name='menu'
                        type='ionicons'
                        color='#f5f5f5'
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 25
    }
})