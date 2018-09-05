import React from 'react';
import { func, node } from 'prop-types';

/**
 * Button Component
 */
function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    /** onClick callback */
    onClick: func.isRequired,
    /** Button contents */
    children: node,
};

Button.defaultProps = {
    children: null,
};

export default Button;
