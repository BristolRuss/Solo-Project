import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
    return {
        settingsSaved: state.settingsSaved
    }
}

export default connect(mapStateToProps)(App); 