import { connect } from 'react-redux';
import Player1 from './Player1';
import { handleIncrement1 } from '../../data/actions'

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
        handleIncrement1 : () => dispatch(handleIncrement1()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player1);