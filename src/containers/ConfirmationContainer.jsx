import { connect } from 'react-redux';
import Confirmation from '../components/Confirmation';

const mapStateToProps = (state) => {
  const { confirmation } = state;
  return {
    ...confirmation,
  }
}

export default connect(
  mapStateToProps,
  null
)(Confirmation);