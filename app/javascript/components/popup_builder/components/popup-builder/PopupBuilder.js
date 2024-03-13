import React from 'react';
//import ReactDOM from 'react-dom';
//import {Provider} from '@shopify/app-bridge-react';
import {
    Button,
    ButtonGroup,
    Card,
    Checkbox,
    ColorPicker,
    FormLayout,
    Icon,
    Layout,
    Page,
    RadioButton,
    Select,
    SkeletonBodyText,
    SkeletonDisplayText,
    SkeletonPage,
    Stack,
    Tabs,
    Tag,
    TextContainer,
    TextField,
    TextStyle,
    Loading, Popover, ActionList, Badge, Link
} from '@shopify/polaris';

import './PopupBuilder.scss';

import PopupRenderer from "../popup-renderer/PopupRenderer";

import Api from "../../utils/Api";
import ImageRadioButton from "../image-radio-button/ImageRadioButton";
import CustomLabel from "../custom-label/CustomLabel";
import If from "../if/If";
import TriggerRenderer from "../trigger-renderer/TriggerRenderer";
import {withRouter} from 'react-router'
import Utils from "../../utils/Utils";
import {ChevronLeftMinor, ChevronRightMinor, QuestionMarkMinor, DropdownMinor} from "@shopify/polaris-icons";
import localStorage from "../../utils/localStorage";
import constants from "../../utils/constants";
import country_codes from "../../utils/country_codes";
import appRoutes from "../../utils/appRoutes";
import '../popup-renderer/PopupBuilderRenderer.scss';
import '../trigger-renderer/TriggerBuilderRenderer.scss';
import {SlideDown} from "react-slidedown";
import UpgradeModal from "../upgrade-modal/UpgradeModal";
import User from "../../utils/User";
//import HexColorPicker from "../../utils/HexColorPicker";
import createApp from "@shopify/app-bridge";
import { ResourcePicker, Toast, TitleBar } from '@shopify/app-bridge/actions';
import '@shopify/polaris/styles.css';
//import '@shopify/polaris/dist/styles.css'
//import '@shopify/polaris/build/esm/styles.css'
import { withTranslation } from 'react-i18next';
import EmbedModal from '../embed-modal/EmbedModal'

/**
 * Description:
 * The UI for building a popup
 *
 * Properties:
 * schema:          The schema from Schema.js of the popups
 * content:         The content of the third tab - the customisations of this app
 * contentBuilder:  The component which is responsible for building the content of the component
 * renderer:        The component to render the popup itself
 */
class PopupBuilder extends React.Component {
   constructor(props) {
        const { t } = props;
        super(props);
        this.api = new Api(this.props.schema);
        this.disabledComponents = this.props.schema.disabledComponents;

        const data = document.getElementById('shopify-app-init').dataset;
        this.app = createApp ({

            apiKey: data.apiKey,

            //shop: data.shopOrigin,

            // shopOrigin: data.shopOrigin,
            shop: data.shopOrigin.replace('https://',''),
            shopOrigin:  data.shopOrigin.replace('https://',''),
            host: data.host,
            //forceRedirect: true

        });

        this.titleBarOptions = {
            title: 'My page title',
        };
        this.myTitleBar = TitleBar.create(this.app, titleBarOptions);


        this.productPicker = ResourcePicker.create(this.app, {
            resourceType: ResourcePicker.ResourceType.Product,

        });

        this.collectionPicker = ResourcePicker.create(this.app, {
            resourceType: ResourcePicker.ResourceType.Collection,
        });


        this.collectionPicker.subscribe(ResourcePicker.Action.SELECT, (selectPayload) => {
            const selection = selectPayload.selection;
            // Do something with `selection`
            console.log(selection);

            if (selection.length > 0) {
                this.setState(prevState => {
                    let collections = prevState.conditions.collections;
                    console.log('collections');
                    console.log(collections);
                    selection.map(collection => {
                        const myID = collection.id.split('/').reverse()[0];
                        console.log(myID);
                        collections.push({
                            title: collection.title,
                            id: parseInt(myID),
                        });
                    });

                    return {
                        conditions: {
                            ...prevState.conditions,
                            collections
                        }
                    }
                })
            }

            if (data.errors) {
                console.error(data.errors);
            }


        });

        this.productPicker.subscribe(ResourcePicker.Action.SELECT, (selectPayload) => {
            const selection = selectPayload.selection;
            // Do something with `selection`

            console.log(selection);

            if (selection.length > 0) {
                this.setState(prevState => {
                    let products = [];  //prevState.conditions.products;
                    selection.map(product => {
                        products.push({
                            title: product.title,
                            url: product.handle,
                            mid: product.id,
                        });
                    });

                    return {
                        conditions: {
                            ...prevState.conditions,
                            products
                        }
                    }
                })
            }

            if (data.errors) {
                console.error(data.errors);
            }
        });

        this.toastOptions = {
            message: t("please_enter_the_name", {label: t('label') }),
            duration: 5000,
            isError: true,
        };

        this.nameError = Toast.create(this.app, {message:t("You need a name to continue"),duration: 5000,
            isError: true,});

        this.state = {
            // Functional state
            previousPopups: {
                total: 0,
                results: []
            },
            previousPopupId: null,
            activePreset: 0,
            activeTab: 0,
            coreAvailable: false,
            coreEnabled: false,
            coreModalActive: false,
            hasScriptTag: false,
            isPhaseTwoBitsVisible: false,
            isStateDirty: false,
            isContentDirty: false,
            isSaving: false,
            isLoading: false,
            isCreate: true,
            isSavePopoverActive: false,
            isSidebarExpanded: localStorage.read(constants.localStorageKeys.builderSidebarExpanded),
            tabs: [
                {
                    id: 'presets',
                    content: t('Presets')
                },
                {
                    id: 'settings',
                    content: t('Style')
                },
                {
                    id: 'content',
                    content: t('Content')
                },
                {
                    id: 'trigger',
                    content: t('Placement')
                },
                {
                    id: 'conditions',
                    content: t('Products')
                }
            ],
            errors: {
              name: null
            },
            popupVisible: true,
            showSecretSelector: false,
            tagsInput: "",
            vendorsInput:"",
            myTypeInput:"",

            // Persisted
            id: null,
            name: "",
            status: "draft",
            countryCode: "",
            ...this.props.schema.presets[0].state_store
        };
    }

    /* FUNCTIONS WHICH REPLACE THE STATE =========================================================================== */

    // Updates the state to that of a preset popup style
    handlePresetChange = (activePreset) => {
        this.setState((prevState) => {
            let newState = this.props.schema.presets[activePreset].state_store;

            if(this.state.isContentDirty) {
                //Preserve some of the content
                newState.content = prevState.content;
            }

            return {
                activePreset,
                previousPopupId: null,

                settings: {
                    ...newState.settings
                },
                content: {
                    ...newState.content
                },
                conditions: {
                    ...newState.conditions
                },
                trigger: {
                    ...newState.trigger
                }
            };
        });
    };

    // Updates the state to that of a previous popup made by the user
    handlePreviousPopupChange = (previousPopupId) => {
        this.setState({
            previousPopupId,
            activePreset: null
        });

        this.api.popups.getById(previousPopupId)
            .then(response => {
                if(response){
                    this.setState((prevState) => {
                        return {
                            name: `Copy of ${response.name}`,
                            ...response.state_store
                        };
                    });
                }
            });
    };

    // Handles updates made to the content state from the child component
    handleContentUpdate = (content) => {
        this.setState((prevState) => {
            let newContent = {
                ...prevState.content,
                ...content
            };

            return {
                isContentDirty: true,
                content: newContent
            };
        });
    };


    /* FUNCTIONS WHICH UPDATE A SINGLE PROPERTY OF THE THE STATE ========================================================== */

    handleTagsInputUpdate = (name) => {
        this.setState({tagsInput: name});
    };

    handlemyTypeInputUpdate = (name) => {
        this.setState({myTypeInput: name});
    };

    handleVendorsInputUpdate = (name) => {
        this.setState({vendorsInput: name});
    };

    handlePoweredByChange = (enabled) => {
        if(User.profile.isPremium){
            this.handleSettingChange({
                showPoweredBy: false
            });
        }else{
            this.openUpgradeModal();
        }
    };

    openUpgradeModal = (e) => {
        const { t } = this.props;
        this.upgradeModal.handleOpen(`This is a premium feature. (If you do upgrade, please save your ${t('label')} first!)`);
    };

    handleSettingChange = (setting) => {
        this.setState((prevState) => {
            let newSettings = {
                ...prevState.settings,
                backgroundColor: {
                    ...prevState.settings.backgroundColor
                },
                fontColor: {
                    ...prevState.settings.fontColor
                },
                overlayColor: {
                    ...prevState.settings.overlayColor
                },
                ...setting
            };

            return {
                settings: newSettings
            };
        });
    };

    handlePositionSettingChange = (position) => {
        this.setState((prevState) => {
            let newSettings = {
                ...prevState.settings,
                position,
                popupSize: position === 'central' ? 'large' : 'medium'
            };

            return {
                settings: newSettings
            };
        });
    };


    handleBackgroundColorSettingChange = (backgroundColor) => {
        this.setState((prevState) => {
            let newSettings = {
                ...prevState.settings,
                backgroundColor: {
                    ...backgroundColor
                }
            };

            return {
                settings: newSettings
            };
        });
    };

    handleFontColorSettingChange = (fontColor) => {
        this.setState((prevState) => {
            let newSettings = {
                ...prevState.settings,
                fontColor: {
                    ...fontColor
                }
            };

            return {
                settings: newSettings
            };
        });
    };

    handleOverlayColorSettingChange = (overlayColor) => {
        this.setState((prevState) => {
            let newSettings = {
                ...prevState.settings,
                overlayColor: {
                    ...overlayColor
                }
            };

            return {
                settings: newSettings
            };
        });
    };

    handleCloseColorSettingChange = (closeColor) => {
        this.setState((prevState) => {
            let newSettings = {
                ...prevState.settings,
                closeColor: {
                    ...closeColor
                }
            };

            return {
                settings: newSettings
            };
        });
    };

    handleBackgroundColorTriggerChange = (backgroundColor) => {
        this.setState((prevState) => {
            let newTrigger = {
                ...prevState.trigger,
                backgroundColor: {
                    ...backgroundColor
                }
            };

            return {
                trigger: newTrigger
            };
        });
    };

    handleFontColorTriggerChange = (fontColor) => {
        this.setState((prevState) => {
            let newTrigger = {
                ...prevState.trigger,
                fontColor: {
                    ...fontColor
                }
            };

            return {
                trigger: newTrigger
            };
        });
    };

    handleNameChange = (name) => {
        this.setState({name});
    };

    handleCountryCodeChange = (value, id) => {
        if(User.profile.isPremium){
            this.handleSettingChange({countryCode: value})
        } else {
            this.openUpgradeModal();
        }
    };

