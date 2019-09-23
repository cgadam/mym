import { connect } from 'react-redux'
import Gifts from '../components/Gifts'

const mapStateToProps = (state, props) => {
  const { gifts, icons } = state;
  return {
    ...gifts,
    icons,
  }
}

export default connect(
  mapStateToProps,
  null
)(Gifts)