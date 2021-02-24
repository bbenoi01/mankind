import React from 'react';
import { View, StyleSheet } from 'react-native';

const CenterAndSpace = ({ children }) => {
    return (
        <View style={styles.centerandspace}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    centerandspace: {
        alignItems: 'center',
        margin: 15
    }
});

export default CenterAndSpace;