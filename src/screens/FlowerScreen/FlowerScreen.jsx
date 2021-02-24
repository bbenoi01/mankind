import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

import {
    getCategoryContent
} from '../actions';

export default class FlowerScreen extends Component {
    
    // handleGetFlower = () => {
    //     const { dispatch } = this.props;
    //     dispatch(getCategoryContent('flower'));
    // }

    render() {
        const { navigation, flower } = this.props;
        // console.log('FLOWER', flower);
        
        return (
            <View style={styles.container}>
                {/* {flower.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetFlower}
                    />
                ) : null} */}
                <ProductList
                    category={flower}
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