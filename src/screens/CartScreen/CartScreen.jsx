import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {
    Text,
    ListItem
} from 'react-native-elements';

export default class CartScreen extends Component {
    render() {
        const { deets } = this.props;
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={deets}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <ListItem bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Subtitle>{item.brand}</ListItem.Subtitle>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                    <ListItem.Subtitle>Qty: {item.size}</ListItem.Subtitle>
                                
                                </ListItem.Content>
                                    <Text>${item.priceSell}</Text>
                                    <Text>{item.weight}g</Text>
                            </ListItem>
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
    }
})