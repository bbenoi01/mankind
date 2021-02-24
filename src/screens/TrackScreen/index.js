import { connect } from 'react-redux';
import TrackScreen from './TrackScreen';

function mapStoreToProps(store) {
    return {
        deets: store.app.orderDetails.history
    }
}

export default connect(mapStoreToProps)(TrackScreen);