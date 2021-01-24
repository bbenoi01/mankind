import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';

function mapStoreToProps(store) {
    return {
        cartQty: store.app.cartQty
    }
}

export default connect(mapStoreToProps)(ShoppingCart);