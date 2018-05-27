import React from 'react';
import PropTypes from 'prop-types';

// This is the error text that will appear in red
const InlineError = ({text}) => 
    <span style={{color:"#e03d3c"}}>{text}</span>


InlineError.PropTypes = {
    text: PropTypes.string.isRequired
}

export default InlineError;