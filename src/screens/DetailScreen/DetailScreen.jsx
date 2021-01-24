import React, { Component, Fragment } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Text,
    Card,
    Badge,
    Icon,
    Button
} from 'react-native-elements';
import {
    updateQty,
    updateCartQty,
    addItemToCart
} from '../actions';

export default class DetailScreen extends Component {

    handleResetQty = () => {
        const { dispatch } = this.props;
        dispatch(updateQty(1));
    }

    handleUpdateQtyPlus = () => {
        const { dispatch, qty } = this.props;
        let newQty = qty + 1;
        dispatch(updateQty(newQty));
    }

    handleUpdateQtyMinus = () => {
        const { dispatch, qty } = this.props;
        let newQty = qty - 1;
        dispatch(updateQty(newQty));
    }

    handleAddToCart = () => {
        const { dispatch, navigation, qty, cartQty } = this.props;
        const content = navigation.getParam('item');
        const itemToAdd = {
            id: content.productList[0].productId,
            brand: content.brand,
            name: content.productList[0].productName,
            weight: content.productList[0].weight,
            price: content.productList[0].displayPriceSell,
            taxRate: content.productList[0].taxRate,
            qty
        };
        let currentQty = cartQty + qty;
        dispatch(addItemToCart(itemToAdd))
        dispatch(updateCartQty(currentQty));
    }

    render() {
        const { navigation, qty, cart } = this.props;
        let content = navigation.getParam('item');
        // console.log("What's in the cart", cart);

        return (
            <Fragment>
                {qty > 1 ? (
                    <NavigationEvents
                        onWillFocus={this.handleResetQty}
                    />
                ) : null}
                {content ? (
                    <View style={styles.container}>
                        <View style={styles.productImageContainer}>
                            {content.croppedImage ? (
                                <Card.Image
                                    source={{ uri: content.croppedImage }}
                                    style={styles.image}
                                />
                            ) : (
                                <Card.Image
                                    source={require('../../../assets/no_image.png')}
                                    style={styles.image}
                                />
                            )}
                        </View>
                        <View style={styles.productDataContainer}>
                            <View style={styles.titleContainer}>
                                <Card.FeaturedTitle>{content.menuTitle}</Card.FeaturedTitle>
                            </View>
                            <View style={styles.classificationContainer}>
                                {content.classifications[0] === "INDICA" ? (
                                    <Badge
                                        value={<Text style={styles.badgeText}>{content.classifications[0]}</Text>}
                                        status='primary'
                                    />
                                ) : content.classifications[0] === "SATIVA" ? (
                                    <Badge
                                        value={<Text style={styles.badgeText}>{content.classifications[0]}</Text>}
                                        status='warning'
                                    />
                                ) : content.classifications[0] === "HYBRID" ? (
                                    <Badge
                                        value={<Text style={styles.badgeText}>{content.classifications[0]}</Text>}
                                        status='success'
                                    />
                                ) : null}
                                {content.subTypes[0] ? (
                                    <Text style={styles.subTypeText}>{content.subTypes[0]}</Text>
                                ) : null}
                                <Text style={styles.weightText}>{content.productList[0].weight}g</Text>
                            </View>
                            <View style={styles.potencyContainer}>
                                <Text style={styles.potencyText}>THC {content.thc}</Text>
                                <Text style={styles.potencyText}>CBD {content.cbd}</Text>
                            </View>
                            <View style={styles.priceContainer}>
                                <Badge
                                    value={<Text style={styles.badgeText}>${content.productList[0].displayPriceSell}.00 Plus Tax</Text>}
                                    status='success'
                                />
                            </View>
                            <View style={styles.quantityContainer}>
                                {qty < 2 ? (
                                    <Icon
                                        disabled
                                        reverse
                                        name='minus'
                                        type='simple-line-icon'
                                        color='red'
                                        size={12}
                                    />
                                ) : (
                                    <TouchableOpacity
                                        onPress={this.handleUpdateQtyMinus}
                                    >
                                        <Icon
                                            reverse
                                            name='minus'
                                            type='simple-line-icon'
                                            color='red'
                                            size={12}
                                        />
                                    </TouchableOpacity>
                                )}
                                <Text style={{ color: '#f5f5f5', fontSize: 15, textAlignVertical: 'center'}}>Quantity: {qty}</Text>
                                <TouchableOpacity
                                    onPress={this.handleUpdateQtyPlus}
                                >
                                    <Icon
                                        reverse
                                        name='plus'
                                        type='simple-line-icon'
                                        color='green'
                                        size={12}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.addToCartContainer}>
                                <Button
                                    title='Add To Cart'
                                    type='outline'
                                    onPress={this.handleAddToCart}
                                />
                            </View>
                            <ScrollView>
                                <Text style={styles.descriptionText}>
                                    {content.description}
                                </Text>
                            </ScrollView>
                        </View>
                    </View>
                ): null}
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productImageContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 250,
        height: 250
    },
    productDataContainer: {
        flex: 1,
        backgroundColor: 'black',
        padding: 15
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    classificationContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 8
    },
    badgeText: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        paddingHorizontal: 15
    },
    subTypeText: {
        color: '#f5f5f5'
    },
    weightText: {
        color: '#f5f5f5'
    },
    potencyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 8
    },
    potencyText: {
        color: '#f5f5f5'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    addToCartContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8
    },
    descriptionText: {
        color: '#f5f5f5',

    }
})