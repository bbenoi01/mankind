import React, { Component, Fragment } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {
    Text,
    Button,
    ListItem
} from 'react-native-elements';
import {
    RadioButton
} from 'react-native-paper';
import AuthForm from '../../components/AuthForm';
import CenterAndSpace from '../../components/CenterAndSpace';
import Spacer from '../../components/Spacer';
import {
    capitalize,
    userSignUp,
    userSignIn,
    userLogOut
    // signin,
    // clearErrors,
    // setAuthSignin
} from '../actions';

export default class AccountScreen extends Component {
    
    state = {
        authType: 'signin'
    }

    // handleOldError = () => {
    //     const { dispatch } = this.props;
    //     dispatch(setAuthSignin());
    //     dispatch(clearErrors());
    // }

    handleSigninToggle = () => {
        this.setState({
            authType: 'signin'
        })
    };

    handleSignupToggle = () => {
        this.setState({
            authType: 'signup'
        })
    };

    handleLogOut = () => {
        const { dispatch } = this.props;
        dispatch(userLogOut())
    }

    render() {
        const { navigation, authenticated, user } = this.props;
        const { authType } = this.state;

        return (
            <Fragment>
                {/* <NavigationEvents
                    onWillFocus={this.handleOldError}
                /> */}
                {authenticated === true ? (
                    <Fragment>
                        <Text style={styles.accountText}>
                            {capitalize(user.firstName)}'s Account
                        </Text>
                        <ListItem bottomDivider>
                            <ListItem.Title>Earned Points: {user.rewardPoints}</ListItem.Title>
                        </ListItem>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Orders')}
                        >
                            <ListItem bottomDivider>
                                <ListItem.Title>Orders</ListItem.Title>
                            </ListItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem bottomDivider>
                                <ListItem.Title>Addresses</ListItem.Title>
                            </ListItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem bottomDivider>
                                <ListItem.Title>Documents</ListItem.Title>
                            </ListItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem bottomDivider>
                                <ListItem.Title>Change Password</ListItem.Title>
                            </ListItem>
                        </TouchableOpacity>
                        <ListItem bottomDivider>
                            <ListItem.Title>Change Account Type</ListItem.Title>
                            <RadioButton.Group /*onValueChange={this.updateUserType}*/ value={user.customerType}>
                                <View style={styles.rowView}>
                                    <RadioButton value="MEDICAL" color='green' />
                                    <Text style={styles.radioBtnText}>Medical Use</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <RadioButton value="ADULT" color='green' />
                                    <Text style={styles.radioBtnText}>Adult Use</Text>
                                </View>
                            </RadioButton.Group>
                        </ListItem>
                        <CenterAndSpace>
                            <Button
                                buttonStyle={{ backgroundColor: 'green'}}
                                title="Log Out"
                                onPress={this.handleLogOut}
                            />
                        </CenterAndSpace>
                    </Fragment>
                ) : (
                    <View
                        style={styles.container}
                    >
                        <AuthForm
                            authType={authType}
                            signUp={userSignUp}
                            signIn={userSignIn}
                        />
                        {authType === 'signin' ? (
                            <TouchableOpacity
                                onPress={this.handleSignupToggle}
                            >
                                <CenterAndSpace>
                                    <Text style={styles.link}>
                                        Are you a new customer? Sign Up
                                    </Text>
                                </CenterAndSpace>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={this.handleSigninToggle}
                            >
                                <CenterAndSpace>
                                    <Text style={styles.link}>
                                        Already have an account? Sign In
                                    </Text>
                                </CenterAndSpace>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </Fragment>
        );
    }
};

const styles = StyleSheet.create({
    accountText: {
        paddingVertical: 15,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 60
    },
    link: {
        color: 'blue'
    },
    rowView: {
        display: 'flex',
        flexDirection: 'row'
    },
    radioBtnText: {
        textAlignVertical: 'center'
    }
});