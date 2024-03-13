import React from 'react';
import './CustomLabel.scss';

export default function CustomLabel(props){
    return (
      <p className={`
            cc-custom-label
            ${props.spacing === 'tight' ? 'cc-custom-label--spacing-tight' : ''}
            ${props.spacing === 'loose' ? 'cc-custom-label--spacing-loose' : ''}
      `}>
          {props.children}
      </p>
    );
}