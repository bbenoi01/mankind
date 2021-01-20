import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {
    Card,
    Divider,
    Text,
    ListItem,
    Avatar,
    Badge
} from 'react-native-elements';
import ProductList from '../../components/ProductList';

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
        // console.log('Suck it bitch', flower);

        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={this.handleGetFlower}
                />
                {/* <Text h2>
                    Flower Screen
                </Text> */}
                {/* <ProductList
                    content={flower}
                /> */}
                <FlatList
                    data={flower}
                    keyExtractor={item => item.categoryId}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('FlowerDetail', { item })}
                            >
                                <ListItem bottomDivider>
                                    <Avatar size='large' source={{ uri: item.croppedImage}}/>
                                    <ListItem.Content>
                                        {item.menuTitle ? (
                                            <ListItem.Title>{item.menuTitle}</ListItem.Title>
                                        ) : (
                                            <ListItem.Title>{item.productList[0].productName}</ListItem.Title>
                                        )}
                                        <ListItem.Subtitle>{item.shortDescription}</ListItem.Subtitle>
                                        {item.classifications[0] === "INDICA" ? (
                                            <Badge
                                                value={<Text style={styles.badgeText}>{item.classifications[0]}</Text>}
                                                status='primary'
                                                // containerStyle={{ width: 200}}
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
    badgeText: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        paddingHorizontal: 15
    }
})