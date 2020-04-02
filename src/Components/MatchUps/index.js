import { connect } from 'react-redux';
import MatchUps from './MatchUps';

const mapStateToProps = (state) => {
    return {
        players: Object.values(state.players),
        quarterFinals: Object.values(state.quarterFinals)
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchUps); 