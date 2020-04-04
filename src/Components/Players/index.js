import { connect } from 'react-redux';
import Players from './Players';
import { addPlayer, randomise, quarterFinals } from '../../data/actions';

const mapStateToProps = (state) => {
    return {
        players: Object.values(state.players),
        pairings: Object.values(state.pairings)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleAddPlayer: (name) => dispatch(addPlayer(name)),
        handleRandomise: () => dispatch(randomise()),
        addToQF: () => dispatch(quarterFinals())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Players); 