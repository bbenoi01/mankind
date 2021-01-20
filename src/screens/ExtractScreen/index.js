import { connect } from 'react-redux';
import ExtractScreen from './ExtractScreen';

function mapStoreToProps(store) {
    return {
        extract: store.app.extract
    }
}

export default connect(mapStoreToProps)(ExtractScreen);