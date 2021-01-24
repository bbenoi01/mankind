import { types } from './types';

const INITIAL_STATE = {
    flower: [],
    cartridge: [],
    edible: [],
    extract: [],
    misc: [],
    preroll: [],
    topical: [],
    merch: [],
    beverage: [],
    pill: [],
    tincture: [],
    qtyToAdd: 1,
    cartQty: null,
    cart: [],
    errors: {}
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case (types.GET_FLOWER): {
            return {
                ...state,
                flower: payload
            }
        }

        case (types.GET_CARTRIDGE): {
            return {
                ...state,
                cartridge: payload
            }
        }

        case (types.GET_EDIBLE): {
            return {
                ...state,
                edible: payload
            }
        }

        case (types.GET_EXTRACT): {
            return {
                ...state,
                extract: payload
            }
        }

        case (types.GET_MISC): {
            return {
                ...state,
                misc: payload
            }
        }

        case (types.GET_PREROLL): {
            return {
                ...state,
                preroll: payload
            }
        }

        case (types.GET_TOPICAL): {
            return {
                ...state,
                topical: payload
            }
        }

        case (types.GET_MERCH): {
            return {
                ...state,
                merch: payload
            }
        }

        case (types.GET_BEVERAGE): {
            return {
                ...state,
                beverage: payload
            }
        }

        case (types.GET_PILL): {
            return {
                ...state,
                pill: payload
            }
        }

        case (types.GET_TINCTURE): {
            return {
                ...state,
                tincture: payload
            }
        }

        case (types.UPDATE_QTY): {
            return {
                ...state,
                qtyToAdd: payload
            }
        }

        case (types.UPDATE_CART_QTY): {
            return {
                ...state,
                cartQty: payload
            }
        }

        case (types.UPDATE_CART): {
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        }

        case (types.CLEAR_CART): {
            return {
                ...state,
                cart: [],
                cartQty: null
            }
        }

        case (types.SET_ERRORS): {
            return {
                ...state,
                errors: payload
            }
        }

        case (types.CLEAR_ERRORS): {
            return {
                ...state,
                errors: {}
            }
        }

        default:
            return state;
    }
};