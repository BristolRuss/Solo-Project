import { connect } from 'react-redux';
import PlayerTable from './PlayerTable';
import { randomise, quarterFinals, matchesUnderway } from '../../data/actions';

const mapStateToProps = (state) => {
    return {
        players: Object.values(state.players)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleRandomise: () => dispatch(randomise()),
        handleQF: () => dispatch(quarterFinals()),
        proceedMatches: (value) => dispatch(matchesUnderway(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTable); 