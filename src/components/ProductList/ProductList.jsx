import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {
    Text,
    ListItem,
    Avatar,
    Badge
} from 'react-native-elements';

export default class ProductList extends Component {
    render() {
        const { navigation, category } = this.props;

        return (
            <FlatList
                data={category}
                keyExtractor={item => item.categoryId}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail', { item })}
                        >
                            <ListItem bottomDivider>
                                {item.croppedImage ? (
                                    <Avatar
                                        size='large'
                                        source={{ uri: item.croppedImage}}
                                    />
                                ) : (
                                    <Avatar
                                        size='large'
                                        source={require('../../../assets/no_image.png')}
                                    />
                                )}
                                <ListItem.Content>
                                    <Text style={styles.brandText}>{item.brand}</Text>
                                    {item.menuTitle ? (
                                        <ListItem.Title style={styles.titleText}>{item.menuTitle}</ListItem.Title>
                                    ) : (
                                        <ListItem.Title style={styles.titleText}>{item.productList[0].productName}</ListItem.Title>
                                    )}
                                    <ListItem.Subtitle style={styles.subtitleText}>THC {item.thc}</ListItem.Subtitle>
                                    <View style={styles.priceContainer}>
                                        {item.classifications[0] && item.classifications[0] === "INDICA" ? (
                                            <Badge
                                                value={<Text style={styles.badgeText}>{item.classifications[0]}</Text>}
                                                status='primary'
                                            />
                                        ) : item.classifications[0] && item.classifications[0] === "SATIVA" ? (
                                            <Badge
                                                value={<Text style={styles.badgeText}>{item.classifications[0]}</Text>}
                                                status='warning'
                                            />
                                        ) : item.classifications[0] && item.classifications[0] === "HYBRID" ? (
                                            <Badge
                                                value={<Text style={styles.badgeText}>{item.classifications[0]}</Text>}
                                                status='success'
                                            />
                                        ) : item.classifications[0] && item.classifications[0] === "CBD" ? (
                                            <Badge
                                                value={<Text style={styles.cbdBadgeText}>{item.classifications[0]}</Text>}
                                                status='error'
                                            />
                                        ) : null}
                                        {item.classifications[0] && item.productList[0].displayPriceSell < 1 ? (
                                            <Text style={styles.priceText}>${item.productList[0].displayPriceSell}</Text>
                                        ) : item.classifications[0] && item.productList[0].displayPriceSell >= 1 ? (
                                            <Text style={styles.priceText}>${item.productList[0].displayPriceSell}.00</Text>
                                        ) : !item.classifications[0] && item.productList[0].displayPriceSell < 1 ? (
                                            <Text style={styles.noBadgePriceText}>${item.productList[0].displayPriceSell}</Text>
                                        ) : !item.classifications[0] && item.productList[0].displayPriceSell >= 1 ? (
                                            <Text style={styles.noBadgePriceText}>${item.productList[0].displayPriceSell}.00</Text>
                                        ) : null}
                                        {item.classifications[0] && item.unitOfMeasurement === 'GRAMS' ? (
                                            <Text style={styles.weightText}>/{item.productList[0].weight}g</Text>
                                        ) : item.classifications[0] && item.unitOfMeasurement === 'MILLIGRAMS' ? (
                                            <Text style={styles.weightText}>/{item.productList[0].weight}mg</Text>
                                        ) : null}
                                    </View>
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    )
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    brandText: {
        fontSize: 9
    },
    titleText: {
        fontWeight: 'bold'
    },
    subtitleText: {
        fontSize: 12
    },
    badgeText: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        paddingHorizontal: 15
    },
    cbdBadgeText: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        paddingHorizontal: 26.2
    },
    priceContainer: {
        flexDirection: 'row',
        flex: 1,
        // borderWidth: 2,
        // borderColor: 'purple'
    },
    priceText: {
        paddingLeft: 90,
        fontWeight: 'bold',
        fontSize: 15
    },
    noBadgePriceText : {
        paddingLeft: 170,
        fontWeight: 'bold',
        fontSize: 15
    }
})