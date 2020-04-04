import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
    return {
        settingsSaved: state.settingsSaved,
        matchesUnderway: state.matchesUnderway
    }
}

export default connect(mapStateToProps)(App); 