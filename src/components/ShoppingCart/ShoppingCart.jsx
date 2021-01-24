import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {
    Icon,
    withBadge,
    Overlay,
    ListItem,
    Button,
    Text
} from 'react-native-elements';

import {
    clearCart
} from '../../screens/actions';

export default class ShoppingCart extends Component {
    
    state = {
        visible: false
    }

    handleVisible = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    handleClearCart = () => {
        const { dispatch } = this.props;
        dispatch(clearCart());
    }
    
    render() {
        const { cartQty, cart } = this.props;
        const BadgedIcon = withBadge(cartQty)(Icon);

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.handleVisible}
                >
                    <BadgedIcon
                        type="antdesign"
                        name="shoppingcart"
                        color="#f5f5f5"
                    />
                </TouchableOpacity>
                <Overlay
                    isVisible={this.state.visible}
                    onBackdropPress={this.handleVisible}
                >
                    <View>
                    {cart.length > 0 ? (
                        <FlatList
                            data={cart}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <ListItem bottomDivider>
                                            <Text>{item.name}</Text>
                                        </ListItem>
                                    </View>
                                )
                            }}
                        />
                    ) : (
                        <Text>Cart empty</Text>
                    )}
                    {cart.length > 0 ? (
                    <Button
                        title='Clear Cart'
                        type='outline'
                        onPress={this.handleClearCart}
                    />
                    ) : null}
                    </View>
                </Overlay>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 25
    }
})