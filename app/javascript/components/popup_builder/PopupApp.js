import React, {Suspense} from 'react';
import '@shopify/polaris/styles.css';
//import '@shopify/polaris/dist/styles.css'
//import '@shopify/polaris/build/esm/styles.css'
import {AppProvider, Frame } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import './scss/global.scss';
import PopupBuilder from "./components/popup-builder/PopupBuilder";
import SizeChartContentBuilder from "./instances/size-chart/SizeChartContentBuilder";
import SizeChartPopupRenderer from "./instances/size-chart/SizeChartPopupRenderer";
import SizeChartInlineRenderer from "./instances/size-chart/SizeChartInlineRenderer";
import schema from "./utils/schema";
import SizeChartTriggerRenderer from "./instances/size-chart/SizeChartTriggerRenderer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopupListing from "./components/popup-listing/PopupListing";
import appRoutes from "./utils/appRoutes";
import CustomLink from "./components/custom-link/CustomLink";
import Utils from "./utils/Utils";
import User from "./utils/User";
import Cookie from "./utils/Cookie";
import constants from "./utils/constants";
import store from "./utils/store";
import { withTranslation } from 'react-i18next';

import createApp from "@shopify/app-bridge";
import { Toast, AppLink} from '@shopify/app-bridge/actions';
import {NavigationMenu} from '@shopify/app-bridge/actions';

class PopupApp extends React.Component {
    constructor(props) {
        super();
        const { t } = props;

        window.titleBarOptions = {
          title: 'Home',
        };

        this.state = {
            content: {},
            loading: true
        };
        const data = document.getElementById('shopify-app-init').dataset;

        this.app = createApp ({
            apiKey: data.apiKey,
            shop: data.shopOrigin.replace('https://',''),
            shopOrigin: data.shopOrigin.replace('https://',''),
            host: data.host,
        });

        const settingsLink = AppLink.create(this.app, {
          label: 'Settings',
          destination: '/settings',
        });

        NavigationMenu.create(this.app, {
          items: [settingsLink],
        });

        /*
        Thanks to CORS policy... this does not work.

        const result =  axios.post(data.shopOrigin + '/admin/api/2022-04/graphql.json')
            .then(
                    console.log(result.data)
            )
            */

        this.toastOptions = {
            message: t("This app may not work correctly with this version of Safari. If you encounter any issues, please use another browser."),
            duration: 5000,
        };
        this.toastNotice = Toast.create(this.app, this.toastOptions);

        this.schema = schema.sizeChart;
    }

    componentDidMount() {
        const { t } = this.props;
        //Read the session cookie into the store
        let toastOptions = {
            message: t("This app may not work correctly with this version of Safari. If you encounter any issues, please use another browser."),
            duration: 5000,
        };
        let toastNotice = Toast.create(this.app, toastOptions);
        const sessionCookieValue = Cookie.read(constants.cookieKeys.session);
        if(sessionCookieValue){
            console.log('Got session cookie', sessionCookieValue);
            store.sessionCookie = sessionCookieValue;
        }else{
            console.warn('Unable to find cookie: ' + constants.cookieKeys.session);
        }

        //Get the user profile
        User.setProfile(this.props);

        this.setState({
            loading: false
        });

        if (Utils.browserIsSafari() && !window.flashedSafariMessage) {
            window.flashedSafariMessage = true;
            //ShopifyApp.flashNotice("This app may not work correctly with this version of Safari. If you encounter any issues, please use another browser.");
            toastNotice.dispatch(Toast.Action.SHOW);
        }
    }

    render() {
        const { t } = this.props;
        return (
            <AppProvider i18n={enTranslations} linkComponent={CustomLink}>
                {
                    !this.state.loading &&
                    <Frame>
                                                            <Suspense fallback="...">
                        <Router>
                            <Switch>
                                {/*This weird match thing is to pass the ID property down to PopupBuilder*/}
                                <Route path={`${appRoutes.createPopupPage}/:id`} render={({match}) => (
                                    <PopupBuilder
                                        schema={this.schema}
                                        content={this.state.content}
                                        contentBuilder={SizeChartContentBuilder}
                                        popupRenderer={SizeChartPopupRenderer}
                                        triggerRenderer={SizeChartTriggerRenderer}
                                        inlineRenderer = {SizeChartInlineRenderer}
                                        id={match.params.id}
                                    />
                                )}/>
                                <Route path={appRoutes.createPopupPage}>
                                    <PopupBuilder
                                        schema={this.schema}
                                        content={this.state.content}
                                        contentBuilder={SizeChartContentBuilder}
                                        popupRenderer={SizeChartPopupRenderer}
                                        triggerRenderer={SizeChartTriggerRenderer}
                                        inlineRenderer = {SizeChartInlineRenderer}
                                    />
                                </Route>
                                <Route path={appRoutes.dashboardPage} exact>
                                <Suspense fallback="...">
                                    <PopupListing schema={this.schema}/>
                                    </Suspense>
                                </Route>
                            </Switch>
                        </Router>
                        </Suspense>
                    </Frame>
                }

            </AppProvider>
        );
    }
}

export default withTranslation()(PopupApp);
