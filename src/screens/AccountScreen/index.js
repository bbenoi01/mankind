import { connect } from 'react-redux';
import AccountScreen from './AccountScreen';

function mapStoreToProps(store) {
    return {
        errors: store.app.errors,
        authenticated: store.app.authenticated,
        user: store.app.userData
    }
}

export default connect(mapStoreToProps)(AccountScreen);