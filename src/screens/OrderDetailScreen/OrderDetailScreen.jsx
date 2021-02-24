import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Text
} from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import CartScreen from '../CartScreen';
import TrackScreen from '../TrackScreen';

import {
    formatDate,
    capitalize
} from '../actions';
import { or } from 'react-native-reanimated';

export default class OrderDetailScreen extends Component {
    render() {
        const { navigation, orderDeets } = this.props;
        // let content = navigation.getParam('item');
        // console.log('DAFT', orderDeets);
        let pruchaseDate;

        function dropHyphen(string) {
            const begin = string.toString().split("-");
            return begin[1];
        }

        const DetailFlow = createMaterialTopTabNavigator({
            Cart: CartScreen,
            Track: TrackScreen
        },
        {
          initialRouteName: 'Cart',
          tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'grey',
            indicatorStyle: { backgroundColor: 'green' },
            style: { backgroundColor: 'inherit' }
          }
        })
        const OrderDetailFlow = createAppContainer(DetailFlow);

        return (
            <View style={styles.container}>
                <Text style={{ paddingVertical: 15, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                    Order {orderDeets.ticket.orderNumber} Details
                </Text>
                {/* <View style={{ flexDirection: 'row'}}>
                    <Text>Receipt Number:</Text>
                    <Text>{orderDeets.ticket.orderNumber}</Text>
                </View> */}
                <View style={{ flexDirection: 'row'}}>
                    <Text>Purchase Date: </Text>
                    <Text>{formatDate(orderDeets.ticket.dateCreated, pruchaseDate)}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text>Order Status: </Text>
                    <Text>{capitalize(orderDeets.ticket.status)}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text>Original Price: </Text>
                    <Text>${orderDeets.ticketTotals.subTotal}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text>Tier Discount: </Text>
                    <Text>${orderDeets.ticketTotals.tierDiscountTotal}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text>Discount: </Text>
                    <Text>-${dropHyphen(orderDeets.ticketTotals.discountTotal)}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text>Subtotal: </Text>
                    <Text>${orderDeets.ticketTotals.adjustedSubtotal}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text>Tax: </Text>
                    <Text>${orderDeets.ticketTotals.taxTotal}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text>Order Total: </Text>
                    <Text>${orderDeets.ticketTotals.total}</Text>
                </View>
                <OrderDetailFlow/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})