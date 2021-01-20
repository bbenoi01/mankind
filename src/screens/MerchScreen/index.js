import { connect } from 'react-redux';
import MerchScreen from './MerchScreen';

function mapStoreToProps(store) {
    return {
        merch: store.app.merch
    }
}

export default connect(mapStoreToProps)(MerchScreen);