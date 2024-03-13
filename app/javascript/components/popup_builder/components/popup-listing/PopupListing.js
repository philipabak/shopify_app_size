import React from 'react';
import {
    Badge,
    Card,
    EmptyState,
    FooterHelp,
    Layout,
    Link,
    Page,
    ResourceItem,
    ResourceList,
    SkeletonBodyText,
    SkeletonPage,
    TextStyle,
    DisplayText,
    Button,
    TextField,
    Stack
} from "@shopify/polaris";
import createApp from '@shopify/app-bridge';
import {Modal, TitleBar, Button as ABButton, Toast} from '@shopify/app-bridge/actions';
import If from "../if/If";
import Api from "../../utils/Api";
import appRoutes from "../../utils/appRoutes";
import Moment from 'react-moment';
import 'moment-timezone';
import RecommendedStuff from "../recommended-stuff/RecommendedStuff";
import "./PopupListing.scss";
import Utils from "../../utils/Utils";
import User from "../../utils/User";
import UpgradeModal from "../upgrade-modal/UpgradeModal";
import { withTranslation } from 'react-i18next';

class PopupListing extends React.Component {

    constructor(props) {
        super(props);
        const { t } = props;
        this.api = new Api(this.props.schema);

        const data = document.getElementById('shopify-app-init').dataset;
        this.app = createApp ({
            apiKey: data.apiKey,
            //shop: data.shopOrigin,
            // shopOrigin: data.shopOrigin,
            shop: data.shopOrigin.replace('https://',''),
            shopOrigin: data.shopOrigin.replace('https://',''),
            host: data.host,
            //forceRedirect: true
        });


        this.state = {
            loading: true,
            reloading: false,
            popups: [],
            filteredPopups:[],
            rating: 0,
            searchValue:""
        };


        this.titleBarOptions = {
            title: 'Home',
        };
        this.myTitleBar = TitleBar.create(this.app, titleBarOptions);
        this.okButton = ABButton.create(this.app, {label: t("are_you_sure_delete", {name: name}) });
        this.cancelButton = ABButton.create(this.app, {label: 'Cancel'});
        this.cancelButton.subscribe(ABButton.Action.CLICK, () => {
            // Do something with the click action
            this.myModal.dispatch(Modal.Action.CLOSE);
        });

        this.modalOptions = {
            title: `Delete ${t('label')}`,
            message: t("are_you_sure_delete", {name: name}),
            style: "danger",
            footer: {
                buttons: {
                    primary: this.okButton,
                    secondary: [this.cancelButton],
                },
            },
        };
        this.myModal = Modal.create(this.app, this.modalOptions);
    }

    reloadPopups = () => {
        this.api.popups.get()
            .then(data => {
                this.setState({
                    popups: data.results,
                    filteredPopups: data.results,
                    reloading: false
                });
            });
    };

    handleChangePlanClick = (e, isDowngrade) => {
        this.upgradeModal.handleOpen(null, isDowngrade);
    };

    handleSearchInput = (e) => {
        this.setState({
                searchValue : e
                });
        console.log(this.state.popups);
        if(e===""){
            this.state.filteredPopups = this.state.popups
        }else if(e===undefined){
            this.state.filteredPopups = this.state.popups
        }else{
            this.state.filteredPopups = this.state.popups.filter(
                (input) =>
                {


                    let found = false;
                    if(input.name.toLowerCase().match(e.toLowerCase()))
                    {
                        return true;
                    }

                    if(input.hasOwnProperty('state_store')) {
                        console.log(input.state_store);
                        if (input.state_store.hasOwnProperty('conditions')) {

                            if (input.state_store.conditions.hasOwnProperty('products')) {
                               input.state_store.conditions.products.forEach(element => {
                                    if (element.title.toLowerCase().match(e.toLowerCase())) {
                                        found =  true;
                                    }
                                    if (element.mid !== undefined && element.mid.toLowerCase().match(e.toLowerCase())) {
                                       found =  true;
                                    }

                                })
                                console.log(found);
                               if(found){
                                   return found;
                               }

                            }

                            if (input.state_store.conditions.hasOwnProperty('collections')) {
                                input.state_store.conditions.collections.forEach(element => {
                                    if (element.title.toLowerCase().match(e.toLowerCase())) {
                                        found = true;
                                    }


                                })
                                console.log(found);
                                if(found){
                                    return found;
                                }
                            }

                            if (input.state_store.conditions.hasOwnProperty('tags') && input.state_store.conditions.tags !== null) {
                                input.state_store.conditions.tags.forEach(element => {
                                    if (element.toLowerCase().match(e.toLowerCase())) {
                                       found = true;
                                    }


                                })
                                console.log(found);
                                if(found){
                                    return found;
                                }
                            }


                            if (input.state_store.conditions.hasOwnProperty('vendors') && input.state_store.conditions.vendors !== null) {
                                input.state_store.conditions.vendors.forEach(element => {
                                    console.log(element);
                                    console.log(e);

                                    if (element.toLowerCase().match(e.toLowerCase())) {
                                        found = true;
                                        console.log("we found it");
                                    }



                                })
                                console.log(found);
                                if(found){
                                    return found;
                                }
                            }

                            if (input.state_store.conditions.hasOwnProperty('types') && input.state_store.conditions.types !== null) {
                                input.state_store.conditions.types.forEach(element => {
                                    console.log(element);
                                    console.log(e);

                                    if (element.toLowerCase().match(e.toLowerCase())) {
                                        found = true;
                                    }



                                })
                                console.log(found);
                                if(found){
                                    return found;
                                }
                            }
                        }
                    }
                    return found;
                }
            )
        }
        console.log(e);

    }

