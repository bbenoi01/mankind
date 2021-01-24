import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class ExtractScreen extends Component {
    
    handleGetExtract = () => {
        const { dispatch } = this.props;
        dispatch(getCategoryContent('extract'));
    }

    render() {
        const { navigation, extract } = this.props;

        return (
            <View style={styles.container}>
                {extract.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetExtract}
                    />
                ) : null}
                <ProductList
                    category={extract}
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