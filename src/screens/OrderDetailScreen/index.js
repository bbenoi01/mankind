import { connect } from 'react-redux';
import OrderDetailScreen from './OrderDetailScreen';

function mapStoreToProps(store) {
    return {
        orderDeets: store.app.orderDetails
    }
}

export default connect(mapStoreToProps)(OrderDetailScreen)