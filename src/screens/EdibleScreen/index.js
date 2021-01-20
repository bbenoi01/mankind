import { connect } from 'react-redux';
import EdibleScreen from './EdibleScreen';

function mapStoreToProps(store) {
    return {
        edible: store.app.edible
    }
}

export default connect(mapStoreToProps)(EdibleScreen);