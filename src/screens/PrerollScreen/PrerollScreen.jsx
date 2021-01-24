import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class PrerollScreen extends Component {
    
    handleGetPreroll = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('preroll'));
    }

    render() {
        const { navigation, preroll } = this.props;

        return (
            <View style={styles.container}>
                {preroll.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetPreroll}
                    />
                ) : null}
                <ProductList
                    category={preroll}
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