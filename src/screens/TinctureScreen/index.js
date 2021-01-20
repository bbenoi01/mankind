import { connect } from 'react-redux';
import TinctureScreen from './TinctureScreen';

function mapStoreToProps(store) {
    return {
        tincture: store.app.tincture
    }
}

export default connect(mapStoreToProps)(TinctureScreen);