    checkPopupLimitReached = (e) => {
        const { t } = this.props;
        if((this.state.popups.length >= process.env.FREE_TIER_CHART_COUNT_MAX) && !User.profile.isPremium){
            this.upgradeModal.handleOpen(t("reached_max_upgrade", {label: t('label_plural')}));
            e.preventDefault();
            return true;
        }
        return false;
    };

    // Runs once on init of the component. Gets the existing popups the user has already created
    componentDidMount() {
        const { t } = this.props;
       // ShopifyApp.Bar.setTitle('Dashboard');
        console.log(User.profile.isPremium);

        this.myTitleBar.set({title: t("Dashboard")});

        this.api.popups.get()
            .then(data => {
                if(data.total > 0){
                    this.setState({
                        popups: data.results,
                        filteredPopups: data.results,
                        loading: false
                    });

                    let numPublishedPopups = 0;
                    data.results.forEach(popup => {
                        if(popup.status === 'published'){
                            numPublishedPopups++;
                        }
                    });
                    User.setNumPublishedPopups(numPublishedPopups);

                }else{
                    this.setState({
                        loading: false
                    })
                }
            });

        if(Utils.browserIsSafari() && !window.flashedSafariMessage){
            window.flashedSafariMessage = true;
            //ShopifyApp.flashNotice("This app may not work correctly with this version of Safari. If you encounter any issues, please use another browser.");
            const toastOptions = {
                message: t('This app may not work correctly with this version of Safari. If you encounter any issues, please use another browser.'),
                duration: 5000,
            };
            const toastNotice = Toast.create(this.app, toastOptions);

            toastNotice.dispatch(Toast.Action.SHOW);


        }
    }

