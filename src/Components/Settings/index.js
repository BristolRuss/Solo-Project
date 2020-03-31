import { connect } from 'react-redux';
import Settings from './Settings';
import { save } from '../../data/actions';

const mapStateToProps = (state) => {
    return {
        target: state.target,
        alternate: state.alternate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormSubmit: (aim, switchOn) => dispatch(save(aim, switchOn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings); 