    handleStatusChange = (status) => {
        this.setState({status});
    };

    handleTabChange = (activeTab) => {
        this.setState({
            activeTab,
            popupVisible: (this.state.tabs[activeTab].id !== 'trigger' || this.state.trigger.linkType==='inlinechart')
        });
        let myClasss = document.querySelector("#ccpops-popup-container__close");
        if((this.state.trigger.linkType === 'inlinechart'))
        {
            myClasss.style.display = 'none';
        }else{
            myClasss.style.display = 'flex';
        }
    };

    handleConditionChange = (value, id) => {
        this.setState(prevState => {
            let newConditions = {
                ...prevState.conditions,
                [id]: value
            };

            return {
                conditions: newConditions
            };
        })
    };

    handleTriggerChange = (value, id) => {
        let _tval = value;
        this.setState(prevState => {
            let newTrigger = {};
            if(_tval==='snippet'  && id==='placementSelected')
            {
                newTrigger = {
                    ...prevState.trigger,
                    [id]: value,
                    CssSelector: "class",
                    placementCssSelector:"Clean_Size_Chart"
                };

            }else if(_tval!='css' && id==='placementSelected')
            {
                newTrigger = {
                    ...prevState.trigger,
                    [id]: value,
                    CssSelector: "",
                    placementCssSelector:""
                };

            }else {
                newTrigger = {
                    ...prevState.trigger,
                    [id]: value
                };
            }

            return {
                trigger: newTrigger
            };
        })
    };

    handleTriggerTypeChange = (value, id) => {


        let myClasss = document.querySelector("#ccpops-popup-container__close");
        if((value === 'inlinechart'))
        {
            myClasss.style.display = 'none';
        }else{
            myClasss.style.display = 'flex';
        }


        if(User.profile.isPremium || value === 'fixed'){
            const black = {"hue": 0, "saturation": 0, "brightness": 0, "alpha": 1};
            const white = {"hue": 0, "saturation": 0, "brightness": 1, "alpha": 1};
            const transparent = {"hue": 0, "saturation": 0, "brightness": 0, "alpha": 0};

            this.setState({
                    //popupVisible: (this.state.popupVisible || value === 'inlinechart')
                    popupVisible: ( value === 'inlinechart')
            })

            this.setState(prevState => {

                let newTrigger = {
                    ...prevState.trigger,
                    fontColor: value === 'inline' ? black : white,
                    backgroundColor: value === 'inline' ? transparent : black,

                    [id]: value
                };

                return {
                    trigger: newTrigger
                };
            })
        }else{
            this.openUpgradeModal();

        }
    };

    handleTriggerIconChange = (icon) => {
        this.setState(prevState => {
            let newTrigger = {
                ...prevState.trigger,
                icon: {
                    id: icon.id,
                    image: icon.image
                }
            };

            return {
                trigger: newTrigger
            };
        })
    };

    handleSaveClick = (status) => {
        const { t } = this.props;
        let _this = this;
        
        if(this.state.name.length === 0){
            //ShopifyApp.flashError(`Please enter the name of your ${this.props.schema.label}`);
            this.nameError.set({message: t('Please name your chart.'),isError: true});

           this.nameError.dispatch(Toast.Action.SHOW);

            const activeTab = parseInt(Utils.getArrayIndexByProp(this.state.tabs, 'settings'));

            this.setState(prevState => {
                return {
                    activeTab,
                    errors: {
                        ...prevState.errors,
                        name: `This is required`
                    }
                }
            });

            return;
        }

        if(this.state.trigger.linkType === "inline" && !this.state.trigger.placementSelected){
            //ShopifyApp.flashError(`Please choose a placement option for your link.`);

            this.nameError.set({message: t('Please choose a placement option for your link.'),isError: true});

            this.nameError.dispatch(Toast.Action.SHOW);

            const activeTab = parseInt(Utils.getArrayIndexByProp(this.state.tabs, 'trigger'));

            this.setState(prevState => {
                return {
                    activeTab,
                    errors: {
                        ...prevState.errors,
                        placementSelected: `This is required`
                    }
                }
            });

            return;
        }

        if(this.state.trigger.linkType === "inline" &&
            this.state.trigger.placementSelected === "option" &&
            this.state.trigger.placementOptionText.length === 0){
            //ShopifyApp.flashError(`Please enter the placement Option Name.`);

            this.nameError.set({message: t('Please enter the placement Option Name.' ),isError: true});

            this.nameError.dispatch(Toast.Action.SHOW);

            const activeTab = parseInt(Utils.getArrayIndexByProp(this.state.tabs, 'trigger'));

            this.setState(prevState => {
                return {
                    activeTab,
                    errors: {
                        ...prevState.errors,
                        optionName: `This is required`
                    }
                }
            });

            return;
        }

        //Check they'll allowed to publish the chart
        if(!User.profile.isPremium &&
            (User.profile.numPublishedPopups >= process.env.FREE_TIER_CHART_COUNT_MAX && this.state.isCreate) &&
            !User.profile.installedBeforePremiumUpdate &&
            status === 'published'){
            //Not allowed
            this.openUpgradeModal(null,`You can't have more than ${process.env.FREE_TIER_CHART_COUNT_MAX} published ${t('label_plural')}. Have you considered upgrading? Please save your ${t('label')} as Draft before upgrading.`);
            return;
        }

        this.setState({
            isSaving: true,
            status
        });

        const persistData = {
            name: this.state.name,
            status: status,
            state_store: {
                settings: this.state.settings,
                content: this.state.content,
                conditions: this.state.conditions,
                trigger: this.state.trigger
            }
        };

        if(this.state.id) {
            //Update an existing size chart
            this.api.popups.update(this.state.id, persistData)
                .then(response => {
                    if(response && response.success) {
                        //ShopifyApp.flashNotice(status === 'published' ? `Saved successfully. It may take a few seconds for the ${this.props.schema.label} to update on your store.` : `Saved successfully`);
                        let theMessage = ''
                        if(status === 'published')
                        {
                            theMessage = t("saved_successfully", {label: t('label')});
                        }else{
                            theMessage = t("Saved Successfully")
                        }

                        const toastOptions = {
                            message: theMessage,
                            duration: 5000,
                        };
                        const toastNotice = Toast.create(this.app, toastOptions);
                        this.nameError.set({isError:false});
                        this.nameError.set({message:theMessage,isError: false});

                        this.nameError.dispatch(Toast.Action.SHOW);

                    }

                    this.setState({
                        isSaving: false,
                        isStateDirty: false,
                        errors: {
                            name: null,
                            optionName: null
                        }
                    });
                }).catch((error) => {
                    this.setState({
                        isSaving: false,
                        errors: {
                            name: null,
                            optionName: null
                        }
                    });
                });

        }else{

            //Create a new size chart
            this.api.popups.create(persistData)
                .then(response => {
                    if(response && response.success) {
                       // ShopifyApp.flashNotice(status === 'published' ? `Saved successfully. It may take a few seconds for the ${this.props.schema.label} to update on your store.` : `Saved successfully`);

                        let myMessage = ''
                        if(status === 'published')
                        {
                            myMessage = t("saved_successfully", {label: t('label')});
                        }else{
                            myMessage = t('Saved successfully')
                        }

                        this.nameError.set({isError: false});
                        this.nameError.set({message:myMessage,isError: false});

                        this.nameError.dispatch(Toast.Action.SHOW);

                        this.setState({
                            id: response.id
                        });
                    }

                    this.setState({
                        isSaving: false,
                        isStateDirty: false,
                        errors: {
                            name: null
                        }
                    });
                }).catch((error) => {
                    this.setState({
                        isSaving: false,
                        errors: {
                            name: null,
                            optionName: null
                        }
                    });
                });

            //Store the chosen preset
            // if(this.state.previousPopupId === null) {
            //     ga('send', 'event', 'PresetLeaderboard', this.props.schema.presets[this.state.activePreset].name);
            // }else{
            //     ga('send', 'event', 'PresetLeaderboard', 'Previous Popup');
            // }
        }

        if (status === 'published' && (this.state.coreAvailable && !this.state.coreEnabled)) {
            console.log("Toggling modal")
            this.setState({
                coreModalActive: true
            });
        }
    };

    handleSidebarToggleClick = () => {
        this.setState(prevState => {
            return {
                isSidebarExpanded: !prevState.isSidebarExpanded
            }
        })
    };



     handleProductAdd = () => {
        let _this = this;

        console.log(_this.state.conditions.products)
         let products =
            _this.state.conditions.products.map((pord) => {
                const cntr = {};
                if (1===2 && pord.mid === undefined) {
                    this.api.productz.get(pord.url)
                        .then((product) => {
                            let prod = JSON.parse(JSON.stringify(product));
                            console.log(prod);
                            //alert('The title of this product is ' + product[0].title);
                            // alert('The id of this product is ' + product[0].id);
                            cntr.id = prod[0].id;
                            console.log(cntr);
                        });
                } else {
                    cntr.id = pord.mid;
                }
                return cntr;
            });


        console.log(products);


         let productPickerOptions = {
             'selectMultiple': true,
             'initialSelectionIds': products,
         };

         console.log("we are picking products here");
         //todo: add ResourcePicker from app bridge

         _this.productPicker.set(productPickerOptions)
         _this.productPicker.dispatch(ResourcePicker.Action.OPEN);


        /*
        ShopifyApp.Modal.productPicker(productPickerOptions, function(success, data) {
            if(!success) {
                // Success is true when a resource is picked successfully
                return;
            }

            if (data.products.length > 0) {
                _this.setState(prevState => {
                    let products = prevState.conditions.products;
                    data.products.map(product => {
                        products.push({
                            title: product.title,
                            url: product.handle
                        });
                    });

                    return {
                        conditions: {
                            ...prevState.conditions,
                            products
                        }
                    }
                })
            }

            if (data.errors) {
                console.error(data.errors);
            }
        })

         */
    };

    handleProductRemove = (url) => {
        this.setState(prevState => {
            let products = prevState.conditions.products;
            products = Utils.deleteArrayItemByProp(products, url, 'url');

            return {
                conditions: {
                    ...prevState.conditions,
                    products
                }
            }
        })
    };

    handleCollectionAdd = () => {
        let _this = this;

        var collectionPickerOptions = {
            'selectMultiple': true
        };

        console.log("we are picking from collections here");


        _this.collectionPicker.dispatch(ResourcePicker.Action.OPEN);

       /*
        ShopifyApp.Modal.collectionPicker(collectionPickerOptions, function(success, data) {
            if(!success) {
                // Success is true when a resource is picked successfully
                return;
            }

            if (data.collections.length > 0) {
                _this.setState(prevState => {
                    let collections = prevState.conditions.collections;
                    data.collections.map(collection => {
                        collections.push({
                            title: collection.title,
                            id: collection.id
                        });
                    });

                    return {
                        conditions: {
                            ...prevState.conditions,
                            collections
                        }
                    }
                })
            }

            if (data.errors) {
                console.error(data.errors);
            }
        })

        */
    };