    render() {
        const { t, i18n } = this.props;

        return (
            <main>
                <If statement={!this.state.loading && this.state.popups.length === 0}>
                    <Page>
                        <EmptyState
                            heading={this.props.schema.onboardingTitle}
                            action={{
                                content: t("add_a", {label: t('label')}),
                                url: appRoutes.createPopupPage
                            }}
                            secondaryAction={ this.props.schema.helpLink && this.props.schema.helpLink.length > 0 ? {content: t('Get help'), url: this.props.schema.helpLink} : null }
                            image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                        >
                            <p>
                                { t("Manage your size charts and check up on how many clicks they're getting.")}
                            </p>
                        </EmptyState>
                        <div className="cc-text-center">
                                        <button onClick={() => i18n.changeLanguage('en-US')}>English</button> • <button onClick={() => i18n.changeLanguage('fr')}>Français</button> • <button onClick={() => i18n.changeLanguage('es-mx')}>Español</button> • <button onClick={() => i18n.changeLanguage('pt-br')}>Português</button>
                            </div>
                    </Page>
                </If>

                <If statement={!this.state.loading && this.state.popups.length > 0}>
                    <Page>
                        <div className="cc-custom-popup-listing-container">
                            <Layout>
                                <Layout.Section>
                                    <Stack>
                                        <Stack.Item fill>
                                            <DisplayText size="large">
                                                { t('label_plural') }
                                            </DisplayText>
                                        </Stack.Item>

                                        <Stack.Item>
                                            <Button
                                                primary
                                                onClick={this.checkPopupLimitReached}
                                                url={appRoutes.createPopupPage}
                                            >
                                                Add { t('label') }
                                            </Button>
                                        </Stack.Item>
                                    </Stack>

                                    <span className="cc-spacer-1"></span>

                                    {User.profile.isPremium &&
                                        <TextField

                                            label="Search"
                                            value={this.state.searchValue}
                                            onChange={this.handleSearchInput}
                                            placeholder={ t("Enter a sizechart title, product name, collection, vendor, tag, or type to filter.") }
                                            autoComplete="off"
                                        />
                                    }


                                    <span className="cc-spacer-1"></span>
                                    <Card>
                                        <div className="cc-custom-popup-listing">
                                            <ResourceList
                                                resourceName={{singular: t('label'), plural: t('label_plural')}}
                                                items={this.state.filteredPopups}
                                                loading={this.state.reloading}
                                                renderItem={(item) => {
                                                    const {id, name, status, updated_at, link_impressions, link_clicks} = item;

                                                    return (
                                                        <ResourceItem
                                                            id={id}
                                                            url={`${appRoutes.createPopupPage}/${id}`}
                                                            accessibilityLabel={ t("view_details_for", { name: name}) }
                                                            shortcutActions={[
                                                                {
                                                                    content: t('Edit'),
                                                                    url: `${appRoutes.createPopupPage}/${id}`,
                                                                    accessibilityLabel: t("edit", {name: name, label: t('label')}),
                                                                    destructive: false,
                                                                    onAction: () => {

                                                                        this.setState({
                                                                            reloading: true
                                                                        });


                                                                        console.log('action');

                                                                        //window.location.href = (`${appRoutes.createPopupPage}/${id}`);

                                                                    }

                                                                },
                                                                {
                                                                    content: t('Duplicate'),
                                                                    accessibilityLabel: t("duplicate", {name: name, label: t('label')}),
                                                                    destructive: false,
                                                                    onAction: () => {
                                                                        if(this.checkPopupLimitReached()){
                                                                            return;
                                                                        }
                                                                        this.setState({
                                                                            reloading: true
                                                                        });

                                                                        this.api.popups.duplicate(id)
                                                                            .then((response) => {
                                                                                if (response && response.success) {
                                                                                    this.reloadPopups();
                                                                                } else {
                                                                                    this.setState({
                                                                                        reloading: false
                                                                                    });
                                                                                }


                                                                            },
                                                                                reason =>{
                                                                                    this.setState({reloading:false});
                                                                                    console.log(reason);
                                                                                }
                                                                                );

                                                                    }

                                                                }
                                                                ,
                                                                {
                                                                content: t('Delete'),
                                                                accessibilityLabel: t("delete", {name: name, label: t('label')}),
                                                                destructive: true,
                                                                onAction: () => {

                                                                    this.okButton.set({
                                                                        label: t("OK, Delete it.")

                                                                    });
                                                                    //this.okButton.dispatch(ABButton.Action.CLICK, {message: id});





                                                                    this.myModal.set({message: t("are_you_sure_delete", {label: name})});


                                                                    this.okButton.subscribe(ABButton.Action.CLICK, (result) => {
                                                                        // Do something with the click action
                                                                        console.log(result.payload);

                                                                        if(result) {
                                                                            this.setState({
                                                                                reloading: true
                                                                            });

                                                                            this.api.popups.delete(id)
                                                                                .then((response) => {
                                                                                    if(response && response.success) {
                                                                                        this.reloadPopups();
                                                                                    }else{
                                                                                        this.setState({
                                                                                            reloading: false
                                                                                        });
                                                                                    }

                                                                                    this.myModal.dispatch(Modal.Action.CLOSE);
                                                                                });
                                                                        }
                                                                    });


                                                                    this.myModal.dispatch(Modal.Action.OPEN);

                                                                    /*
                                                                    ShopifyApp.Modal.confirm({
                                                                        title: `Delete ${this.props.schema.label}`,
                                                                        message: `Are you sure you want to delete "${name}"? This can't be undone.`,
                                                                        okButton: `Delete my ${this.props.schema.label}`,
                                                                        cancelButton: "Cancel",
                                                                        style: "danger"
                                                                }, result => {
                                                                        if(result) {
                                                                            this.setState({
                                                                                reloading: true
                                                                            });

                                                                            this.api.popups.delete(id)
                                                                                .then((response) => {
                                                                                    if(response && response.success) {
                                                                                        this.reloadPopups();
                                                                                    }else{
                                                                                        this.setState({
                                                                                            reloading: false
                                                                                        });
                                                                                    }
                                                                                });
                                                                        }
                                                                    });

                                                                    */
                                                                }
                                                            },

                                                            ]


                                                            }
                                                        >
                                                            <h3>
                                                                <TextStyle variation="strong">{name} </TextStyle>

                                                                {
                                                                    status === 'draft' &&
                                                                    <Badge status="attention" size="small">{ t("Draft") }</Badge>
                                                                }

                                                                {
                                                                    status === 'published' &&
                                                                    <Badge status="success" size="small">{ t("Published") }</Badge>
                                                                }
                                                            </h3>

                                                            {
                                                                <div className="cc-custom-popup-listing__views">
                                                                    {link_impressions} { t("impression") }
                                                                    {
                                                                        link_impressions !== 1 &&
                                                                        <span>s</span>
                                                                    }

                                                                    , {link_clicks} { t("click") }
                                                                    {
                                                                        link_clicks !== 1 &&
                                                                        <span>s</span>
                                                                    }
                                                                </div>
                                                            }

                                                            <div>{ t("Last updated") } <Moment fromNow>{updated_at}</Moment></div>
                                                        </ResourceItem>
                                                    );
                                                }}
                                            />

                                        </div>
                                    </Card>

                                    <If statement={(this.state.popups.length >= process.env.FREE_TIER_CHART_COUNT_MAX) && !User.profile.isPremium}>
                                        <div className="Polaris-EmptyState__Actions">
                                            <TextStyle variation="negative">
                                                { t("reached_max_upgrade", {label: t('label_plural')}) }&nbsp;

                                                <Link onClick={this.handleChangePlanClick}>{ t("Upgrade to get more!") }</Link>
                                            </TextStyle>
                                        </div>
                                    </If>

                                    <If statement={this.props.schema.helpLink}>
                                        <FooterHelp>
                                            { t("Need help? Visit our") }&nbsp;
                                            <Link url={this.props.schema.helpLink}>
                                                { t("help pages") }
                                            </Link>
                                        </FooterHelp>
                                    </If>

                                    {
                                        User.profile.isPremium &&
                                            <div className="cc-text-center">
                                                <Link onClick={() => {
                                                    this.handleChangePlanClick(null, true);
                                                }}>{ t("Change to Free Plan") }</Link>
                                            </div>
                                    }

                                    {
                                        (!User.profile.isPremium && !(this.state.popups.length >= process.env.FREE_TIER_CHART_COUNT_MAX)) &&
                                            <div className="cc-text-center">
                                                { t("You're on the Free plan.") }&nbsp;
                                                <Link onClick={this.handleChangePlanClick}>{ t("Here's 3 reasons to upgrade!") }</Link>
                                            </div>
                                    }
                                    <div className="cc-text-center">
                                        <button onClick={() => i18n.changeLanguage('en-US')}>English</button> • <button onClick={() => i18n.changeLanguage('fr')}>Français</button> • <button onClick={() => i18n.changeLanguage('es-mx')}>Español</button> • <button onClick={() => i18n.changeLanguage('pt-br')}>Português</button>
                                    </div>

                                </Layout.Section>

                                <UpgradeModal
                                    schema={this.props.schema}
                                    additionalText={this.state.upgradeModalText}
                                    modalRef={ref => {this.upgradeModal = ref}}
                                >
                                </UpgradeModal>
                                <If statement={this.props.schema.showRecommendations}>
                                <Layout.Section secondary>

                                        <DisplayText size="small">{ t("Our Recommendations") }</DisplayText>
                                        <span className="cc-spacer-2"></span>
                                        <RecommendedStuff schema={this.props.schema}></RecommendedStuff>

                                </Layout.Section>
                                </If>
                            </Layout>
                        </div>
                    </Page>
                </If>

                <If statement={this.state.loading}>
                    <SkeletonPage>
                        <Layout>
                            <Layout.Section>
                                <Card sectioned>
                                    <SkeletonBodyText />
                                </Card>
                                <ResourceItem></ResourceItem>
                            </Layout.Section>

                            <Layout.Section secondary>
                                <Card sectioned>
                                    <SkeletonBodyText />
                                </Card>
                            </Layout.Section>
                        </Layout>
                    </SkeletonPage>
                </If>

            </main>
        )
    }
}
export default withTranslation()(PopupListing);
