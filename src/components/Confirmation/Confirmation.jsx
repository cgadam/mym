import React from 'react';
import PropTypes from 'prop-types';
import styles from './Confirmation.css';

const Confirmation = (props)=> {
  const {
    message,
    date,
    button,
  } = props;

  return (
    <div className={styles.confirmation}>
      <div className={styles.message}>{message}</div>
      <div className={styles.date}>{date.format('DD - MM - YYYY')}</div>
      <div className={styles.confirmationLink}>
        <a target='_blank' rel='noopener noreferrer' className={styles.button} href={button.link} >
          {button.text}
        </a>
      </div>
    </div>
  );
};

Confirmation.propTypes = {
  message: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  button: PropTypes.object.isRequired,
}

export default Confirmation;