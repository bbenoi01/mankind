import { connect } from 'react-redux';
import OrdersScreen from './OrdersScreen';

function mapStoreToProps(store) {
    return {
        orders: store.app.orders[0].data
    }
}

export default connect(mapStoreToProps)(OrdersScreen);