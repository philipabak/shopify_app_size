import React from 'react';
import createApp from "@shopify/app-bridge";
import '@shopify/polaris/styles.css';
import {
    AppProvider,
    Badge,
    Button,
    ButtonGroup,
    Card,
    Checkbox,
    FormLayout,
    Layout,
    Link,
    Page,
    PageActions,
    TextField,
    Text,
    SettingToggle
} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import { TitleBar, Toast } from '@shopify/app-bridge/actions';
import CustomLink from "./components/custom-link/CustomLink";
import Api from "./utils/Api";
import schema from "./utils/schema";
import User from "./utils/User";
import UpgradeModal from "./components/upgrade-modal/UpgradeModal";
import { withTranslation } from 'react-i18next';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        const { t } = props;
        this.schema = schema.sizeChart;
        this.api = new Api(this.schema);

        this.state = {
            customCss: this.props.shop_settings.customCss || {},
            enableAnalytics: this.props.shop_settings.enableAnalytics || false
        }

        User.setProfile(this.props);

        const data = document.getElementById('shopify-app-init').dataset;

        const app = createApp ({
            apiKey: data.apiKey,
            host: data.host,
        });

        const titleBarOptions = {
            title: t('Clean Size Charts Settings'),
        };
        const myTitleBar = TitleBar.create(app, titleBarOptions);
    }

    openUpgradeModal = (e) => {
        const { t } = this.props;
        this.upgradeModal.handleOpen(t(`This is a premium feature.`));
    };

    handleSave = () => {
        const { t } = this.props;
        if (!User.profile.isPremium) {
            this.openUpgradeModal();
        } else {
        console.log(this.state.enableAnalytics);
        const settingsData = {
            customCss: this.state.customCss,
            enableAnalytics: this.state.enableAnalytics
        };

        this.api.shop_settings.save(settingsData)

        const data = document.getElementById('shopify-app-init').dataset;

        const app = createApp ({
            apiKey: data.apiKey,
            host: data.host,
        });

        const toastOptions = {
            message: t('Settings Updated. It may take a few seconds for your size charts to update on your store.')
        };

        const toastNotice = Toast.create(app, toastOptions);
        toastNotice.dispatch(Toast.Action.SHOW);
        }
    }

    handleCustomCssOnFocus = (event) => {
        if (!User.profile.isPremium) {
            this.openUpgradeModal();
        }
    }
    handleCustomCssChange = (event) => {
        this.setState({customCss: event});
        console.log(this.state.customCss);
    };

    handleEnableAnalyticsChange = (value) => {
        if (!User.profile.isPremium) {
            this.openUpgradeModal();
        } else {
            console.log(value);
            this.setState({enableAnalytics: value});
        }
    }

    render() {
        const { t, i18n } = this.props;

        const AnalyticsDescription = (
            <p>{t("Enable GA events for each size chart. Learn more")} <Link url="https://help.taskhusky.com/article/51-setting-up-google-analytics">{t("here")}</Link>.</p>
        )
        const CustomCssTitle = (
            <p>{t("Custom CSS")} {!User.profile.isPremium && <Link onClick={this.openUpgradeModal}><Badge status="attention">{t("Premium Setting")}</Badge></Link>}</p>
        )
        const AnalyticsTitle = (
            <p>{t("Google Analytics")} {!User.profile.isPremium && <Link onClick={this.openUpgradeModal}><Badge status="attention">{t("Premium Setting")}</Badge></Link>}</p>
        )

        return (
            <AppProvider i18n={enTranslations} linkComponent={CustomLink}>
                <Page>
                    <Layout>
                        <Layout.AnnotatedSection
                          title={CustomCssTitle}
                          description={t("You can further customize your size charts by entering custom CSS in the text area above. Exercise caution when using Custom CSS as it can alter or break your size chart design & functionality.")}
                        >
                            <Card sectioned>
                            <FormLayout>
                                <TextField
                                    multiline={10}
                                    autoComplete="off"
                                    id="customCss"
                                    value={this.state.customCss}
                                    onChange={this.handleCustomCssChange}
                                    onFocus={this.handleCustomCssOnFocus}
                                />
                            </FormLayout>
                            </Card>
                                              </Layout.AnnotatedSection>
                        <Layout.AnnotatedSection
                            title={AnalyticsTitle}
                            description={AnalyticsDescription}
                        >
                            <FormLayout>
                                <ButtonGroup segmented>
                                    <Button
                                        pressed={!this.state.enableAnalytics}
                                        size="slim"
                                        accessibilityLabel={t("Disable Google Analytics on Size Charts")}
                                        onClick={() => {
                                            this.handleEnableAnalyticsChange(false);
                                        }}>{t("Off")}</Button>
                                    <Button
                                        pressed={this.state.enableAnalytics}
                                        size="slim"
                                        accessibilityLabel={t("Enable Google Analytics on Size Charts")}
                                        onClick={() => {
                                            this.handleEnableAnalyticsChange(true);
                                        }}>{t("On")}</Button>
                                </ButtonGroup>
                            </FormLayout>
                        </Layout.AnnotatedSection>
                    </Layout>
                    <PageActions
                        primaryAction={{
                            content: t('Save'),
                            onAction: this.handleSave,
                            disabled: false
                        }}
                    />
                </Page>
                <UpgradeModal
                    modalRef={ref => {this.upgradeModal = ref}}
                    schema={this.schema}
                >
                </UpgradeModal>

            </AppProvider>
        );
    }
}

export default withTranslation()(Settings);
