import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class MiscScreen extends Component {
    
    handleGetMisc = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('misc'));
    }

    render() {
        const { navigation, misc } = this.props;

        return (
            <View style={styles.container}>
                {misc.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetMisc}
                    />
                ) : null}
                <ProductList
                    category={misc}
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