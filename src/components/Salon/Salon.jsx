import React from 'react';
import PropTypes from 'prop-types';
import styles from './Salon.css';

const Salon = (props)=> {
  const {
    name,
    location,
    time,
    time_to,
    photo,
    icons,
    note1,
    note2,
    note3
  } = props;

  const rightPanelStyles = [styles.side, styles.right, styles.salon];

  return ( 
    <div className={styles.module}>
      <div className={styles['center-module']}>
        <div className={styles['side-by-side']}>
          <div className={rightPanelStyles.join(' ')}>
            <div className={styles.salonText}>{name}</div>
            <div className={styles.salon_time}>{`${time.format('HH:mm')}hs - ${time_to.format('HH:mm')}hs `}</div>
            <div>
              <a target='_blank' rel='noopener noreferrer' className='location' href={location}>
                <img src={icons.gmaps} alt='Google Maps' />
              </a>
            </div>
          </div>
          <div className={styles.side}>
            <img src={photo} alt='Bosque de Piedras' />
          </div>
        </div>
      </div>
      <div className={styles['center-module']}>
        <div className={styles.note}>{note1}</div>
        <div className={styles.note}>{note2}</div>
        <div className={styles.note}>{note3}</div>
      </div>
    </div>
  );
};

Salon.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  time_to: PropTypes.object.isRequired,
  photo: PropTypes.string.isRequired,
  icons: PropTypes.object.isRequired,
  note1: PropTypes.string.isRequired,
  note2: PropTypes.string.isRequired,
  note3: PropTypes.string.isRequired,
}

export default Salon;