import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gifts.css';

const Gifts = (props) => {
  const {
    message,
    icons,
    account,
    account2
  } = props;

  return (
    <div className={styles.gifts}>
      <div className={styles.message}>{message}</div>
      <div className={styles.giftMethods}>
        <div className={styles['side-by-side']}>
          <div className={styles.side}>
            <img className={styles.icon} src={icons.cashInHand} alt='Plata en mano' />
            <div className={styles.title}>Cash</div>
          </div>
          <div className={styles.side}>
            <img className={styles.icon} src={icons.bankTransfer} alt='Transferencia' />
            <div>
              <div className={styles.title}>Transferencia bancaria</div>
              <div className={styles.accountInfoContainer}>
                <div className={styles.accountInfo}>
                  <span>Tipo:</span><span className={styles.accountData}>{account.tipo}</span>
                </div>
                <div className={styles.accountInfo}>
                  <span>Banco:</span><span className={styles.accountData}>{account.banco}</span>
                </div>
                <div className={styles.accountInfo}>
                  <span>Alias:</span><span className={styles.accountData}>{account.alias}</span>
                </div>
                <div className={styles.accountInfo}>
                  <span>CBU:</span><span className={styles.accountData}>{account.cbu}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.side}>
            <img className={styles.icon} src={icons.bankTransfer} alt='Transferencia' />
            <div>
              <div className={styles.title}>Transferencia bancaria</div>
              <div className={styles.accountInfoContainer}>
                <div className={styles.accountInfo}>
                  <span>Tipo:</span><span className={styles.accountData}>{account2.tipo}</span>
                </div>
                <div className={styles.accountInfo}>
                  <span>Banco:</span><span className={styles.accountData}>{account2.banco}</span>
                </div>
                <div className={styles.accountInfo}>
                  <span>Alias:</span><span className={styles.accountData}>{account2.alias}</span>
                </div>
                <div className={styles.accountInfo}>
                  <span>CBU:</span><span className={styles.accountData}>{account2.cbu}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.note}>{account.note}</div>
    </div>
  );
};

Gifts.propTypes = {
  message: PropTypes.string.isRequired,
  account: PropTypes.object.isRequired,
  account2: PropTypes.object.isRequired
}

export default Gifts;