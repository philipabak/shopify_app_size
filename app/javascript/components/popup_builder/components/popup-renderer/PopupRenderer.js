import React from 'react';
import { withTranslation } from 'react-i18next';

/**
 *
 * @param props: settings, content
 * @returns {*}
 * @constructor
 */
export default class PopupRenderer extends React.Component {
    dumpProps = (e) => {
        //The json of the popup state
        console.log(JSON.stringify({
            ...this.props.state
        }));

        //The html of the popup
        console.log(JSON.stringify(document.getElementById(e.currentTarget.id).outerHTML));
    }

    render() {
        return(
            <div>Super Popup Render!"</div>
        )
    }
}
