import React from 'react';

export default function If(props){
    return (
        props.statement &&
        <div>
            {props.children}
        </div>
    );
}