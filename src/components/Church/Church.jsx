import React from 'react';
import PropTypes from 'prop-types';
import styles from './Church.css';

const Church = (props)=> {
  const {
    rings,
    poem
  } = props;

  const rightPanelStyles = [styles.side, styles.right, styles.church];

  return (
    <div style={{
      backgroundColor: '#2e4a9e',
      textAlign: 'center'
    }}>
      <div className={styles['center-module']}>
        <div className={styles['side-by-side']}>
          <div className={rightPanelStyles.join(' ')}>
            <div>
              <img src={rings} alt='Anillos' />
            </div>
          </div>
          <div className={styles.side}>
            <div>
              <blockquote>
                <pre>
                  {poem.text}
                </pre>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

Church.propTypes = {
  rings: PropTypes.string.isRequired,
  poem: PropTypes.object.isRequired
}

export default Church;