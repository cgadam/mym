import { connect } from 'react-redux'
import Salon from '../components/Salon'

const mapStateToProps = (state, props) => {
  const { salon, icons } = state;
  return {
    ...salon,
    icons,
  }
}

export default connect(
  mapStateToProps,
  null
)(Salon)