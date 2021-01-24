import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';

function mapStoreToProps(store) {
    return {
        cartQty: store.app.cartQty,
        cart: store.app.cart
    }
}

export default connect(mapStoreToProps)(ShoppingCart);