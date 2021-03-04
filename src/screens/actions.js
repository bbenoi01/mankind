import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import mankindAuthApi from '../api/mankindAuthApi';
import mankindProductApi from '../api/mankindProductApi';
import { navigate } from '../util/navigationRef';
import { types } from '../types';

export function formatDate(selectedDate, output) {
    const formattedDate = selectedDate.split("T");
    output = dayjs(formattedDate[0]).format('MM/DD/YYYY');
    return output;
};

export function capitalize(string) {
    const str = string.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export function getCategoryContent(category) {
    let catTypes;
    switch (category) {
        case 'flower':
            catTypes = types.GET_FLOWER
            break;
        
        case 'cartridge':
            catTypes = types.GET_CARTRIDGE
            break;

        case 'edible':
            catTypes = types.GET_EDIBLE
            break;

        case 'extract':
            catTypes = types.GET_EXTRACT
            break;

        case 'misc':
            catTypes = types.GET_MISC
            break;

        case 'preroll':
            catTypes = types.GET_PREROLL
            break;

        case 'topical':
            catTypes = types.GET_TOPICAL
            break;

        case 'merch':
            catTypes = types.GET_MERCH
            break;

        case 'beverage':
            catTypes = types.GET_BEVERAGE
            break;

        case 'pill':
            catTypes = types.GET_PILL
            break;

        case 'tincture':
            catTypes = types.GET_TINCTURE
            break;
    
        default:
            break;
    }
    
    return (dispatch) => {
        mankindProductApi.get(`/${category}/page/0/pagesize/500/list?customerType=ADULT`)
            .then(res => {
                dispatch({
                    type: catTypes,
                    payload: res.data.productGrouplist
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err
                })
            })
    }
};

export function updateQty(newQty) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_QTY,
            payload: newQty
        })
    }
};

export function updateCartQty(currentQty) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_CART_QTY,
            payload: currentQty
        })
    }
};

export function addItemToCart(itemToAdd) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_CART,
            payload: itemToAdd
        })
    }
};

export function clearCart() {
    return (dispatch) => {
        dispatch({
            type: types.CLEAR_CART
        })
    }
};

export function userSignUp(newUserData) {
    return (dispatch) => {
        mankindAuthApi.post('/signup', newUserData)
            .then(res => {
                if(res.status === 200) {
                    console.log('signup res', res)
                }
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err
                })
            })
    }
};

export function userSignIn(userData) {
    return (dispatch) => {
        mankindAuthApi.post('/signin', userData)
            .then(async res => {
                if(res.status === 200) {
                    await AsyncStorage.setItem('token', res.data.tokens.token);
                    await AsyncStorage.setItem('tokenExp', res.data.tokens.tokenExpiredIn);
                    await AsyncStorage.setItem('refreshToken', res.data.tokens.refreshToken);
                    await AsyncStorage.setItem('refreshTokenExp', res.data.tokens.refreshTokenExpiredIn);
                    dispatch({
                        type: types.SET_AUTHENTICATED,
                        payload: res.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err
                })
            })
    }
};

export function userLogOut() {
    return async (dispatch) => {
        dispatch({
            type: types.SET_UNAUTHENTICATED
        });
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('tokenExp');
        await AsyncStorage.removeItem('refreshToken');
        await AsyncStorage.removeItem('refreshTokenExp');
    }
};

export function getUserOrders() {
    return (dispatch) => {
        mankindAuthApi.get('/customer/tickets/page/0')
            .then(res => {
                dispatch({
                    type: types.GET_ORDERS,
                    payload: res.data.data
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err
                })
            })
    }
};

export function getOrderDetails(orderId) {
    return (dispatch) => {
            dispatch({
                type: types.GET_ORDER_DETAILS,
                payload: mankindAuthApi.get(`/customer/tickets/${orderId}/details`)
            })
            .then(
                navigate('OrderDetails')
            )
            .catch(err => {
                console.log('Error', err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err
                })
            })
    }
};