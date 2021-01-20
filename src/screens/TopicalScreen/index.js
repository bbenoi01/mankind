import { connect } from 'react-redux';
import TopicalScreen from './TopicalScreen';

function mapStoreToProps(store) {
    return {
        topical: store.app.topical
    }
}

export default connect(mapStoreToProps)(TopicalScreen);