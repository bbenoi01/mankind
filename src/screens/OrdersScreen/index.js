import { connect } from 'react-redux';
import OrdersScreen from './OrdersScreen';

function mapStoreToProps(store) {
    return {
        orders: store.app.orders
    }
}

export default connect(mapStoreToProps)(OrdersScreen);