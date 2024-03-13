import React from 'react';
import './UpgradeModal.scss';
import {Modal} from "@shopify/polaris";
import Api from "../../utils/Api";
import {Loading, Redirect} from '@shopify/app-bridge/actions';
import createApp from "@shopify/app-bridge";
import { withTranslation } from 'react-i18next';


class UpgradeModal extends React.Component {

    constructor(props) {
        super(props);

        this.api = new Api(this.props.schema);

        this.state = {
            openModal: false,
            isDowngrade: false,
            countdown: 3,
            disableButtons: false
        }

        const data = document.getElementById('shopify-app-init').dataset;
        const app = createApp ({

            apiKey: data.apiKey,

            shop: data.shopOrigin.replace('https://',''),

            shopOrigin: data.shopOrigin.replace('https://',''),
            //forceRedirect: true,
            host: data.host,

        });


        this.redirect = Redirect.create(app);
        this.loading = Loading.create(app);


    }

    componentDidMount() {
        const { modalRef } = this.props;
        modalRef(this);
      }
      componentWillUnmount() {
       const { modalRef } = this.props;
        modalRef(undefined);
      }

    handleClose = () => {
        // ga('send', 'event', this.state.isDowngrade ? 'DowngradeModal' : 'UpgradeModal', 'Dismissed');

        this.setState({
            openModal: false
        })
    };


    handleOpen = (additionalText, isDowngrade) => {
        // ga('send', 'event', isDowngrade ? 'DowngradeModal' : 'UpgradeModal', 'Opened');

        this.setState({
            openModal: true,
            isDowngrade,
            additionalText: additionalText ? additionalText : null
        })
    };

    handleChangePlanClick = () => {
        // ga('send', 'event', this.state.isDowngrade ? 'DowngradeModal' : 'UpgradeModal', this.state.isDowngrade ? 'DoDowngrade' : 'DoUpgrade');

        this.setState({
            disableButtons: true
        });

        //ShopifyApp.Bar.loadingOn();
        this.loading.dispatch(Loading.Action.START);

        if (this.state.isDowngrade) {
            this.api.plan.downgrade()
                .then(response => {
                    if (response && response.success){
                        this.loading.dispatch(Loading.Action.START);
                        //window.location.href = app.getWindowLocation().origin + "/?cc_plan_change=1";
                        //this.redirect.dispatch(Redirect.Action.REMOTE, response.message.confirmation_url);
                        //let redirLoc = parent.location.href;
                        //this.redirect.dispatch(Redirect.Action.REMOTE,redirLoc);
                        this.loading.dispatch(Loading.Action.STOP);
                        location.reload();


                    } else {
                        // ga('send', 'event', 'DowngradeModal', 'ErrorOnDowngrade');
                    }
                });
        } else {
            this.api.plan.upgrade()
                .then(response => {
                    if (response && response.success && response.message.confirmation_url) {
                        //ShopifyApp.remoteRedirect(response.message.confirmation_url);
                        this.redirect.dispatch(Redirect.Action.REMOTE, response.message.confirmation_url);


                    } else {
                        // ga('send', 'event', 'UpgradeModal', 'ErrorOnUpgrade - ' + response.message);
                    }
                });
        }

    };

    render() {
        const { t } = this.props;
        return (
            <Modal
                open={this.state.openModal}
                onClose={this.handleClose}
                title={this.state.isDowngrade ? t("Change to Free Plan") : t('Upgrade Today!')}
                primaryAction={{
                    content: this.state.isDowngrade ? t('I understand, change to the Free Plan') : t('Upgrade Now'),
                    onAction: this.handleChangePlanClick,
                    disabled: this.state.disableButtons
                }}
                secondaryActions={[
                    {
                        content: t('Cancel'),
                        onAction: this.handleClose,
                        disabled: this.state.disableButtons
                    },
                ]}
            >
                <Modal.Section>
                    {
                        this.state.isDowngrade &&
                        <div className="cc-upgrade-modal cc-upgrade-modal--downgrade">
                            <p>{ t("Are you sure you want to change to the free plan?") }</p>

                            <ol>
                                <li>
                                    { t("downgrade_changes", {free_tier_chart_count_max: this.props.schema.FREE_TIER_CHART_COUNT_MAX, label: t('label_plural')}) }
                                </li>
                                <li>
                                    { t("downgrade_changes_2", {label: this.props.schema.labelPlural}) }
                                </li>
                                <li>
                                    { t("downgrade_changes_3", {label: this.props.schema.labelPlural}) }
                                </li>
                            </ol>

                        </div>
                    }

                    {
                        !this.state.isDowngrade &&
                        <div className="cc-upgrade-modal cc-upgrade-modal--upgrade">

                            {
                                this.state.additionalText &&
                                <p><strong>{this.state.additionalText}</strong><br/><br/></p>
                            }

                            <p>{ t("Why upgrade?") }</p>

                            <ul>
                                <li>{ t("Get unlimited size charts / size guides")}</li>
                                <li>{ t("Remove the 'POWERED BY CLEAN SIZE CHARTS' watermark") }</li>
                                <li>{ t("One-click Google Analytics integration - track clicks and impressions")}</li>
                                <li>{ t("Fully customize your size charts with CSS")}</li>
                                <li>{ t("Display size charts anywhere on your product page")}</li>
                                <li>{ t("Bulk edit your size charts via CSV (coming soon)")}</li>
                                <li>{ t("Advanced analytics dashboard - more than just impressions and clicks (coming soon)")}</li>
                                <li>{ t("Create inline tables - no pop ups required")}</li>
                                <li dangerouslySetInnerHTML={
                                    {__html: t('Get $50.00 in free development at <a href="https://taskhusky.com">TaskHusky.com</a>', {interpolation: {escapeValue: false}}) }
                                } />

                            </ul>

                            <br/>
                            <br/>
                            <p className="last">{ t("all_for_just", {amount: parseFloat(process.env.RECURRING_CHARGE_AMOUNT)}) }</p>
                        </div>
                    }

                </Modal.Section>
            </Modal>
        )
    }
}

export default withTranslation()(UpgradeModal);
