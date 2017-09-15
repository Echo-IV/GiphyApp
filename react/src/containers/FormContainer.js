import Form from '../components/Form';
import { connect } from 'react-redux';
import { fetchGif } from '../actions/searchActions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ search }) => {
  return {
    query: search.query
  }
}

const mapDispatchToProps = {
  fetchGif
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
