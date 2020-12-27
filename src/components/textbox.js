import React from 'react';
import PropTypes from 'prop-types';
import styles from './textbox.css';

export const Textbox = (props) =>
    <label className={styles.label}>
        <span className={styles.text}>{props.label}</span>
        <input className={styles.input} type={props.type}/>
    </label>;

Textbox.propTypes = {
    label: PropTypes.any.isRequired,
    type: PropTypes.string
};
Textbox.defaultProps = {
    type: 'text'
};
