import { connect } from 'react-redux';
import CartridgeScreen from './CartridgeScreen';

function mapStoreToProps(store) {
    return {
        cartridge: store.app.cartridge
    }
}

export default connect(mapStoreToProps)(CartridgeScreen);