import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import {
    Text,
    Button,
    ListItem
} from 'react-native-elements';
import {
    formatDate
} from '../actions';

export default class OrdersScreen extends Component {
    render() {
        const { navigation, orders } = this.props;
        let orderDate;

        return (
            <View style={styles.container}>
                <Text style={styles.accountText}>
                    Orders
                </Text>
                <FlatList
                    data={orders}
                    keyExtractor={item => item.orderId}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('OrderDetails', { item })}
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