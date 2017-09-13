import Form from '../components/Form';
import { connect } from 'react-redux';
import { fetchGif } from '../actions/searchActions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = {
  fetchGif
}

export default withRouter(connect("", mapDispatchToProps)(Form));
