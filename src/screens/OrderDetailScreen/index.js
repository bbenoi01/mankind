import { connect } from 'react-redux';
import OrderDetailScreen from './OrderDetailScreen';

function mapStoreToProps(store) {
    return {
        details: store.app.orderDetails,
        loading: store.app.loading
    }
}

export default connect(mapStoreToProps)(OrderDetailScreen);