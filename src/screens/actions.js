import mankindApi from '../api/mankindApi';
import { types } from '../types';

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
        mankindApi.get(`/${category}/page/0/pagesize/500/list?customerType=ADULT`)
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