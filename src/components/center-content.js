import React from 'react';
import styles from './center-content.css';
import PropTypes from 'prop-types';

export const CenterContent = (props) =>
    <div className={styles.center}>
        {props.children}
    </div>;

CenterContent.propTypes = {
    children: PropTypes.any.isRequired
};
