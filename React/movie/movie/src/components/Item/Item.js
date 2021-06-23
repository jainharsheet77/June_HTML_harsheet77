import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';

const Item = () => (
  <div className={styles.Item}>
    Item Component
  </div>
);

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
