import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {
    Text,
    ListItem
} from 'react-native-elements';

export default class TrackScreen extends Component {
    render() {
        const { deets } = this.props;

        return (
            <View style={styles.container}>
                <Text>
                    Tracking Info
                </Text>
                <FlatList
                    data={deets}
                    keyExtractor={item => item.date}
                    renderItem={({ item }) => {
                        return (
                            <ListItem>
                                <ListItem.Content>
                                    <Text>
                                        {item.date}
                                    </Text>
                                    <Text>
                                        {item.status}
                                    </Text>
                                    <Text>
                                        {item.description}
                                    </Text>
                                </ListItem.Content>
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