import { connect } from 'react-redux';
import BeverageScreen from './BeverageScreen';

function mapStoreToProps(store) {
    return {
        beverage: store.app.beverage
    }
}

export default connect(mapStoreToProps)(BeverageScreen);