import React from 'react';
import './ImageRadioButton.scss';
import Utils from "../../utils/Utils";

export default function ImageRadioButton(props){
    var classNames = require('classnames');

    return (
      <div className={classNames({
          'cc-image-radio-button': true,
          'cc-image-radio-button--checked': props.checked,
          'cc-image-radio-button--inset': props.inset,
        })}

        style={{
           backgroundColor: Utils.hsbToRgb(props.backgroundColor ? props.backgroundColor : {"hue":224,"saturation":0,"brightness":0.85,"alpha":1}),
           backgroundImage:`url('${props.image}')`
        }}
       >
          {
              props.position &&
              <div className={`cc-image-radio-button__inner--${props.position}`}
                   style={{
                       backgroundColor: Utils.hsbToRgb(props.foregroundColor ? props.foregroundColor : {
                           "hue": 157,
                           "saturation": 0.1875,
                           "brightness": 0.2,
                           "alpha": 1
                       })
                   }}
              ></div>
          }

          {props.children}
      </div>
    );
}