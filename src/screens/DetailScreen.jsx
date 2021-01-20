import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Text,
    Card,
    Divider
} from 'react-native-elements';

const DetailScreen = ({ navigation }) => {
    let content = navigation.getParam('item');

    return (
        <View style={styles.container}>
            {content ? (
                <View>
                    <Card.Title>{content.menuTitle}</Card.Title>
                    <Card.Image
                        source={{ uri: content.croppedImage }}
                        resizeMethod='auto'
                        resizeMode='center'
                    />
                </View>
            ): null}
        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        paddingHorizontal: 25
    }
})