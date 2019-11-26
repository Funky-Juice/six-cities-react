import {connect} from 'react-redux';
import App from './app';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    offers: state.offers
  });
};

export default connect(mapStateToProps)(App);
