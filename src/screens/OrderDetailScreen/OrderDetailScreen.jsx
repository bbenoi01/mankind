import React, { Component, Fragment } from 'react';
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

export default class OrderDetailScreen extends Component {

    render() {
        const { loading, details } = this.props;
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
            <Fragment>
                {loading === false ? (
                    <View style={styles.container}>
                        <Text style={{ paddingVertical: 15, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                            Order {details.ticket.orderNumber} Details
                        </Text>
                        <View style={{ flexDirection: 'row'}}>
                            <Text>Purchase Date: </Text>
                            <Text>{formatDate(details.ticket.dateCreated, pruchaseDate)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text>Order Status: </Text>
                            <Text>{capitalize(details.ticket.status)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text>Original Price: </Text>
                            <Text>${details.ticketTotals.subTotal}</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text>Tier Discount: </Text>
                            <Text>${details.ticketTotals.tierDiscountTotal}</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text>Discount: </Text>
                            <Text>-${dropHyphen(details.ticketTotals.discountTotal)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text>Subtotal: </Text>
                            <Text>${details.ticketTotals.adjustedSubtotal}</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text>Tax: </Text>
                            <Text>${details.ticketTotals.taxTotal}</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text>Order Total: </Text>
                            <Text>${details.ticketTotals.total}</Text>
                        </View>
                        <OrderDetailFlow/>
                    </View>
                    ) : (
                        <View style={styles.loadingContainer}>
                            <Text h3 style={styles.loadingText}>
                                Retreiving Order Details...
                            </Text>
                        </View>
                    )}
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center'
    },
    loadingText: {
        alignSelf: 'center',

    }
})