    handleCollectionRemove = (id) => {
        this.setState(prevState => {
            let collections = prevState.conditions.collections;
            collections = Utils.deleteArrayItemByProp(collections, id, 'id');

            return {
                conditions: {
                    ...prevState.conditions,
                    collections
                }
            }
        })
    };

    handleTagAdd = () => {
        this.setState(prevState => {
            let tags = prevState.conditions.tags || [];
            //tags = Utils.deleteArrayItemByProp(collections, id, 'id');
            tags.push(this.state.tagsInput);
            return {
                conditions: {
                    ...prevState.conditions,
                    tags
                }
            }
        });
        this.setState({tagsInput:""});
    };

    handleAllProductsSelect = () => {

        this.setState( prevState => {
            let allProducts = prevState.conditions.allProducts || false;
            allProducts = !allProducts;
            return {
                conditions: {
                    ...prevState.conditions,
                    allProducts
                }
            }
        });
    };

    handleTagRemove = (id) => {
        this.setState(prevState => {
            let tags_o = prevState.conditions.tags;
            //tags = Utils.deleteArrayItemByProp(collections, id, 'id');
            let tags = tags_o.filter(e =>  e !== id );

            return {
                conditions: {
                    ...prevState.conditions,
                    tags
                }
            }
        })
    };


    handleVendorAdd = () => {
        this.setState(prevState => {
            let vendors = prevState.conditions.vendors || [];
            //tags = Utils.deleteArrayItemByProp(collections, id, 'id');
            vendors.push(this.state.vendorsInput);

            return {
                conditions: {
                    ...prevState.conditions,
                    vendors
                }
            }
        });
        this.setState({vendorsInput:""});
    };

    handleVendorRemove = (id) => {
        this.setState(prevState => {
            let vendors_o = prevState.conditions.vendors;
            //tags = Utils.deleteArrayItemByProp(collections, id, 'id');
            let vendors = vendors_o.filter(e =>  e !== id );

            return {
                conditions: {
                    ...prevState.conditions,
                    vendors
                }
            }
        })
    };

    handlemyTypeAdd = () => {
        this.setState(prevState => {
            let myTypes = prevState.conditions.myTypes || [];
            //tags = Utils.deleteArrayItemByProp(collections, id, 'id');
            myTypes.push(this.state.myTypeInput);

            return {
                conditions: {
                    ...prevState.conditions,
                    myTypes
                }
            }
        });
        this.setState({myTypesInput:""});
    };

    handlemyTypeRemove = (id) => {
        this.setState(prevState => {
            let myTypes_o = prevState.conditions.myTypes;
            //tags = Utils.deleteArrayItemByProp(collections, id, 'id');
            let myTypes = myTypes_o.filter(e =>  e !== id );

            return {
                conditions: {
                    ...prevState.conditions,
                    myTypes
                }
            }
        })
    };

    updatePopupVisibleState = (isVisible) => {
        this.setState({
            popupVisible: isVisible
        });
    };

    toggleSavePopoverActive = () => {
        this.setState(prevState => {
            return {
                isSavePopoverActive: !prevState.isSavePopoverActive
            }
        })
    };

    handleShowSecretSelectorToggle = () => {
        this.setState({
            showSecretSelector: true
        });
    };

    handleCssSelectorChange = (CssSelector) => {

        this.setState(prevState => {
            let newTrigger = {
                ...prevState.trigger,
                CssSelector: CssSelector

            };

            return {
                trigger: newTrigger
            };
        })
    };

    onFocus = () => {
        this.api.coreEnabled.get().then(data => {
            this.setState({
               coreEnabled: data.enabled
            });
        }).catch(error => {
          console.error(error);
        });
    };

    setCoreModalActive = (newState) => {
        this.setState({
            coreModalActive: newState
        });
    };

    /* LIFECYCLE FUNCTIONS ========================================================================================= */

    // Runs once on init of the component. Gets the existing popups the user has already created
    componentDidMount() {
        const { t } = this.props;
        let barTitle = `New ${t('label')}`;

        //If an ID has been passed in (read the route params https://stackoverflow.com/questions/45468837/get-path-params-in-react-router-v4)
        if(this.props.match && this.props.match.params && this.props.match.params.id){

            this.setState((prevState) => {


                return {
                    isLoading: true,
                    isCreate: false,
                    tabs: Utils.deleteArrayItemByProp(prevState.tabs, 'presets') //Remove the presets tab
                };
            });
/*
            let myRes = async () => {
                await this.api.shoppe.get()
                    .then((shoppe) => {
                        //let shop = JSON.parse(JSON.stringify(shoppe));
                        console.log("shop is");
                        console.log(shoppe);


                    });
            }

            myRes();
*/
            //Load the single popup (this is now the edit page)
            this.api.popups.getById(this.props.match.params.id)
                .then(data => {
                    if(data) {
                        this.setState((prevState) => {

                            let tempState = {
                                id: data.id,
                                name: data.name,
                                status: data.status,
                                isLoading: false,
                                ...data.state_store
                            };

                            if(!User.profile.isPremium && (data.state_store.trigger.linkType === "inline" || data.state_store.trigger.linkType == "inlinechart")){
                                //Change the link type back to fixed if no longer premium
                                tempState.trigger = {
                                    ...data.state_store.trigger,
                                    linkType: "fixed"
                                }
                            }

                            if(!User.profile.isPremium && !data.state_store.settings.showPoweredBy){
                                //Change the powered by back to true if no longer premium
                                tempState.settings = {
                                    ...data.state_store.settings,
                                    showPoweredBy: true
                                }
                            }

                            return tempState;
                        });
                    }
                });

            barTitle = t("update_bar_title", {name: t('label')});

        }else if(User.profile.isPremium) {
            //Turn powered by off by default for premium users
            this.setState((prevState) => {
                return {
                    settings: {
                        ...prevState.settings,
                        showPoweredBy: false
                    }
                };
            });
        }

        //ShopifyApp.Bar.setTitle(barTitle);
        //done:add title bar option for the AppBridge reflection
        this.myTitleBar.set({title:barTitle});


        //Get previous popups to start from
        this.api.popups.get()
            .then(data => {
                if (data.total > 0) {
                    this.setState({
                        previousPopups: data
                    });
                    }
            });

/*
        if (this.state.conditions.products !== undefined) {
            let myConditions = this.state.conditions.products.map(async (pord) => {
                let thisProduct = pord;
                if (pord.mid === undefined) {
                    await this.api.productz.get(pord.url)
                        .then((product) => {
                            let prod = JSON.parse(JSON.stringify(product));
                            console.log(prod);
                            //alert('The title of this product is ' + product[0].title);
                            // alert('The id of this product is ' + product[0].id);
                            thisProduct.mid = prod[0].admin_graphql_api_id;

                        });

                }
                return thisProduct;

            });

            this.setState({
                conditions: {
                    products: myConditions
                }
            });


        }
*/
        this.api.coreAvailable.get()
        .then(data => {
            this.setState({
                coreAvailable: data.available,
                hasScriptTag: data.hasScriptTag
            });
        });

        this.api.coreEnabled.get()
        .then(data => {
            this.setState({
            coreEnabled: data.enabled
            });
        });

        window.addEventListener('focus', this.onFocus.bind(this));
    }

