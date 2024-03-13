import React from 'react';

/**
 *
 * @param props: settings, content
 * @returns {*}
 * @constructor
 */
export default class TriggerRenderer extends React.Component {
    dumpProps = (e) => {
        //The json of the popup state
        console.log(JSON.stringify({
            ...this.props.state
        }));

        //The html of the popup
        console.log(JSON.stringify(document.getElementById(e.currentTarget.id).outerHTML));
    };

    render() {
        return(
            <div>Super Trigger Render!</div>
        )
    }
}