import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Icon,
    withBadge
} from 'react-native-elements';

export default class ShoppingCart extends Component {

    render() {
        const { cart } = this.props;
        const BadgedIcon = withBadge(cart)(Icon);

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <BadgedIcon
                        type="antdesign"
                        name="shoppingcart"
                        color="#f5f5f5"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 25
    }
})