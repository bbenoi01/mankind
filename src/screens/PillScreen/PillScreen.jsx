import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class PillScreen extends Component {
    
    handleGetPill = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('pill'));
    }

    render() {
        const { navigation, pill } = this.props;

        return (
            <View style={styles.container}>
                {pill.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetPill}
                    />
                ) : null}
                <ProductList
                    category={pill}
                    navigation={navigation}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})