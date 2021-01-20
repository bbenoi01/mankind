import { connect } from 'react-redux';
import FlowerScreen from './FlowerScreen';

function mapStoreToProps(store) {
    return {
        flower: store.app.flower
    }
}

export default connect(mapStoreToProps)(FlowerScreen);