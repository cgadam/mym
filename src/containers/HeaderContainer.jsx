import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state, props) => {
  const { header, church, novios } = state;
  const { images, text, marquesina } = header;
  const { time } = church;
  const { novio, novia } = novios;
  return {
    images,
    text,
    date: time,
    novio,
    novia,
    marquesina,
  }
}

export default connect(
  mapStateToProps,
  null
)(Header)