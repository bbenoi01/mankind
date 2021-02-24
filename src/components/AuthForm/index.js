import { connect } from 'react-redux';
import AuthForm from './AuthForm';

function mapStoreToProps(store) {
    return {
        errors: store.app.errors
    }
}

export default connect(mapStoreToProps)(AuthForm);