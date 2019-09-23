import { connect } from 'react-redux'
import Church from '../components/Church'

const mapStateToProps = (state, props) => {
  const { church, icons } = state;
  return {
    ...church,
    icons,
  }
}

export default connect(
  mapStateToProps,
  null
)(Church)