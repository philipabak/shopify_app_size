import React from 'react';
import './FeedbackBanner.scss';
import {Banner, Button, ButtonGroup, Page, TextStyle} from "@shopify/polaris";
import StarRatings from 'react-star-ratings';
import constants from "../../utils/constants";
import localStorage from "../../utils/localStorage";
import If from "../if/If";
import { withTranslation } from 'react-i18next';

class FeedbackBanner extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            rating: 0,
            dismissed: true,
            mode: '_Emoji'
        }
    }

    handleBannerDismiss = (ratingClicked) => {
        localStorage.write(constants.localStorageKeys.feedback, true);
        localStorage.write(constants.localStorageKeys.feedbackDismissDate, new Date());

        if(ratingClicked){
            localStorage.write(constants.localStorageKeys.feedbackReceived, true);
        }

        this.setState({
            dismissed: true
        });
    };

    handleClose = () => {
        ga('send', 'event', 'ReviewRating' + this.state.mode, 'Dismissed');
        this.handleBannerDismiss();
    };

    handleRatingClick = (rating) => {
        const { t } = this.props;
        ga('send', 'event', 'ReviewRating' + this.state.mode, 'StarClicked', rating + ' out of 5', rating);

        this.setState({
            rating: rating
        });

        this.handleBannerDismiss(true);

        if(rating < 3) {
            ShopifyApp.Modal.alert(t("Sorry to hear that! We're always looking to improve, so please give us your feedback at support@cleancanvas.co.uk. We appreciate all feedback."));
        }else {
            window.open(constants.appSettings.ratingLink);
        }
    };

    handleReviewClick = () => {
        ga('send', 'event', 'ReviewRating' + this.state.mode, 'LeaveReviewClicked');
        this.handleBannerDismiss();
        window.open(constants.appSettings.ratingLink);
    };

    componentDidMount() {
        let hasBeenDismissed = localStorage.read(constants.localStorageKeys.feedback);
        let feedbackReceived = localStorage.read(constants.localStorageKeys.feedbackReceived);

        // let feedbackMode = localStorage.read(constants.localStorageKeys.feedbackMode);
        //
        // if(feedbackMode === null){
        //     // //A/B test: get a random number, either 1 or 2
        //     // var randomNumber = Math.floor(Math.random() * 2) + 1 ;
        //     //
        //     // if(randomNumber === 1){
        //     //     feedbackMode = '';
        //     // }else{
        //     //     feedbackMode = '_Emoji';
        //     // }
        //
        //     feedbackMode = '';
        //
        //     localStorage.write(constants.localStorageKeys.feedbackMode, feedbackMode);
        // }

        if(hasBeenDismissed && !feedbackReceived){
            const dateDismissed = localStorage.read(constants.localStorageKeys.feedbackDismissDate);

            if(dateDismissed) {
                const getHoursAgo = (date) => {
                    const dt1 = new Date();
                    let diff = (date - dt1.getTime()) / 1000;
                    diff /= (60 * 60);
                    return Math.abs(Math.round(diff));
                }

                //Every 3 days, pop the message up again
                if (getHoursAgo(Date.parse(dateDismissed)) > 72) {
                    hasBeenDismissed = false;
                }
            }else{
                hasBeenDismissed = false;
            }
        }

        let feedbackMode = '';

        if(this.props.show && !hasBeenDismissed) {
            ga('send', 'event', 'ReviewRating' + feedbackMode, 'Opened');
        }

        this.setState({
            mode: feedbackMode
        });

        setTimeout(() => {
            this.setState({
                dismissed: hasBeenDismissed
            });
        },500);
    }

    render() {
        var classNames = require('classnames');
        const { t } = this.props;

        return (
            <div className={classNames({
                'cc-custom-banner': true,
                'cc-custom-banner--in': (this.props.show && !this.state.dismissed),
                'cc-custom-banner--emoji': (this.state.mode === '_Emoji'),
            })}
            >
                <Page narrowWidth>
                    <Banner
                        title={this.state.mode === '_Emoji' && this.state.rating  < 3 ? t("What do you think of the app?") :
                          t("Could you leave a quick 10 second review? Pretty please?")}
                        status="info"
                        onDismiss={this.handleClose}
                    >
                        {
                            this.state.mode !== '_Emoji' &&
                            <p><TextStyle>{ t("We're only a small app, but with big ambitions and your review would really! Click on a star to begin. Thank you :)") }</TextStyle></p>
                        }

                        {
                            this.state.mode !== '_Emoji' &&
                            <StarRatings
                                rating={this.state.rating}
                                starHoverColor="rgb(247, 222, 0)"
                                changeRating={this.handleRatingClick}
                                numberOfStars={5}
                                starDimension="30px"
                                starSpacing="3px"
                                name='rating'
                            />
                        }

                        {
                            this.state.mode === '_Emoji' &&
                            <div className="cc-custom-banner__emoji-ratings">
                                <If statement={this.state.rating === 0}>
                                    <div className="cc-custom-banner__emoji-ratings__rating"
                                        onClick={() => { this.handleRatingClick(1); }}>
                                        <img src="/images/emoji_1.png" alt="1 out of 5"/>
                                    </div>
                                    <div className="cc-custom-banner__emoji-ratings__rating"
                                        onClick={() => { this.handleRatingClick(2); }}>
                                        <img src="/images/emoji_2.png" alt="2 out of 5"/>
                                    </div>
                                    <div className="cc-custom-banner__emoji-ratings__rating"
                                        onClick={() => { this.handleRatingClick(3); }}>
                                        <img src="/images/emoji_3.png" alt="3 out of 5"/>
                                    </div>
                                    <div className="cc-custom-banner__emoji-ratings__rating"
                                        onClick={() => { this.handleRatingClick(4); }}>
                                        <img src="/images/emoji_4.png" alt="4 out of 5"/>
                                    </div>
                                    <div className="cc-custom-banner__emoji-ratings__rating"
                                        onClick={() => { this.handleRatingClick(5); }}>
                                        <img src="/images/emoji_5.png" alt="5 out of 5"/>
                                    </div>
                                </If>

                                <If statement={this.state.rating >= 3}>
                                    <div className="cc-custom-banner__plea">
                                        <p><TextStyle>{ t("We're only a small app, with big ambitions. Your review would help a lot.") }</TextStyle></p>
                                        <ButtonGroup>
                                            <Button primary onClick={this.handleReviewClick}>{ t("Leave a Review") }</Button>
                                            <Button plain onClick={this.handleBannerDismiss}>{ t("No, thanks") }</Button>
                                        </ButtonGroup>
                                    </div>
                                </If>
                            </div>
                        }
                    </Banner>
                </Page>
            </div>
        );
    }
}

export default withTranslation()(FeedbackBanner);
