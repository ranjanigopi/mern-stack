import React from 'react';
import className from 'classname';
import styles from './card.css';
import PropTypes from 'prop-types';

export const Card = (props) =>
    <div
        className={className(styles.card, styles[`card-${props.depth}`])}
    >
        {props.children}
    </div>

Card.propTypes = {
    children: PropTypes.any.isRequired,
    depth: PropTypes.number
}

Card.defaultProps = {
    depth: 1
}
