import { connect } from 'react-redux';
import Players from './Players';
import { addPlayer, randomise } from '../../data/actions';

const mapStateToProps = (state) => {
    return {
        players: Object.values(state.players)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleAddPlayer: (name) => dispatch(addPlayer(name)),
        handleRandomise: () => dispatch(randomise())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Players); 