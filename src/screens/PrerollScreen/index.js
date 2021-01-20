import { connect } from 'react-redux';
import PrerollScreen from './PrerollScreen';

function mapStoreToProps(store) {
    return {
        preroll: store.app.preroll
    }
}

export default connect(mapStoreToProps)(PrerollScreen);