import mankindApi from '../api/mankindApi';
import { types } from '../types';

export function getFlower() {
    return (dispatch) => {
        mankindApi.get('/flower/page/0/pagesize/500/list?customerType=ADULT')
            .then(res => {
                dispatch({
                    type: types.GET_FLOWER,
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

export function getCartridge() {
    return (dispatch) => {
        mankindApi.get('/cartridge/page/0/pagesize/500/list?customerType=ADULT')
            .then(res => {
                dispatch({
                    type: types.GET_CARTRIDGE,
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