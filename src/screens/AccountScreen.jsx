import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text h2>
                Account Screen
            </Text>
        </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})