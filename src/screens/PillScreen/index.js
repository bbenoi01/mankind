import { connect } from 'react-redux';
import PillScreen from './PillScreen';

function mapStoreToProps(store) {
    return {
        pill: store.app.pill
    }
}

export default connect(mapStoreToProps)(PillScreen);