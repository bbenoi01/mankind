import { connect } from 'react-redux';
import CartScreen from './CartScreen';

function mapStoreToProps(store) {
    return {
        deets: store.app.orderDetails.ticket.items
    }
}

export default connect(mapStoreToProps)(CartScreen);