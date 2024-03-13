import React from 'react';
import './PlanChangeBanner.scss';
import {Banner} from "@shopify/polaris";
import User from "../../utils/User";
import { withTranslation } from 'react-i18next';

class PlanChangeBanner extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { t } = this.props;
        return (
            <div className="cc-plan-change-banner">
                <Banner status="success">
                    { t("you_are_on_plan", {plan: User.profile.isPremium ? 'premium' : 'free' }) }
                </Banner>
            </div>
        );
    }
}

export default withTranslation()(PlanChangeBanner);
