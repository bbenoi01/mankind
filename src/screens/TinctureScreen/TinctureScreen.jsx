import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class TinctureScreen extends Component {
    
    handleGetTincture = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('tincture'));
    }

    render() {
        const { navigation, tincture } = this.props;

        return (
            <View style={styles.container}>
                {tincture.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetTincture}
                    />
                ) : null}
                <ProductList
                    category={tincture}
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