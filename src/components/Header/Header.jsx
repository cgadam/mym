import React, { Fragment } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import styles from './Header.css';

const Header = (props) => {
  const {
    images,
    text,
    marquesina,
    novio,
    novia
  } = props;

  var settings = {
    fade: true,
    arrows: false,
    speed: 300,
    autoplay: true,
  };
  const slidesImages = images.map((image, index) => {
    return (
      <div key={`header-image-${index}`}>
        <div className={styles.slide} style={{backgroundImage: `url('${image}')`}}></div>
      </div>
    );
  });
  return (
    <Fragment>
      <div className={styles.hero}>
        <div className={styles.center}>
          <div className={styles.message}>{text}</div>
        </div>
        <div className={styles.slider}>
          <Slider {...settings}>
            { slidesImages }
          </Slider>
        </div>
        <div className={styles.novios}>
          <div className={styles.novia}>{`${novia}`}</div>
          <div>{`&`}</div>
          <div className={styles.novio}>{`${novio}`}</div>
        </div>
      </div>
      <div className={styles.header}>
        <img className={styles.marquesina} src={marquesina} alt='9 de Enero' />
      </div>
    </Fragment>
  );
};

Header.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string,
  novio: PropTypes.string.isRequired,
  novia: PropTypes.string.isRequired,
  marquesina: PropTypes.string.isRequired,
}

export default Header;
