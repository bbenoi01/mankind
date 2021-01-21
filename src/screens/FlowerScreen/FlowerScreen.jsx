import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {
    Text,
    ListItem,
    Avatar,
    Badge
} from 'react-native-elements';

import {
    getFlower
} from '../actions';

export default class FlowerScreen extends Component {
    
    handleGetFlower = () => {
        const { dispatch } = this.props;
        dispatch(getFlower());
    }

    render() {
        const { navigation, flower } = this.props;

        return (
            <View style={styles.container}>
                {flower.length === 0 ? (
                    <NavigationEvents
                        onWillFocus={this.handleGetFlower}
                    />
                ) : null}
                <FlatList
                    data={flower}
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
                                            {item.classifications[0] === "INDICA" ? (
                                                <Badge
                                                    value={<Text style={styles.badgeText}>{item.classifications[0]}</Text>}
                                                    status='primary'
                                                />
                                            ) : item.classifications[0] === "SATIVA" ? (
                                                <Badge
                                                    value={<Text style={styles.badgeText}>{item.classifications[0]}</Text>}
                                                    status='warning'
                                                />
                                            ) : item.classifications[0] === "HYBRID" ? (
                                                <Badge
                                                    value={<Text style={styles.badgeText}>{item.classifications[0]}</Text>}
                                                    status='success'
                                                />
                                            ) : null}
                                            <Text style={styles.priceText}>${item.productList[0].displayPriceSell}.00</Text>
                                            <Text style={styles.weightText}>/{item.productList[0].weight}g</Text>
                                        </View>
                                    </ListItem.Content>
                                </ListItem>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
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
    priceContainer: {
        flexDirection: 'row',
        flex: 1,
        // borderWidth: 2,
        // borderColor: 'purple'
    },
    priceText: {
        paddingLeft: 125,
        fontWeight: 'bold',
        fontSize: 15
    }
})