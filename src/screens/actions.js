import mankindAuthApi from '../api/mankindAuthApi';
import mankindProductApi from '../api/mankindProductApi';
import dayjs from 'dayjs';
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
}

export function updateQty(newQty) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_QTY,
            payload: newQty
        })
    }
}

export function updateCartQty(currentQty) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_CART_QTY,
            payload: currentQty
        })
    }
}

export function addItemToCart(itemToAdd) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_CART,
            payload: itemToAdd
        })
    }
}

export function clearCart() {
    return (dispatch) => {
        dispatch({
            type: types.CLEAR_CART
        })
    }
}

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
}

export function userSignIn(userData) {
    return (dispatch) => {
        mankindAuthApi.post('/signin', userData)
            .then(res => {
                if(res.status === 200) {
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
}

export function userLogOut() {
    return (dispatch) => {
        dispatch({
            type: types.SET_UNAUTHENTICATED
        })
    }
}



// addresses: []
// birthday: "1976-02-20T00:00:00.000Z"
// customerType: "ADULT"
// email: "james.sawyer.ford5@gmail.com"
// firstName: "James"
// lastName: "Ford"
// phone: "6198526647"