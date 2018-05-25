import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({text}) => 
    <span style={{color:"#e03d3c"}}>{text}</span>


InlineError.PropTypes = {
    text: PropTypes.string.isRequired
}

export default InlineError;