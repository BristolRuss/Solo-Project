import { connect } from 'react-redux';
import Header from './Header';
import { clear } from '../../data/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(clear()),
    }
}

export default connect(null, mapDispatchToProps)(Header); 