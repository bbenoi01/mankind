import { connect } from 'react-redux';
import MiscScreen from './MiscScreen';

function mapStoreToProps(store) {
    return {
        misc: store.app.misc
    }
}

export default connect(mapStoreToProps)(MiscScreen);