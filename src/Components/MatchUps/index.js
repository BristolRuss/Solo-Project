import { connect } from 'react-redux';
import MatchUps from './MatchUps';
import { semiFinals, Final } from '../../data/actions';

const mapStateToProps = (state) => {
    return {
        players: Object.values(state.players),
        pairings: Object.values(state.pairings),
        roundsCompleted: state.roundsCompleted
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleSemiFinals: () => dispatch(semiFinals()),
        handleFinal: () => dispatch(Final())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchUps); 