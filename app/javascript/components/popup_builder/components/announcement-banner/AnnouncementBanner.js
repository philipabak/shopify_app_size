import React from 'react';
import './AnnouncementBanner.scss';
import {Banner, Page} from "@shopify/polaris";
import constants from "../../utils/constants";
import localStorage from "../../utils/localStorage";

export default class AnnouncementBanner extends React.Component {

    constructor(props){
        super(props);

        this.storageKey = constants.localStorageKeys.announcement + '_' + this.props.announcementKey;

        this.state = {
            dismissed: true
        }
    }

    handleClose = () => {
        localStorage.write(this.storageKey, true);

        this.setState({
            dismissed: true
        });
    };

    componentDidMount() {
        this.setState({
            dismissed: localStorage.read(this.storageKey)
        });
    }

    render() {
        var classNames = require('classnames');

        return (
            <Page narrowWidth>
                <div className={classNames({
                    'cc-announcement-banner': true,
                    'cc-announcement-banner--in': (this.props.show && !this.state.dismissed)
                })}
                >
                    <Banner
                        title={this.props.title}
                        status="info"
                        onDismiss={this.handleClose}
                    >
                        {this.props.children}
                    </Banner>
                </div>
            </Page>
        );
    }
}