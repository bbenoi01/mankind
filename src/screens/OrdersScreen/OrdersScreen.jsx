import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import {
    Text,
    Button,
    ListItem
} from 'react-native-elements';
import {
    formatDate,
    getUserOrders,
    getOrderDetails
} from '../actions';

export default class OrdersScreen extends Component {

    handleGetOrders = () => {
        const { dispatch } = this.props;
        dispatch(getUserOrders());
    };

    render() {
        const { dispatch, orders } = this.props;
        let orderDate;

        function handleGetOrderDetails(item) {
            dispatch(getOrderDetails(item.orderId));
        };

        return (
            <View style={styles.container}>
                {orders.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetOrders}
                    />
                ) : null}
                <Text style={styles.accountText}>
                    Orders
                </Text>
                <FlatList
                    data={orders}
                    keyExtractor={item => item.orderId}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => handleGetOrderDetails(item)}
                            >
                                <ListItem bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>Receipt# {item.orderNumber}</ListItem.Title>
                                        <ListItem.Subtitle>{formatDate(item.dateCreated, orderDate)}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    accountText: {
        paddingVertical: 15,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    container: {
        flex: 1
    },
    link: {
        color: 'blue'
    },
    rowView: {
        display: 'flex',
        flexDirection: 'row'
    }
});