import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class EdibleScreen extends Component {

    handleGetEdible = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('edible'));
    }

    render() {
        const { navigation, edible } = this.props;

        return (
            <View style={styles.container}>
                {edible.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetEdible}
                    />
                ) : null}
                <ProductList
                    category={edible}
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