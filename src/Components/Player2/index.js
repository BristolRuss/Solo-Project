import { connect } from 'react-redux';
import Player2 from './Player2';
import { handleIncrement2 } from '../../data/actions'

const mapStateToProps = (state) => {
    return {
        server: state.server,
        winner: state.winner,
        currentMatch: state.currentMatch,
        pairings: state.pairings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement2 : () => dispatch(handleIncrement2()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player2);