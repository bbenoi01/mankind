import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class MerchScreen extends Component {
    
    handleGetMerch = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('merch'));
    }

    render() {
        const { navigation, merch } = this.props;

        return (
            <View style={styles.container}>
                {merch.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetMerch}
                    />
                ) : null}
                <ProductList
                    category={merch}
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