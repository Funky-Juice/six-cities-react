import {connect} from 'react-redux';
import App from './app';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    user: state.user,
    offers: state.offers,
    isAuthorizationRequired: state.isAuthorizationRequired
  });
};

export default connect(mapStateToProps)(App);
