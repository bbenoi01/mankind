import { connect } from 'react-redux';
import DetailScreen from './DetailScreen';

function mapStoreToProps(store) {
    return {
        qty: store.app.qtyToAdd,
        cart: store.app.cart
    }
}

export default connect(mapStoreToProps)(DetailScreen);