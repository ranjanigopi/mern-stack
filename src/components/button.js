import React from 'react';
import className from 'classname';
import styles from './button.css';
import PropTypes from 'prop-types';

export const Button = ({Component, children, type, ...props}) =>
    <Component
        className={className(styles.btn, styles[type])}
        {...props}
    >
        {children}
    </Component>;

Button.propTypes = {
    Component: PropTypes.any,
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['primary', 'outline'])
};
Button.defaultProps = {
    Component: 'button'
}
