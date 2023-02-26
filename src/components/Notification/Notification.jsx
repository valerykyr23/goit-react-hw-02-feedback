import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => <p className={styles.notification}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string,
}

export default Notification;