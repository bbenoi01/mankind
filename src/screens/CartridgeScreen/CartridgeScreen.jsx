import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class CartridgeScreen extends Component {
    
    handleGetCartridge = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('cartridge'));
    }

    render() {
        const { navigation, cartridge } = this.props;

        return (
            <View style={styles.container}>
                {cartridge.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetCartridge}
                    />
                ) : null}
                <ProductList
                    category={cartridge}
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