import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

const ProductList = ({ content }) => {
    const { navigation } = this.props;
    
    return (
        <FlatList
            data={content}
            keyExtractor={item => item.categoryId}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('FlowerDetail', { item })}
                    >
                        <Text h4>
                            {item.menuTitle}
                        </Text>
                    </TouchableOpacity>
                )
            }}
        />
    );
};

export default ProductList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})