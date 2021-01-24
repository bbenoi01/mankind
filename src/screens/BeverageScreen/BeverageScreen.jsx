import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class BeverageScreen extends Component {
    
    handleGetBeverage = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('beverage'));
    }

    render() {
        const { navigation, beverage } = this.props;

        return (
            <View style={styles.container}>
                {beverage.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetBeverage}
                    />
                ) : null}
                <ProductList
                    category={beverage}
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