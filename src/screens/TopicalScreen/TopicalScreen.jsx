import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class TopicalScreen extends Component {
    
    handleGetTopical = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('topical'));
    }

    render() {
        const { navigation, topical } = this.props;

        return (
            <View style={styles.container}>
                {topical.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetTopical}
                    />
                ) : null}
                <ProductList
                    category={topical}
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