    // Runs every time the state or props of the component updates. If the popup content has changed in the child
    // component updates the state
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.content !== this.props.content) {
            this.setState({
                content: this.props.content
            });
        }

        if((prevState.settings !== this.state.settings ||
            prevState.content !== this.state.content ||
            prevState.conditions !== this.state.conditions ||
            prevState.trigger !== this.state.trigger ||
            prevState.name !== this.state.name ||
            prevState.status !== this.state.status) &&
            prevState.isLoading === false) {

            this.setState({
                isStateDirty: true
            });

            let myClasss = document.querySelector("#ccpops-popup-container__close");
            if((this.state.trigger.linkType === 'inlinechart'))
            {
                myClasss.style.display = 'none';
            }else{
                myClasss.style.display = 'flex';
            }
        }




        //Persist the sidebar state
        if(prevState.isSidebarExpanded !== this.state.isSidebarExpanded) {
            localStorage.write(constants.localStorageKeys.builderSidebarExpanded, this.state.isSidebarExpanded);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('focus', this.onFocus.bind(this))
    }

    render() {
        const { t } = this.props;
        const PopupRendererComponent = this.props.popupRenderer || PopupRenderer;
        const TriggerRendererComponent = this.props.triggerRenderer || TriggerRenderer;
        const PopupContentBuilderComponent = this.props.contentBuilder;
        var classNames = require('classnames');

        const savePopoverActivator = (
            <Button
                primary
                disabled={this.state.isSaving}
                onClick={this.toggleSavePopoverActive}>
                <Icon source={DropdownMinor}></Icon>
            </Button>
        );

        let secondaryActions = this.props.schema.helpLink ? [{
            content: t('Need help?'),
            external: "true",
            icon: QuestionMarkMinor,
            url: this.props.schema.helpLink
        }] : [];

        return (

            <main className={classNames({
                    'cc-builder-page-layout': true,
                    'cc-builder-page-layout--large': (this.state.isSidebarExpanded)
                })}
            >
                {
                    (this.state.isLoading || this.state.isSaving) &&
                    <Loading/>
                }

                {
                    this.state.isLoading &&
                    <SkeletonPage fullWidth>
                        <Layout>

                            <Layout.Section secondary>
                                <Card>
                                    <Card.Section>
                                        <TextContainer>
                                            <SkeletonDisplayText size="small" />
                                            <SkeletonBodyText lines={2} />
                                        </TextContainer>
                                    </Card.Section>
                                    <Card.Section>
                                        <SkeletonBodyText lines={1} />
                                    </Card.Section>
                                </Card>
                                <Card>
                                    <Card.Section>
                                        <TextContainer>
                                            <SkeletonDisplayText size="small" />
                                            <SkeletonBodyText lines={2} />
                                        </TextContainer>
                                    </Card.Section>
                                    <Card.Section>
                                        <SkeletonBodyText lines={1} />
                                    </Card.Section>
                                </Card>
                                <Card>
                                    <Card.Section>
                                        <TextContainer>
                                            <SkeletonDisplayText size="small" />
                                            <SkeletonBodyText lines={2} />
                                        </TextContainer>
                                    </Card.Section>
                                    <Card.Section>
                                        <SkeletonBodyText lines={1} />
                                    </Card.Section>
                                </Card>
                            </Layout.Section>
                            <Layout.Section>
                                <Card sectioned>
                                    <SkeletonBodyText lines={30}/>
                                </Card>
                            </Layout.Section>
                        </Layout>
                    </SkeletonPage>
                }

                {
                    !this.state.isLoading &&
                    <Page
                        fullWidth
                        breadcrumbs={[{content: t('Dashboard'), url: appRoutes.dashboardPage}]}
                        title={this.state.name ? this.state.name : `Add ${t('label')}`}
                        secondaryActions={secondaryActions}
                    >   
                        <EmbedModal
                            app={this.app}
                            coreModalActive={this.state.coreModalActive}
                            hasScriptTag={this.state.hasScriptTag}
                            setCoreModalActive={this.setCoreModalActive}
                        />
                        <Layout>
                            <Layout.Section>
                                <div className="cc-popup-preview">
                                    {/*<header className="cc-custom-header cc-popup-preview__header cc-custom-header--right Polaris-Card">*/}
                                    {/*    <Stack distribution="leading" alignment="center">*/}

                                    {/*    </Stack>*/}
                                    {/*</header>*/}

                                    <section className="cc-popup-preview__main ccpops--is-builder">

                                        <div className={classNames({
                                                'ccpops-trigger-builder-container': true,
                                                'ccpops-trigger-builder-container--on-top': (this.state.tabs[this.state.activeTab].id === 'trigger')
                                            })}
                                        >
                                            <TriggerRendererComponent
                                                state={{
                                                    trigger: {...this.state.trigger},
                                                    conditions: {...this.state.conditions}
                                                }}

                                                plan={User.profile.isPremium ? 'paid' : 'free'}

                                                onClick={() => { this.updatePopupVisibleState(true); }}
                                            />
                                        </div>


                                        <div className={classNames({
                                                'ccpops-popup-builder-container': true,
                                                'ccpops-popup-builder-container--visible': (this.state.popupVisible)
                                            })}
                                        >
                                            <PopupRendererComponent
                                                state={{
                                                    settings: {...this.state.settings},
                                                    content: {...this.state.content},
                                                    conditions: {...this.state.conditions},
                                                    trigger: {...this.state.trigger}
                                                }}

                                                plan={User.profile.isPremium ? 'paid' : 'free'}

                                                onCloseClick={() => { this.updatePopupVisibleState(false); }}
                                            />
                                        </div>
                                    </section>
                                </div>
                            </Layout.Section>

                            <Layout.Section secondary>
                                {/*This is the controls panel*/}
                                {/*<header className="cc-custom-header">*/}
                                {/*    <Stack distribution="equalSpacing">*/}
                                {/*        <DisplayText element="h1" size="medium">New {this.props.schema.label}</DisplayText>*/}

                                {/*        <Pagination*/}
                                {/*            label={`Step ${this.state.activeTab + 1} of 4`}*/}
                                {/*            hasPrevious={this.state.activeTab > 0}*/}
                                {/*            onPrevious={() => this.handleTabChange(this.state.activeTab - 1)}*/}
                                {/*            hasNext={this.state.activeTab < 3}*/}
                                {/*            onNext={() => this.handleTabChange(this.state.activeTab + 1)}*/}
                                {/*        />*/}
                                {/*    </Stack>*/}
                                {/*</header>*/}

                                <aside className="cc-custom-aside">
                                    <header className="cc-custom-aside__header">
                                        <Card>
                                            <Tabs
                                                  tabs={this.state.tabs}
                                                  selected={this.state.activeTab}
                                                  onSelect={this.handleTabChange}>
                                            </Tabs>
                                        </Card>

                                        <button className="cc-custom-aside__header__large-toggle"
                                                aria-label={this.state.isSidebarExpanded ? 'Contract sidebar' : 'Expand sidebar'}
                                                onClick={this.handleSidebarToggleClick}>
                                            {
                                                this.state.isSidebarExpanded &&
                                                <Icon source={ChevronLeftMinor}></Icon>
                                            }

                                            {
                                                !this.state.isSidebarExpanded &&
                                                <Icon source={ChevronRightMinor}></Icon>
                                            }
                                        </button>
                                    </header>

                                    <section className="cc-custom-aside__main">
                                        <If statement={this.state.tabs[this.state.activeTab].id === 'presets'}>
                                            <Card title={ t("Choose a starting point") }>
                                                <div className="cc-custom-stack">

                                                    <Card.Section title={ t("preset_title", {title: t('label_plural')})} >
                                                        <Stack distribution="fillEvenly" spacing="tight">
                                                            {this.props.schema.presets.map((preset, index) => {
                                                                return (
                                                                    <ImageRadioButton
                                                                        image={preset.image}
                                                                        // position={preset.state_store.settings.position}
                                                                        // backgroundColor={preset.state_store.settings.overlayColor}
                                                                        // foregroundColor={preset.state_store.settings.backgroundColor}
                                                                        key={`preset${index}`}
                                                                        checked={this.state.activePreset === index}>
                                                                        <RadioButton
                                                                            label={preset.name}
                                                                            checked={this.state.activePreset === index}
                                                                            id={`preset${index}`}
                                                                            name="preset"
                                                                            onChange={() => {
                                                                                this.handlePresetChange(index)
                                                                            }}
                                                                        />
                                                                    </ImageRadioButton>
                                                                )
                                                            })}
                                                        </Stack>
                                                    </Card.Section>

                                                    <If statement={this.state.previousPopups.results.length > 0}>
                                                        <Card.Section title={ t("duplicate_existing", {title: t('label_plural')}) }>
                                                            <Stack distribution="fillEvenly" spacing="tight">
                                                                {this.state.previousPopups.results.map((popup, index) => {
                                                                    return (
                                                                        <ImageRadioButton
                                                                            position={popup.state_store.settings.position}
                                                                            // backgroundColor={popup.state_store.settings.overlayColor}
                                                                            // foregroundColor={popup.state_store.settings.backgroundColor}
                                                                            key={`popup${index}`}
                                                                            checked={this.state.previousPopupId === popup.id}>
                                                                            <RadioButton
                                                                                label={popup.name}
                                                                                checked={this.state.previousPopupId === popup.id}
                                                                                id={`popup${index}`}
                                                                                name="preset"
                                                                                onChange={() => {
                                                                                    this.handlePreviousPopupChange(popup.id)
                                                                                }}
                                                                            />
                                                                        </ImageRadioButton>
                                                                    )
                                                                })}
                                                            </Stack>
                                                        </Card.Section>
                                                    </If>
                                                </div>
                                            </Card>
                                        </If>

                                        <If statement={this.state.tabs[this.state.activeTab].id === 'settings'}>
                                            <Card>
                                                <Card.Section>
                                                    <TextField
                                                        label="Name"
                                                        value={this.state.name}
                                                        onChange={this.handleNameChange}
                                                        error={this.state.errors.name}
                                                        maxLength={50}
                                                        helpText={t("This is just for your reference, it will not be shown on your store")}
                                                    />
                                                </Card.Section>

                                                <Card.Section title={ t("General Settings") }>

                                                    <If statement={!this.disabledComponents.settings.includes('position')}>
                                                        <CustomLabel>{ t("Position") }</CustomLabel>
                                                        <div className="cc-custom-stack">
                                                            <Stack distribution="fillEvenly" spacing="tight">
                                                                <ImageRadioButton
                                                                    position="central"
                                                                    checked={this.state.settings.position === 'central'}>

                                                                    <RadioButton
                                                                        label={t("Central")}
                                                                        checked={this.state.settings.position === 'central'}
                                                                        id="position1"
                                                                        key="position1"
                                                                        name="position"
                                                                        onChange={() => {
                                                                            this.handlePositionSettingChange('central')
                                                                        }}
                                                                    />
                                                                </ImageRadioButton>

                                                                <ImageRadioButton
                                                                    position="right"
                                                                    checked={this.state.settings.position === 'right'}>

                                                                    <RadioButton
                                                                        label={ t("Right") }
                                                                        checked={this.state.settings.position === 'right'}
                                                                        id="position2"
                                                                        key="position2"
                                                                        name="position"
                                                                        onChange={() => {
                                                                            this.handlePositionSettingChange('right')
                                                                        }}
                                                                    />
                                                                </ImageRadioButton>

                                                                <ImageRadioButton
                                                                    position="full"
                                                                    checked={this.state.settings.position === 'full'}>

                                                                    <RadioButton
                                                                        label={ t("Full") }
                                                                        checked={this.state.settings.position === 'full'}
                                                                        id="position3"
                                                                        key="position3"
                                                                        name="position"
                                                                        onChange={() => {
                                                                            this.handlePositionSettingChange('full')
                                                                        }}
                                                                    />
                                                                </ImageRadioButton>
                                                            </Stack>
                                                        </div>
                                                    </If>

                                                    <If statement={!this.disabledComponents.settings.includes('popupSize')}>
                                                        <CustomLabel>{ t("Popup size") }</CustomLabel>
                                                        <ButtonGroup segmented >
                                                            <Button pressed={this.state.settings.popupSize === 'small'}
                                                                    size="slim"
                                                                    accessibilityLabel={ t("Small popup size") }
                                                                    onClick={() => {
                                                                        this.handleSettingChange({popupSize: 'small'})
                                                                    }}>Small</Button>
                                                            <Button pressed={this.state.settings.popupSize === 'medium'}
                                                                    size="slim"
                                                                    accessibilityLabel={ t("Medium popup size") }
                                                                    onClick={() => {
                                                                        this.handleSettingChange({popupSize: 'medium'})
                                                                    }}>Medium</Button>
                                                            <Button pressed={this.state.settings.popupSize === 'large'}
                                                                    size="slim"
                                                                    accessibilityLabel={ t("Large popup size") }
                                                                    onClick={() => {
                                                                        this.handleSettingChange({popupSize: 'large'})
                                                                    }}>Large</Button>
                                                        </ButtonGroup>
                                                    </If>

                                                    <If statement={!this.disabledComponents.settings.includes('padding')}>
                                                        <CustomLabel>Padding</CustomLabel>
                                                        <ButtonGroup segmented>
                                                            <Button pressed={this.state.settings.padding === 'none'}
                                                                    size="slim"
                                                                    accessibilityLabel={ t("No popup padding") }
                                                                    onClick={() => {
                                                                        this.handleSettingChange({padding: 'none'})
                                                                    }}>None</Button>
                                                            <Button pressed={this.state.settings.padding === 'small'}
                                                                    size="slim"
                                                                    accessibilityLabel={ t("Small popup padding") }
                                                                    onClick={() => {
                                                                        this.handleSettingChange({padding: 'small'})
                                                                    }}>Small</Button>
                                                            <Button pressed={this.state.settings.padding === 'medium'}
                                                                    size="slim"
                                                                    accessibilityLabel={ t("Medium popup padding") }
                                                                    onClick={() => {
                                                                        this.handleSettingChange({padding: 'medium'})
                                                                    }}>Medium</Button>
                                                            <Button pressed={this.state.settings.padding === 'large'}
                                                                    size="slim"
                                                                    accessibilityLabel={ t("Large popup padding") }
                                                                    onClick={() => {
                                                                        this.handleSettingChange({padding: 'large'})
                                                                    }}>Large</Button>
                                                        </ButtonGroup>
                                                    </If>

                                                    <SlideDown transitionOnAppear={false}>
                                                        {
                                                            this.state.settings.position !== 'full' &&
                                                            <div>
                                                                <If statement={!this.disabledComponents.settings.includes('borderRadius')}>
                                                                    <CustomLabel>{ t("Border rounding") }</CustomLabel>
                                                                    <ButtonGroup segmented>
                                                                        <Button
                                                                            pressed={this.state.settings.borderRadius === 'none'}
                                                                            size="slim"
                                                                            accessibilityLabel={ t("No popup border radius") }
                                                                            onClick={() => {
                                                                                this.handleSettingChange({borderRadius: 'none'})
                                                                            }}>Off</Button>
                                                                        <Button
                                                                            pressed={this.state.settings.borderRadius === 'medium'}
                                                                            size="slim"
                                                                            accessibilityLabel={ t("Medium popup border radius") }
                                                                            onClick={() => {
                                                                                this.handleSettingChange({borderRadius: 'medium'})
                                                                            }}>On</Button>

                                                                    </ButtonGroup>
                                                                </If>

                                                                <If statement={!this.disabledComponents.settings.includes('boxShadow')}>
                                                                    <CustomLabel>{ t("Shadow") }</CustomLabel>
                                                                    <ButtonGroup segmented>
                                                                        <Button pressed={this.state.settings.boxShadow === 'none'}
                                                                                size="slim"
                                                                                accessibilityLabel={ t("No popup box shadow") }
                                                                                onClick={() => {
                                                                                    this.handleSettingChange({boxShadow: 'none'})
                                                                                }}>Off</Button>
                                                                        <Button pressed={this.state.settings.boxShadow === 'medium'}
                                                                                size="slim"
                                                                                accessibilityLabel={ t("Medium popup box shadow") }
                                                                                onClick={() => {
                                                                                    this.handleSettingChange({boxShadow: 'medium'})
                                                                                }}>On</Button>
                                                                    </ButtonGroup>
                                                                </If>
                                                            </div>
                                                        }
                                                    </SlideDown>

                                                    <If statement={!this.disabledComponents.settings.includes('watermark')}>
                                                        <CustomLabel>
                                                            { t("'Powered by' watermark") }

                                                            {
                                                                !User.profile.isPremium &&
                                                                <Link onClick={this.openUpgradeModal}>
                                                                    <Badge status="attention">{ t("Premium Setting") }</Badge>
                                                                </Link>
                                                            }
                                                        </CustomLabel>
                                                        <ButtonGroup segmented>
                                                            <Button
                                                                pressed={User.profile.isPremium}
                                                                size="slim"
                                                                accessibilityLabel={ t("Hide watermark") }
                                                                onClick={() => {
                                                                    this.handlePoweredByChange(false)
                                                                }}>Off</Button>
                                                            <Button
                                                                pressed={!User.profile.isPremium}
                                                                size="slim"
                                                                accessibilityLabel={ t("Show watermark") }
                                                                onClick={() => {
                                                                    this.handlePoweredByChange(true)
                                                                }}>On</Button>
                                                        </ButtonGroup>
                                                    </If>
                                                    <If statement={!this.disabledComponents.settings.includes('countryCode')}>
                                                        <CustomLabel>
                                                            { t("Limit By Country") }

                                                            {
                                                                !User.profile.isPremium &&
                                                                <Link onClick={this.openUpgradeModal}>
                                                                    <Badge status="attention">{ t("Premium Setting") }</Badge>
                                                                </Link>
                                                            }
                                                        </CustomLabel>
                                                        <Select
                                                          id="CountryCode"
                                                          disabled={!User.profile.isPremium}
                                                          options={country_codes.country_codes}
                                                          onChange={this.handleCountryCodeChange}
                                                          value={this.state.settings.countryCode}
                                                          onClick={!User.profile.isPremium && this.openUpgradeModal}
                                                        />
                                                    </If>

                                                </Card.Section>

                                                {
                                                    !this.disabledComponents.settings.includes('closeStyle') &&
                                                    <Card.Section title={ t("Close Icon") }>
                                                        <CustomLabel>Style</CustomLabel>
                                                        <ButtonGroup segmented>
                                                            <Button
                                                                pressed={this.state.settings.closeStyle === 'style1'}
                                                                size="slim"
                                                                accessibilityLabel={ t("Popup close button style 1 - outside the popup") }
                                                                onClick={() => {
                                                                    this.handleSettingChange({closeStyle: 'style1'})
                                                                }}>Style 1</Button>
                                                            <Button
                                                                pressed={this.state.settings.closeStyle === 'style2'}
                                                                size="slim"
                                                                accessibilityLabel={ t("Popup close button style 2 - inside the popup") }
                                                                onClick={() => {
                                                                    this.handleSettingChange({closeStyle: 'style2'})
                                                                }}>Style 2</Button>
                                                        </ButtonGroup>

                                                        <div className="cc-flex-color">
                                                            <CustomLabel>{ t("Close Icon Color") }</CustomLabel>
                                                            <ColorPicker
                                                                onChange={this.handleCloseColorSettingChange}
                                                                color={this.state.settings.closeColor}
                                                            />
                                                        </div>
                                                    </Card.Section>
                                                }

                                                {
                                                    (!this.disabledComponents.settings.includes('backgroundColor') ||
                                                        !this.disabledComponents.settings.includes('fontColor') ||
                                                        !this.disabledComponents.settings.includes('overlayColor')) &&

                                                    <Card.Section title={ t("Colors") }>
                                                        <div className="cc-flex-colors">
                                                            <If statement={!this.disabledComponents.settings.includes('backgroundColor')}>
                                                                <div className="cc-flex-color">
                                                                    <CustomLabel>{ t("Background color") }</CustomLabel>
                                                                    <ColorPicker
                                                                        //allowAlpha
                                                                        onChange={this.handleBackgroundColorSettingChange}
                                                                        color={this.state.settings.backgroundColor}
                                                                    />
                                                                </div>
                                                            </If>

                                                            <If statement={!this.disabledComponents.settings.includes('fontColor')}>
                                                                <div className="cc-flex-color">
                                                                    <CustomLabel>{ t("Text color") }</CustomLabel>
                                                                    <ColorPicker
                                                                        onChange={this.handleFontColorSettingChange}
                                                                        color={this.state.settings.fontColor}
                                                                    />
                                                                </div>
                                                            </If>

                                                            <If statement={!this.disabledComponents.settings.includes('overlayColor')}>
                                                                <div className="cc-flex-color">
                                                                    <CustomLabel>{ t("Overlay color") }</CustomLabel>
                                                                    <ColorPicker
                                                                        allowAlpha
                                                                        onChange={this.handleOverlayColorSettingChange}
                                                                        color={this.state.settings.overlayColor}
                                                                    />
                                                                </div>
                                                            </If>
                                                        </div>
                                                    </Card.Section>
                                                }

                                            </Card>
                                        </If>

                                        <If statement={this.state.tabs[this.state.activeTab].id === 'content'}>
                                            <PopupContentBuilderComponent
                                                handleContentUpdate={this.handleContentUpdate}
                                                schema={this.props.schema}
                                                content={this.state.content}/>
                                        </If>

                                        <If statement={this.state.tabs[this.state.activeTab].id === 'trigger'}>
                                            <Card>
                                                <Card.Section title={ t("Type") }>
                                                    <Stack vertical>
                                                        <If statement={!this.disabledComponents.trigger.includes('linkTypeFixed')}>
                                                            <RadioButton
                                                                label="Fixed"
                                                                helpText={ t("type_help_text", { label: t('label') }) }
                                                                name="linkType"
                                                                checked={this.state.trigger.linkType === 'fixed'}
                                                                onChange={() => {
                                                                    this.handleTriggerTypeChange('fixed', 'linkType')
                                                                }}
                                                            />
                                                        </If>
                                                        <If statement={!this.disabledComponents.trigger.includes('linkTypeInline')}>
                                                            <RadioButton
                                                                label="Inline-Link"
                                                                helpText={ t("inline_type_help_text", { label: t('label') }) }
                                                                checked={this.state.trigger.linkType === 'inline'}
                                                                name="linkType"
                                                                onChange={() => {
                                                                    this.handleTriggerTypeChange('inline', 'linkType')
                                                                }}
                                                            />

                                                            {
                                                                !User.profile.isPremium &&
                                                                <Link onClick={this.openUpgradeModal}>
                                                                    <Badge status="attention">{ t("Premium Setting") }</Badge>
                                                                </Link>
                                                            }
                                                        </If>
                                                        <If statement={!this.disabledComponents.trigger.includes('linkTypeInline')}>
                                                            <RadioButton
                                                                label="Inline-Table"
                                                                helpText={ t("inline_table_type_help_text", { label: t('label') }) }
                                                                checked={this.state.trigger.linkType === 'inlinechart'}
                                                                name="linkType"
                                                                onChange={() => {
                                                                    this.handleTriggerTypeChange('inlinechart', 'linkType')
                                                                }}
                                                            />

                                                            {
                                                                !User.profile.isPremium &&
                                                                <Link onClick={this.openUpgradeModal}>
                                                                    <Badge status="attention">{ t("Premium Setting") }</Badge>
                                                                </Link>
                                                            }
                                                        </If>
                                                        <If statement={false && !this.disabledComponents.trigger.includes('linkTypeInline')}>
                                                            <RadioButton
                                                                label="CSS Selector"
                                                                helpText={ t("css_selector_type_help_text", { label: t('label') }) }
                                                                checked={this.state.trigger.linkType === 'css'}
                                                                name="linkType"
                                                                onChange={() => {
                                                                    this.handleTriggerTypeChange('css', 'linkType')
                                                                }}
                                                            />

                                                            {
                                                                !User.profile.isPremium &&
                                                                <Link onClick={this.openUpgradeModal}>
                                                                    <Badge status="attention">{ t("Premium Setting") }</Badge>
                                                                </Link>
                                                            }
                                                        </If>
                                                        <If statement={false && !this.disabledComponents.trigger.includes('linkTypeInline')}>
                                                            <RadioButton
                                                                label={ t("Snippet Only") }
                                                                helpText={ t("snippet_only_type_help_text", { label: t('label') }) }
                                                                checked={this.state.trigger.linkType === 'snippet'}
                                                                name="linkType"
                                                                onChange={() => {
                                                                    this.handleTriggerTypeChange('snippet', 'linkType')
                                                                }}
                                                            />

                                                            {
                                                                !User.profile.isPremium &&
                                                                <Link onClick={this.openUpgradeModal}>
                                                                    <Badge status="attention">{ t("Premium Setting") }</Badge>
                                                                </Link>
                                                            }
                                                        </If>
                                                    </Stack>
                                                </Card.Section>


                                                <If statement={this.state.trigger.linkType != 'inlinechart'}>
                                                    <Card.Section title={ t("Content") }>
                                                    <FormLayout>
                                                        <If statement={!this.disabledComponents.trigger.includes('text') && this.state.trigger.linkType != 'inlinechart' }>
                                                            <CustomLabel spacing="tight">{ t("Link text (optional)") }</CustomLabel>
                                                            <TextField
                                                                value={this.state.trigger.text}
                                                                id="text"
                                                                onChange={this.handleTriggerChange}
                                                                maxLength={50}
                                                            />
                                                        </If>

                                                        <If statement={!this.disabledComponents.trigger.includes('icon') && this.props.schema.triggerIcons.length > 0 && this.state.trigger.linkType != 'inlinechart'}>
                                                            <CustomLabel spacing="tight">{ t("Link icon") }</CustomLabel>

                                                            <div className="cc-custom-stack">
                                                                <Stack distribution="fillEvenly" spacing="tight">
                                                                    {this.props.schema.triggerIcons.map((icon, index) => {
                                                                        return (
                                                                            <ImageRadioButton
                                                                                image={icon.image}
                                                                                key={`trigger_icon${index}`}
                                                                                inset={true}
                                                                                checked={this.state.trigger.icon.id === icon.id}>

                                                                                <span dangerouslySetInnerHTML={{ __html: icon.image }}></span>

                                                                                <RadioButton
                                                                                    checked={this.state.trigger.icon === icon.id}
                                                                                    id={`trigger_${index}`}
                                                                                    name="trigger_icon"
                                                                                    label={icon.label}
                                                                                    onChange={() => {
                                                                                        this.handleTriggerIconChange(icon)
                                                                                    }}
                                                                                />
                                                                            </ImageRadioButton>
                                                                        )
                                                                    })}
                                                                </Stack>
                                                            </div>
                                                        </If>

                                                        <SlideDown transitionOnAppear={false}>
                                                            <If statement={!this.disabledComponents.trigger.includes('iconOnlyOnMob') && this.state.trigger.linkType != 'inlinechart' &&
                                                            this.state.trigger.icon.id !== 'none' &&
                                                            this.state.trigger.text.length > 0}>
                                                                <CustomLabel>Text settings</CustomLabel>
                                                                <Checkbox
                                                                    label={ t("Hide link text on mobile") }
                                                                    id="iconOnlyOnMob"
                                                                    checked={this.state.trigger.iconOnlyOnMob}
                                                                    onChange={this.handleTriggerChange}
                                                                />{this.state.trigger.iconOnlyOnMob}
                                                            </If>
                                                        </SlideDown>
                                                    </FormLayout>
                                                </Card.Section>
                                                </If>

                                                {
                                                    (!this.disabledComponents.trigger.includes('linkTypeFixed') && ((this.state.trigger.linkType === 'inlinechart')||(this.state.trigger.linkType === 'inline')||(this.state.trigger.linkType === 'css'))) &&
                                                    <Card.Section>

                                                        <div className="Polaris-Card__SectionHeader" style={{cursor: "pointer"}} onClick={this.handleShowSecretSelectorToggle}>
                                                            <h3 aria-label="Placement" className="Polaris-Subheading">{ t("Placement") }</h3>
                                                        </div>

                                                        <FormLayout>
                                                            {
                                                                (this.state.trigger.linkType === 'inline' || this.state.trigger.linkType === 'inlinechart') &&
                                                                <div>
                                                                    <div className="ccpops-help-text">
                                                                        <TextContainer>
                                                                            <TextStyle variation="subdued">
                                                                                <p>
                                                                                    { t("ccpops_help_text", { label: t('label'), link_type: this.state.trigger.linkType === 'inlinechart'?'':'link' }) }
                                                                                </p>
                                                                            </TextStyle>
                                                                        </TextContainer>
                                                                    </div>

                                                                    <div className="cc-custom-stack">
                                                                        <Stack distribution="fillEvenly"
                                                                               spacing="tight">

                                                                            {this.state.trigger.linkType !== 'inlinechart' &&
                                                                                <ImageRadioButton
                                                                                    image={"https://cdn.shopify.com/s/files/1/0307/6453/1847/files/placement2.jpg?v=1583836873"}
                                                                                    key={`placement1`}
                                                                                    inset={true}
                                                                                    checked={this.state.trigger.placementSelected === "option"}>


                                                                                    <RadioButton
                                                                                        checked={this.state.trigger.placementSelected === "option"}
                                                                                        key={`placementOption1`}
                                                                                        label={t("Option Label")}
                                                                                        onChange={() => {
                                                                                            this.handleTriggerChange("option", "placementSelected")
                                                                                        }}
                                                                                    />
                                                                                </ImageRadioButton>
                                                                            }
                                                                            <ImageRadioButton
                                                                                image={"https://cdn.shopify.com/s/files/1/0307/6453/1847/files/placement4.jpg?v=1583837588"}
                                                                                key={`placement3`}
                                                                                inset={true}
                                                                                checked={this.state.trigger.placementSelected === "form"}>


                                                                                <RadioButton
                                                                                    checked={this.state.trigger.placementSelected === "form"}
                                                                                    key={`placementOption3`}
                                                                                    label={t("Product Form")}
                                                                                    onChange={() => {
                                                                                        this.handleTriggerChange("form", "placementSelected")
                                                                                    }}
                                                                                />
                                                                            </ImageRadioButton>

                                                                            <ImageRadioButton
                                                                                image={"https://cdn.shopify.com/s/files/1/0561/1362/7206/files/cssselector.jpg?v=1647969993"}
                                                                                key={`placement4`}
                                                                                inset={true}
                                                                                checked={this.state.trigger.placementSelected === "css"}>


                                                                                <RadioButton
                                                                                    checked={this.state.trigger.placementSelected === "css"}
                                                                                    key={`placementOption4`}
                                                                                    label={t("Css Selector")}
                                                                                    onChange={() => {
                                                                                        this.handleTriggerChange("css", "placementSelected")
                                                                                    }}
                                                                                />
                                                                            </ImageRadioButton>

                                                                            <ImageRadioButton
                                                                                image={"https://cdn.shopify.com/s/files/1/0561/1362/7206/files/snipper.jpg?v=1647970762"}
                                                                                key={`placement5`}
                                                                                inset={true}
                                                                                checked={this.state.trigger.placementSelected === "snippet"}>


                                                                                <RadioButton
                                                                                    checked={this.state.trigger.placementSelected === "snippet"}
                                                                                    key={`placementOption5`}
                                                                                    label={t("Custom Code Placement")}
                                                                                    onChange={() => {
                                                                                        this.handleTriggerChange("snippet", "placementSelected")
                                                                                    }}
                                                                                />
                                                                            </ImageRadioButton>
                                                                        </Stack>

                                                                        {
                                                                            this.state.errors.placementSelected &&
                                                                            <TextStyle variation="negative">
                                                                                {this.state.errors.placementSelected}
                                                                            </TextStyle>
                                                                        }

                                                                    </div>

                                                                    {
                                                                        this.state.trigger.placementSelected === "option" &&
                                                                        <div>
                                                                            <div>
                                                                                <CustomLabel>
                                                                                    Option name
                                                                                </CustomLabel>
                                                                                <TextField
                                                                                    value={this.state.trigger.placementOptionText}
                                                                                    id="placementOptionText"
                                                                                    error={this.state.errors.optionName}
                                                                                    onChange={this.handleTriggerChange}
                                                                                    maxLength={200}
                                                                                    placeholder={ t("E.g. Size or Length") }
                                                                                />
                                                                            </div>

                                                                            <div className="ccpops-help-text">
                                                                                <TextContainer>
                                                                                    <TextStyle variation="subdued">
                                                                                        <p>{ t("In the field above, enter the name of the option which changes the size of the product.") }</p>
                                                                                        <p>{ t("For example, 'Size' or 'Length'.") }</p>
                                                                                        <img
                                                                                            className="example-image example-image--first"
                                                                                            src="https://cdn.shopify.com/s/files/1/0307/6453/1847/files/example2_d6c02f8b-7ca5-497f-9300-367ae50271eb.jpg?v=1583422377"/>
                                                                                        <img className="example-image"
                                                                                             src="https://cdn.shopify.com/s/files/1/0307/6453/1847/files/example1_34f22453-cb8c-41af-8f1a-7048e85065fc.jpg?v=1583422377"/>
                                                                                    </TextStyle>
                                                                                </TextContainer>
                                                                            </div>

                                                                        </div>
                                                                    }

                                                                    {
                                                                        this.state.trigger.placementSelected === "description" &&
                                                                        <Select
                                                                            id="placementProductDescription"
                                                                            label={t("Link placement")}
                                                                            options={[
                                                                                {
                                                                                    label: t('At the end of the product description'),
                                                                                    value: 'end'
                                                                                },
                                                                                {
                                                                                    label: t('At the start of the product description'),
                                                                                    value: 'start'
                                                                                },
                                                                                {
                                                                                    label: t('Before the product description'),
                                                                                    value: 'before'
                                                                                },
                                                                                {
                                                                                    label: t('After the product description'),
                                                                                    value: 'after'
                                                                                }
                                                                            ]}
                                                                            onChange={this.handleTriggerChange}
                                                                            value={this.state.trigger.placementProductDescription}
                                                                        />
                                                                    }

                                                                    {
                                                                        this.state.trigger.placementSelected === "css" &&
                                                                        <Select
                                                                            id="placementProductForm"
                                                                            label={t("Link placement")}
                                                                            options={[

                                                                                {
                                                                                    label: t('At the start of the CSS Selector'),
                                                                                    value: 'start'
                                                                                },
                                                                                {
                                                                                    label: t('At the end of the CSS Selector'),
                                                                                    value: 'end'
                                                                                },
                                                                                {
                                                                                    label: t('Before the CSS Selector'),
                                                                                    value: 'before'
                                                                                },
                                                                                {
                                                                                    label: t('After the CSS Selector'),
                                                                                    value: 'after'
                                                                                }
                                                                            ]}
                                                                            onChange={this.handleTriggerChange}
                                                                            value={this.state.trigger.placementProductForm}
                                                                        />
                                                                    }

                                                                    {
                                                                        this.state.trigger.placementSelected === "form" &&
                                                                        <Select
                                                                            id="placementProductForm"
                                                                            label={t('Link placement')}
                                                                            options={[
                                                                                {
                                                                                    label: t('At the end of the product form'),
                                                                                    value: 'end'
                                                                                },
                                                                                {
                                                                                    label: t('At the start of the product form'),
                                                                                    value: 'start'
                                                                                },
                                                                                {
                                                                                    label: t('Before the product form'),
                                                                                    value: 'before'
                                                                                },
                                                                                {
                                                                                    label: t('After the product form'),
                                                                                    value: 'after'
                                                                                }
                                                                            ]}
                                                                            onChange={this.handleTriggerChange}
                                                                            value={this.state.trigger.placementProductForm}
                                                                        />
                                                                    }
                                                                    {
                                                                        this.state.trigger.placementSelected === "snippet" &&
                                                                       <div>

                                                                                        <CustomLabel spacing="tight">
                                                                                            { t("Use this snippet to add your size-chart anywhere.") }
                                                                                        </CustomLabel>

                                                                           <textarea
                                                                               rows={3}
                                                                               cols={43}
                                                                                            value={`<div class="Clean_Size_Chart"></div>`}
                                                                                            id="snippet"
                                                                                        />


                                                                       </div>
                                                                            }

                                                                    {
                                                                        this.state.trigger.placementSelected === "css" &&
                                                                        <div>

                                                                            <div className="ccpops-help-text"
                                                                                 hidden={true}>
                                                                                <TextContainer>
                                                                                    <TextStyle
                                                                                        variation="subdued">
                                                                                        <p>{ t("You've found a hidden feature!") }</p>
                                                                                        <p>
                                                                                            { t("hidden_help_text", { label: t('label')}) }
                                                                                        </p>
                                                                                    </TextStyle>
                                                                                </TextContainer>
                                                                            </div>
                                                                            {/*this is the text that said woohoo you found a hidden feature*/}


                                                                            <CustomLabel spacing="tight">
                                                                                { t("CSS selector") }
                                                                            </CustomLabel>
                                                                            <Select
                                                                                id="CssSelector"
                                                                                options={[
                                                                                    {
                                                                                        label: 'Element',
                                                                                        value: 'element'
                                                                                    },
                                                                                    {
                                                                                        label: 'ID',
                                                                                        value: 'id'
                                                                                    },
                                                                                    {
                                                                                        label: 'class',
                                                                                        value: 'class'
                                                                                    }
                                                                                ]}
                                                                                onChange={this.handleCssSelectorChange}
                                                                                value={this.state.trigger.CssSelector}/>

                                                                            <TextField
                                                                                value={this.state.trigger.placementCssSelector}
                                                                                id="placementCssSelector"
                                                                                onChange={this.handleTriggerChange}
                                                                                placeholder={ t("E.g. #main .product-main-detail") }
                                                                            />

                                                                        </div>
                                                                    }





                                                                    <div>
                                                                        <CustomLabel spacing="tight">
                                                                            { t("Link alignment") }
                                                                        </CustomLabel>
                                                                        <ButtonGroup segmented>
                                                                            <Button
                                                                                pressed={!this.state.trigger.placementAlignment || this.state.trigger.placementAlignment === 'left'}
                                                                                size="slim"
                                                                                accessibilityLabel={ t("Align the option label left") }
                                                                                onClick={() => {
                                                                                    this.handleTriggerChange('left', 'placementAlignment')
                                                                                }}>{ t("Left") }</Button>
                                                                            <Button
                                                                                pressed={this.state.trigger.placementAlignment === 'right'}
                                                                                size="slim"
                                                                                accessibilityLabel={ t("Align the option label right") }
                                                                                onClick={() => {
                                                                                    this.handleTriggerChange('right', 'placementAlignment')
                                                                                }}>{ t("Right") }</Button>

                                                                        </ButtonGroup>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </FormLayout>
                                                    </Card.Section>
                                                }

                                                <Card.Section title={ t("General Settings") }>
                                                    <FormLayout>
                                                        <If statement={!this.disabledComponents.trigger.includes('screenSizes')}>
                                                            <CustomLabel>{ t("Screen sizes") }</CustomLabel>
                                                            <FormLayout>
                                                                <Stack spacing="tight">
                                                                    <Checkbox
                                                                        label={ t("Show on mobile") }
                                                                        id="showMobile"
                                                                        checked={this.state.trigger.showMobile}
                                                                        onChange={this.handleTriggerChange}
                                                                    />

                                                                    <Checkbox
                                                                        label={ t("Show on desktop") }
                                                                        id="showDesktop"
                                                                        checked={this.state.trigger.showDesktop}
                                                                        onChange={this.handleTriggerChange}
                                                                    />
                                                                </Stack>
                                                            </FormLayout>
                                                        </If>

                                                        {/*<If statement={!this.disabledComponents.trigger.includes('position') &&*/}
                                                        {/*this.state.trigger.linkType === 'inline'}>*/}
                                                        {/*    <CustomLabel>Position</CustomLabel>*/}
                                                        {/*    <Select*/}
                                                        {/*        options={[*/}
                                                        {/*            {*/}
                                                        {/*                label: 'Above Description',*/}
                                                        {/*                value: 'above-description'*/}
                                                        {/*            },*/}
                                                        {/*            {label: 'Above Price', value: 'above-price'}*/}
                                                        {/*        ]}*/}
                                                        {/*        id="position"*/}
                                                        {/*        onChange={this.handleTriggerChange}*/}
                                                        {/*        value={this.state.trigger.position}*/}
                                                        {/*    />*/}
                                                        {/*</If>*/}

                                                        <If statement={!this.disabledComponents.trigger.includes('position') &&
                                                        this.state.trigger.linkType === 'fixed'}>
                                                            <CustomLabel>{ t("Position") }</CustomLabel>
                                                            <div className="cc-custom-stack">
                                                                <Stack distribution="fillEvenly" spacing="tight">
                                                                    <ImageRadioButton
                                                                        position="top-right"
                                                                        checked={this.state.trigger.position === 'top-right'}>

                                                                        <RadioButton
                                                                            label={ t("Top Right") }
                                                                            checked={this.state.trigger.position === 'top-right'}
                                                                            id="trigger_position1"
                                                                            key="trigger_position1"
                                                                            name="trigger_position"
                                                                            onChange={() => {
                                                                                this.handleTriggerChange('top-right', 'position')
                                                                            }}
                                                                        />
                                                                    </ImageRadioButton>

                                                                    <ImageRadioButton
                                                                        position="middle-right"
                                                                        checked={this.state.trigger.position === 'middle-right'}>

                                                                        <RadioButton
                                                                            label={ t("Middle Right") }
                                                                            checked={this.state.trigger.position === 'middle-right'}
                                                                            id="trigger_position2"
                                                                            key="trigger_position2"
                                                                            name="trigger_position"
                                                                            onChange={() => {
                                                                                this.handleTriggerChange('middle-right', 'position')
                                                                            }}
                                                                        />
                                                                    </ImageRadioButton>

                                                                    <ImageRadioButton
                                                                        position="bottom-right"
                                                                        checked={this.state.trigger.position === 'bottom-right'}>

                                                                        <RadioButton
                                                                            label={ t("Bottom Right") }
                                                                            checked={this.state.trigger.position === 'bottom-right'}
                                                                            id="trigger_position3"
                                                                            key="trigger_position3"
                                                                            name="trigger_position"
                                                                            onChange={() => {
                                                                                this.handleTriggerChange('bottom-right', 'position')
                                                                            }}
                                                                        />
                                                                    </ImageRadioButton>
                                                                </Stack>
                                                            </div>
                                                        </If>

                                                        <If statement={!this.disabledComponents.trigger.includes('rotated') &&
                                                        this.state.trigger.linkType === 'fixed'}>

                                                            <CustomLabel>{ t("Rotation") }</CustomLabel>
                                                            <ButtonGroup segmented>
                                                                <Button
                                                                    pressed={this.state.trigger.rotated === false}
                                                                    size="slim"
                                                                    accessibilityLabel={ t("Set trigger link not to rotate") }
                                                                    onClick={() => {
                                                                        this.handleTriggerChange(false, 'rotated');
                                                                    }}>Off</Button>
                                                                <Button
                                                                    pressed={this.state.trigger.rotated === true}
                                                                    size="slim"
                                                                    accessibilityLabel={ t("Set trigger link to rotated") }
                                                                    onClick={() => {
                                                                        this.handleTriggerChange(true, 'rotated');
                                                                    }}>On</Button>
                                                            </ButtonGroup>
                                                        </If>
                                                    </FormLayout>
                                                </Card.Section>

                                                <Card.Section title="Colors">
                                                    <FormLayout>

                                                        <div className="cc-flex-colors">
                                                            <If statement={!this.disabledComponents.trigger.includes('fontColor')}>

                                                                {
                                                                    this.state.trigger.linkType === 'inline' &&
                                                                    <Checkbox
                                                                        label={ t("Use store text color") }
                                                                        id="useStoreColor"
                                                                        checked={this.state.trigger.useStoreColor}
                                                                        onChange={this.handleTriggerChange}
                                                                    />
                                                                }

                                                                <SlideDown transitionOnAppear={false}>
                                                                    {
                                                                        (!this.state.trigger.useStoreColor || this.state.trigger.linkType === 'fixed') &&
                                                                        <div className="cc-flex-color">
                                                                            <CustomLabel>{ t("Link color") }</CustomLabel>
                                                                            <ColorPicker
                                                                                onChange={this.handleFontColorTriggerChange}
                                                                                color={this.state.trigger.fontColor}
                                                                            />
                                                                        </div>
                                                                    }
                                                                </SlideDown>
                                                            </If>

                                                            <If statement={!this.disabledComponents.trigger.includes('backgroundColor')}>
                                                                <div className="cc-flex-color">
                                                                    <CustomLabel>{ t("Link background color") }</CustomLabel>
                                                                    <ColorPicker
                                                                        allowAlpha
                                                                        onChange={this.handleBackgroundColorTriggerChange}
                                                                        color={this.state.trigger.backgroundColor}
                                                                    />
                                                                </div>
                                                            </If>
                                                        </div>
                                                    </FormLayout>
                                                </Card.Section>
                                            </Card>
                                        </If>

                                        <If statement={this.state.tabs[this.state.activeTab].id === 'conditions'}>
                                            <Card>
                                                <If statement={this.state.isPhaseTwoBitsVisible}>
                                                    <Card.Section title={ t("Visitor actions") }>
                                                        <ul>
                                                            <li>{ t("Exit intent") }</li>
                                                            <li>{ t("After how many pages viewed in the sessions") }</li>
                                                            <li>{ t("Delay the popup open") }</li>
                                                            <li>{ t("Scroll down %") }</li>
                                                        </ul>
                                                    </Card.Section>

                                                    <Card.Section title={ t("Schedule") }>
                                                        <ul>
                                                            <li>{ t("Date range of when to show popup/link") }</li>
                                                        </ul>
                                                    </Card.Section>
                                                </If>

                                                <Card.Section>
                                                    <If statement={!this.disabledComponents.conditions.includes('products')}>
                                                        <CustomLabel>{ t("Default to all products:") }</CustomLabel>
                                                        <ButtonGroup segmented>
                                                            <Button
                                                                pressed={this.state.conditions.allProducts === undefined || this.state.conditions.allProducts === false}
                                                                size="slim"
                                                                accessibilityLabel={ t("No popup border radius") }
                                                                onClick={() => {
                                                                    this.handleAllProductsSelect()
                                                                }}>Off</Button>
                                                            <Button
                                                                pressed={this.state.conditions.allProducts !== undefined && this.state.conditions.allProducts === true}
                                                                size="slim"
                                                                accessibilityLabel={ t("Medium popup border radius") }
                                                                onClick={() => {
                                                                    this.handleAllProductsSelect()
                                                                }}>On</Button>

                                                        </ButtonGroup>

                                                        <If statement={this.state.conditions.allProducts !== undefined && this.state.conditions.allProducts === true}>
                                                            <TextStyle variation="subdued">{ t("conditions_all_products", {label: t('label')}) }</TextStyle>
                                                        </If>
                                                        <If statement={this.state.conditions.allProducts === undefined || this.state.conditions.allProducts === false}>
                                                            <TextStyle variation="subdued">{ t("conditions_all_products_false", { label: t('label')}) }</TextStyle>
                                                        </If>

                                                        <CustomLabel>{ t("Show on these Products") }</CustomLabel>
                                                        <FormLayout>
                                                            <If statement={this.state.conditions.products}>
                                                                <Stack spacing="tight">
                                                                    {this.state.conditions.products.map((product, index) => {
                                                                        return (
                                                                            <Tag key={`product${index}`} onRemove={() => this.handleProductRemove(product.url)}>
                                                                                {product.title ? product.title : product.url}
                                                                            </Tag>
                                                                        )
                                                                    })}
                                                                </Stack>
                                                            </If>

                                                            <Button accessibilityLabel={ t("pick_products_label", {label: t('label')}) }
                                                                    onClick={this.handleProductAdd}>
                                                                { t("Pick Products") }
                                                            </Button>
                                                        </FormLayout>
                                                    </If>

                                                    <If statement={!this.disabledComponents.conditions.includes('collections')}>
                                                        <CustomLabel>{ t("OR show on Products within these Collections") }</CustomLabel>
                                                        <FormLayout>
                                                            <If statement={this.state.conditions.collections}>
                                                                <Stack spacing="tight">
                                                                    {this.state.conditions.collections.map((collection, index) => {
                                                                        return (
                                                                            <Tag key={`collection${index}`} onRemove={() => this.handleCollectionRemove(collection.id)}>
                                                                                {collection.title ? collection.title : collection.id}
                                                                            </Tag>
                                                                        )
                                                                    })}
                                                                </Stack>
                                                            </If>

                                                            <Button accessibilityLabel={ t("pick_collections_label", {label: t('label')}) }
                                                                    onClick={this.handleCollectionAdd}>
                                                                { t("Pick Collections") }
                                                            </Button>
                                                        </FormLayout>
                                                    </If>


                                                    <If statement={!this.disabledComponents.conditions.includes('tags')}>
                                                        <CustomLabel>{ t("OR show on Products that are tagged with:") }</CustomLabel>
                                                        <FormLayout>
                                                            <If statement={this.state.conditions.tags !== undefined}>
                                                                <Stack spacing="tight">

                                                                    {this.state.conditions.tags?.map((collection, index) => {
                                                                        return (
                                                                        <Tag key={`collection${index}`}
                                                                        onRemove={() => this.handleTagRemove(collection)}>
                                                                    {collection ? collection : collection}
                                                                        </Tag>
                                                                        )
                                                                    })
                                                                    }

                                                                </Stack>
                                                            </If>

                                                            <TextField
                                                                label={ t("Tag") }
                                                                value={this.state.tagsInput}
                                                               onChange={this.handleTagsInputUpdate}
                                                                maxLength={50}
                                                                helpText=""
                                                            />
                                                            <Button accessibilityLabel={ t("pick_collections_label", {label: t('label')}) }
                                                                    onClick={this.handleTagAdd}>
                                                                { t("Add Tag") }
                                                            </Button>
                                                        </FormLayout>
                                                    </If>

                                                    <If statement={!this.disabledComponents.conditions.includes('vendors')}>
                                                        <CustomLabel>{ t("OR show on Products associated with these Vendors:") }</CustomLabel>
                                                        <FormLayout>
                                                            <If statement={this.state.conditions.vendors !== undefined}>
                                                                <Stack spacing="tight">
                                                                    {this.state.conditions.vendors?.map((collection, index) => {
                                                                        return (
                                                                            <Tag key={`collection${index}`} onRemove={() => this.handleVendorRemove(collection)}>
                                                                                {collection ? collection: collection}
                                                                            </Tag>
                                                                        )
                                                                    })}
                                                                </Stack>
                                                            </If>
                                                            <TextField
                                                                label={ t("Vendor Name") }
                                                                value={this.state.vendorsInput}
                                                                onChange={this.handleVendorsInputUpdate}
                                                                maxLength={50}
                                                                helpText=""
                                                            />
                                                            <Button accessibilityLabel={ t("pick_collections_label", {label: t('label')}) }
                                                                    onClick={this.handleVendorAdd}>
                                                                { t("Add Vendor") }
                                                            </Button>
                                                        </FormLayout>
                                                    </If>

                                                    <If statement={!this.disabledComponents.conditions.includes('types')}>
                                                        <CustomLabel>{ t("OR show on Products associated with these product types:") }</CustomLabel>
                                                        <FormLayout>
                                                            <If statement={this.state.conditions.myTypes !== undefined}>
                                                                <Stack spacing="tight">
                                                                    {this.state.conditions.myTypes?.map((collection, index) => {
                                                                        return (
                                                                            <Tag key={`collection${index}`} onRemove={() => this.handlemyTypeRemove(collection)}>
                                                                                {collection ? collection: collection}
                                                                            </Tag>
                                                                        )
                                                                    })}
                                                                </Stack>
                                                            </If>
                                                            <TextField
                                                                label={ t("Type identifier") }
                                                                value={this.state.myTypeInput}
                                                                onChange={this.handlemyTypeInputUpdate}
                                                                maxLength={50}
                                                                helpText=""
                                                            />
                                                            <Button accessibilityLabel={ t("pick_collections_label", {label: t('label')}) }
                                                                    onClick={this.handlemyTypeAdd}>
                                                                { t("Add Type") }
                                                            </Button>
                                                        </FormLayout>
                                                    </If>


                                                    <If statement={this.state.isPhaseTwoBitsVisible}>
                                                        <div>
                                                            <CustomLabel spacing="loose">{ t("Page URLs to show on") }</CustomLabel>
                                                            <FormLayout>
                                                                <TextField/>

                                                                <Stack vertical spacing="tight">
                                                                    <Tag>/pages/about-us</Tag>
                                                                    <Tag>/contact-us</Tag>
                                                                    <Tag>/collection-a/&#42;</Tag>
                                                                </Stack>
                                                            </FormLayout>
                                                        </div>
                                                    </If>
                                                </Card.Section>

                                                <Card.Section title={ t("Tips")} >
                                                    <div className="ccpops-help-text">
                                                        <TextContainer>
                                                            <TextStyle variation="subdued">
                                                                <p>{ t("only_one_can_be_displayed", {label: t('label')}) }</p>

                                                                <p>{ t("if_theres_more_than_one", {label: t('label')}) }</p>

                                                                <p>{ t("specific_product", {label: t('label')}) }</p>
                                                            </TextStyle>
                                                        </TextContainer>
                                                    </div>
                                                </Card.Section>
                                            </Card>
                                        </If>

                                    </section>

                                    <footer className="cc-custom-aside__footer Polaris-Card">
                                        {/*<Stack distribution="fillEvenly">*/}
                                        {/*    <Button*/}
                                        {/*        disabled={this.state.activeTab === 0}*/}
                                        {/*        onClick={() => this.handleTabChange(this.state.activeTab - 1)}>*/}
                                        {/*        Previous*/}
                                        {/*    </Button>*/}

                                        {/*    <Button*/}
                                        {/*        disabled={!(this.state.activeTab < 3)}*/}
                                        {/*        onClick={() => this.handleTabChange(this.state.activeTab + 1)}>*/}
                                        {/*        Next*/}
                                        {/*    </Button>*/}
                                        {/*</Stack>*/}


                                        <Stack distribution="fillEvenly" alignment="center">

                                            <Stack distribution="leading">
                                                {
                                                    this.state.isStateDirty &&
                                                    <TextStyle variation="subdued">
                                                        { t("Unsaved changes") }
                                                    </TextStyle>
                                                }
                                            </Stack>

                                            <Stack distribution="trailing">
                                                <div className="cc-button-save-group">
                                                    <ButtonGroup segmented>
                                                        <Button
                                                            primary
                                                            accessibilityLabel={ t("cc_button_save_group", { label: t('label')}) }
                                                            disabled={this.state.isSaving}
                                                            onClick={() => { this.handleSaveClick(this.state.status) }}>
                                                            { t("Save as") } <strong>{Utils.capitalize(this.state.status)}</strong>
                                                        </Button>

                                                        <Popover
                                                            active={this.state.isSavePopoverActive}
                                                            activator={savePopoverActivator}
                                                            onClose={this.toggleSavePopoverActive}
                                                        >
                                                            <div className="cc-button-save-group-action-list">
                                                                <ActionList items={[
                                                                    {
                                                                        content: t('Save as Draft'),
                                                                        onAction: () => { this.toggleSavePopoverActive(); this.handleSaveClick('draft') }
                                                                    },
                                                                    {
                                                                        content: t('Save as Published'),
                                                                        onAction: () => { this.toggleSavePopoverActive(); this.handleSaveClick('published') }
                                                                    }
                                                                    ]} />
                                                            </div>
                                                        </Popover>

                                                        {/*<Select*/}
                                                        {/*    onChange={this.handleStatusChange}*/}
                                                        {/*    value={this.state.status}*/}
                                                        {/*    // disabled={this.state.isSaving || !this.state.isStateDirty}*/}
                                                        {/*    options={[*/}
                                                        {/*        {label: 'Save as Draft', value: 'draft'},*/}
                                                        {/*        {label: 'Save as Published', value: 'published'},*/}
                                                        {/*    ]}*/}
                                                        {/*/>*/}
                                                    </ButtonGroup>
                                                </div>
                                            </Stack>
                                        </Stack>
                                    </footer>
                                </aside>
                            </Layout.Section>
                        </Layout>
                    </Page>
                }

                {/*Cant reliably use this because of https://github.com/ReactTraining/history/issues/524*/}
                {/*<Prompt*/}
                {/*    when={this.state.isStateDirty}*/}
                {/*    message='You have unsaved changes, are you sure you want to lxeave?'*/}
                {/*/>*/}

                <UpgradeModal
                    modalRef={ref => {this.upgradeModal = ref}}
                    schema={this.props.schema}
                >
                </UpgradeModal>

            </main>
        )
    }


}

export default withTranslation()(withRouter(PopupBuilder));
