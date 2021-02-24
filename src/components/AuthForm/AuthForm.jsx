import React, { Component, Fragment } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import {
    Text,
    Button,
    Input
} from 'react-native-elements';
import {
    RadioButton
} from 'react-native-paper';
import Spacer from '../Spacer';
import {
    formatDate
} from '../../screens/actions';

export default class AuthForm extends Component {
    
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        show: false,
        birthday: null,
        customerType: ''
    }

    updateEmail = (email) => {
        this.setState({
            email
        })
    };

    updatePassword = (password) => {
        this.setState({
            password
        })
    };

    updateFirstName = (firstName) => {
        this.setState({
            firstName
        })
    };

    updateLastName = (lastName) => {
        this.setState({
            lastName
        })
    };

    updatePhone = (phone) => {
        this.setState({
            phone
        })
    };

    updateShowMode = () => {
        this.setState({
            show: true
        })
    };

    updateBirthday = (event, selectedDateTime) => {
        this.setState({
            birthday: selectedDateTime.toJSON(),
            show: false
        })
    };

    updateCustomerType = (customerType) => {
        this.setState({
            customerType
        })
    };

    handleSigninClick = () => {
        const { dispatch, signIn } = this.props;
        const { email, password } = this.state;
        const userData = {
            email,
            password
        }
        // dispatch(signIn(userData));
        this.setState({
            email: '',
            password: ''
        })
    };

    handleSignupClick = () => {
        const { dispatch, signUp } = this.props;
        const { firstName, lastName, email, phone, birthday, customerType } = this.state;
        const newUserData = {
            firstName,
            lastName,
            email,
            phone,
            birthday,
            customerType,
            addresses: []
        }
        console.log('new user', newUserData);
        // dispatch(signUp(newUserData));
        this.setState({
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            birthday: null,
            customerType:'',
        })
    };

    render() {
        const { errors, authType } = this.props;
        const { email, password, firstName, lastName, phone, show, birthday, customerType } = this.state;
        const formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        let birthDate;

        return (
            <Fragment>
                {authType === 'signup' ? (
                    <Fragment>
                            <Text
                                h4
                                style={{alignSelf: 'center'}}
                            >
                                Create An Account
                            </Text>
                            <Spacer/>
                        <ScrollView>
                            <Input
                                label='First Name (as it appears on your ID)'
                                value={firstName}
                                onChangeText={this.updateFirstName}
                                autoCapitalize='words'
                                autoCorrect={false}
                                required
                            />
                            <Input
                                label='Last Name (as it appears on your ID)'
                                value={lastName}
                                onChangeText={this.updateLastName}
                                autoCapitalize='words'
                                autoCorrect={false}
                            />
                            <Input
                                label='Email'
                                value={email}
                                onChangeText={this.updateEmail}
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                            {/* <Input
                                name='password'
                                secureTextEntry
                                label='Password'
                                value={password}
                                onChangeText={this.updatePassword}
                                autoCapitalize='none'
                                autoCorrect={false}
                            /> */}
                            <Input
                                label='Phone Number'
                                value={formattedPhone}
                                onChangeText={this.updatePhone}
                            />
                            <View style={styles.radioBtnView}>
                                <TouchableOpacity
                                    onPress={this.updateShowMode}
                                >
                                    <Text style={styles.datePicker}>
                                        Birthday
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.birthdayText}>
                                    {birthday !== null ? (
                                        formatDate(birthday, birthDate)
                                    ) : (
                                        null
                                    )}
                                </Text>
                            </View>
                            <Spacer/>
                            {show && (
                                <DateTimePicker
                                value={new Date().toLocaleDateString}
                                mode='date'
                                display="spinner"
                                onChange={this.updateBirthday}
                                />
                            )}
                            <RadioButton.Group name='customerType' onValueChange={this.updateCustomerType} value={customerType}>
                                <View style={styles.radioBtnView}>
                                    <RadioButton value="ADULT" color='green' />
                                    <Text style={styles.radioBtnText}>Adult Use</Text>
                                </View>
                                <View style={styles.radioBtnView}>
                                    <RadioButton value="MEDICAL" color='green' />
                                    <Text style={styles.radioBtnText}>Medical Use</Text>
                                </View>
                            </RadioButton.Group>
                            <Spacer>
                                {firstName === '' || lastName === '' || email === '' || phone === '' || birthday === '' || customerType === '' ? (
                                    <Button
                                        disabled
                                        buttonStyle={{ backgroundColor: 'green'}}
                                        title="Sign Up"
                                        onPress={this.handleSignupClick}
                                    />
                                ) : (
                                    <Button
                                        buttonStyle={{ backgroundColor: 'green'}}
                                        title="Sign Up"
                                        onPress={this.handleSignupClick}
                                    />
                                )}
                            </Spacer>
                        </ScrollView>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Input
                            label='Email'
                            value={email}
                            onChangeText={this.updateEmail}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Spacer/>
                        <Input
                            secureTextEntry
                            label='Password'
                            value={password}
                            onChangeText={this.updatePassword}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Spacer>
                        {email === '' || password === '' ? (
                            <Button
                                disabled
                                buttonStyle={{ backgroundColor: 'green'}}
                                title="Sign In"
                                onPress={this.handleSigninClick}
                            />
                        ) : (
                            <Button
                                buttonStyle={{ backgroundColor: 'green'}}
                                title="Sign In"
                                onPress={this.handleSigninClick}
                            />
                        )}
                        </Spacer>
                    </Fragment>
                )}
            </Fragment>
        );
    }
};

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red'
    },
    datePicker: {
        fontSize: 16,
        color: '#86939e',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    radioBtnView: {
        display: 'flex',
        flexDirection: 'row'
    },
    radioBtnText: {
        textAlignVertical: 'center'
    },
    birthdayText : {
        textAlignVertical: 'center',
        fontSize: 18,
        paddingLeft: 20
    },
    btn: {
        backgroundColor: 'green'
    }
});