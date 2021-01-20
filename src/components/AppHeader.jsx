import React, { Component } from 'react';
import {
    Header
} from 'react-native-elements';

export default class AppHeader extends Component {
    render() {
        return (
            <Header
                centerComponent={{ text: 'ManKind Cannibis', style: { color: '#f5f5f5' } }}
                containerStyle={{ backgroundColor: 'green' }}
            />
        );
    }
}