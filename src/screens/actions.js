import mankindApi from '../api/mankindApi';
import { types } from '../types';

export function getFlower() {
    return (dispatch) => {
        mankindApi.get('/flower/page/0/pagesize/20/list?customerType=ADULT')
            .then(res => {
                // console.log(res.data.productGrouplist);
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