import Utils from "./Utils";
import store from "./store";
import Cookie from "./Cookie";
import constants from "./constants";
import {Toast} from "@shopify/app-bridge/actions";
import createApp from "@shopify/app-bridge";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import { saveAs } from "file-saver";

const data = document.getElementById('shopify-app-init').dataset;
console.log(data);
const app = createApp ({

    apiKey: data.apiKey,

    //shop: data.shopOrigin,

    // shopOrigin: data.shopOrigin,
    //shop: data.shopOrigin.replace('https://',''),
    //shopOrigin:  data.shopOrigin.replace('https://',''),
    host: data.host,
    //forceRedirect: true

});

export default class Api {


    constructor(schema){
        this.debug = false;
        this.apiUrl = `https://${window.location.host}/api/${schema.apiVerson}`;
        this.popupApiUrl = `https://${window.location.host}/api/${schema.apiVerson}/${schema.apiNamespace}`;
        // this.recommendationsApiUrl = `https://${window.location.host}/api/${schema.apiVerson}/recommendations`;
        this.csrfToken = Utils.getCsrfToken() || console.error('Unable to find CSRF Token');
        this.toastOptions2 = {
            message: 'Sorry, something went wrong. This might an issue with Safari - please try refreshing the page and trying again or use another browser.',
            duration: 5000,
            isError: true,
        };
        this.toastError2 = Toast.create(app, this.toastOptions2);
    }





    _logError = (error, callAction, silent) => {
        console.log('Error performing API call: ' + error.toString());

        if(Utils.browserIsSafari()){
            if(!silent){

               // ShopifyApp.flashError("Sorry, something went wrong. This might an issue with Safari - please try refreshing the page and trying again or use another browser.");
                this.toastError2.set({message:"Sorry, something went wrong. This might an issue with Safari - please try refreshing the page and trying again or use another browser."})
                this.toastError2.dispatch(Toast.Action.SHOW);
            }
            // ga('send', 'event', 'Error', callAction + '[SAFARI]', data.shopOrigin + ' : ' + error.toString(), null);
        }else{
            if(!silent) {
                //ShopifyApp.flashError('Sorry, something went wrong. You have probably been logged out, please refresh your browser and try again.');
                this.toastError2.set({message:'Sorry, something went wrong. You have probably been logged out, please refresh your browser and try again.'})
                this.toastError2.dispatch(Toast.Action.SHOW);
            }
            // ga('send', 'event', 'Error', callAction, data.shopOrigin + ' : ' + error.toString(), null);
        }
    };

    _get = async (url, params, callAction, preventRetry) => {

        url = new URL(url);

        if (params) {
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        }

        if (this.debug) {
            console.info('GET ' + url);
        }

        const fetchFunction = authenticatedFetch(app);

        return fetchFunction(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.status + ": " + response.statusText);
                }

                if (preventRetry) {
                    this._logError("422: Unprocessable Entity error SUCCEEDED on second attempt!", callAction, true);
                }

                return response.json()
            })
            .catch((error) => {


                if (preventRetry || !error.toString().includes('422: Unprocessable Entity')) {
                    this._logError(error, callAction, false);
                    throw Error(error);
                }

                //Refresh the csrf token and try again
                return fetchFunction('/').then(response => {
                    console.log('Attempting to retrieve new CSRF token...');
                    return response.text().then(text => {
                        const newCsrfToken = Utils.getCsrfToken(text);
                        console.log('Got new CSRF token ' + newCsrfToken);

                        if (!newCsrfToken) {
                            throw Error('Couldn\'t retrieve a valid CSRF token upon the second attempt.');
                        }

                        //Retry the call with a new csrf token
                        this.csrfToken = newCsrfToken;
                        return this._get(url, params, callAction, true);
                    })
                        .catch(thirdError => {
                            throw Error(thirdError);
                        });
                }).catch(secondError => {
                    // Log the issue and give up
                    this._logError(secondError, callAction, false);
                });
            });
    };

    _getDownload = async (url, params, callAction, preventRetry) => {

        url = new URL(url);

        if (params) {
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        }

        if (this.debug) {
            console.info('GET ' + url);
        }

        const fetchFunction = authenticatedFetch(app);

        return fetchFunction(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.status + ": " + response.statusText);
                }

                if (preventRetry) {
                    this._logError("422: Unprocessable Entity error SUCCEEDED on second attempt!", callAction, true);
                }
                
                response.blob()
                    .then(blob => {
                        saveAs(blob, 'size_charts.csv')
                    })
            })
            .catch((error) => {


                if (preventRetry || !error.toString().includes('422: Unprocessable Entity')) {
                    this._logError(error, callAction, false);
                    throw Error(error);
                }

                //Refresh the csrf token and try again
                return fetchFunction('/').then(response => {
                    console.log('Attempting to retrieve new CSRF token...');
                    return response.text().then(text => {
                        const newCsrfToken = Utils.getCsrfToken(text);
                        console.log('Got new CSRF token ' + newCsrfToken);

                        if (!newCsrfToken) {
                            throw Error('Couldn\'t retrieve a valid CSRF token upon the second attempt.');
                        }

                        //Retry the call with a new csrf token
                        this.csrfToken = newCsrfToken;
                        return this._get(url, params, callAction, true);
                    })
                        .catch(thirdError => {
                            throw Error(thirdError);
                        });
                }).catch(secondError => {
                    // Log the issue and give up
                    this._logError(secondError, callAction, false);
                });
            });
    };

    _post = async (url, data, method = 'POST', callAction, preventRetry) => {
        const callSignature = method + ' ' + url;

        if(this.debug) {
            console.info(callSignature, data);
        }

        const fetchFunction = authenticatedFetch(app);

        return fetchFunction(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': this.csrfToken,
                'Session': store.sessionCookie
            }
        })
            .then(response => {
                if(!response.ok){
                    throw Error(callSignature + '. ' +response.status + ": " + response.statusText);
                }
                response = response.json();

                if(response.success === false){
                    throw Error(callSignature + '. ' +response.message);
                }

                if(preventRetry) {
                    this._logError("422: Unprocessable Entity error SUCCEEDED on second attempt!", callAction, true);
                }

                return response;
            })
            .catch(error => {

                if(preventRetry || !error.toString().includes('422: Unprocessable Entity')){
                    this._logError(error, callAction, false);
                    throw Error(error);
                }

                //Refresh the csrf token and try again
                return fetchFunction('/').then(response => {
                    console.log('Attempting to retrieve new CSRF token...');
                    return response.text().then(text => {
                        const newCsrfToken = Utils.getCsrfToken(text);
                        console.log('Got new CSRF token ' + newCsrfToken);

                        if(!newCsrfToken){
                            throw Error('Couldn\'t retrieve a valid CSRF token upon the second attempt.');
                        }

                        //Retry the call with a new csrf token
                        this.csrfToken = newCsrfToken;
                        return this._post(url, data, method, callAction, true);
                    })
                    .catch(thirdError => {
                       throw Error(thirdError);
                    });
                }).catch(secondError => {
                    // Log the issue and give up
                    this._logError(secondError, callAction, false);
                });
            });
    };
    
    _postFile = async (url, data, method = 'POST', callAction, preventRetry) => {
        const formData = new FormData()
        formData.append('csv', data)
        const callSignature = method + ' ' + url;

        if(this.debug) {
            console.info(callSignature, data);
        }

        const fetchFunction = authenticatedFetch(app);

        return fetchFunction(url, {
            method: method,
            body: formData,
            headers: {
                'X-CSRF-Token': this.csrfToken,
                'Session': store.sessionCookie
            }
        })
            .then(response => {
                if(!response.ok){
                    throw Error(callSignature + '. ' +response.status + ": " + response.statusText);
                }
                response = response.json();
                if(response.success === false){
                    throw Error(callSignature + '. ' +response.message);
                }

                if(preventRetry) {
                    this._logError("422: Unprocessable Entity error SUCCEEDED on second attempt!", callAction, true);
                }

                return response;
            })
            .catch(error => {
                if(preventRetry || !error.toString().includes('422: Unprocessable Entity')){
                    this._logError(error, callAction, false);
                    return error
                }

                //Refresh the csrf token and try again
                return fetchFunction('/').then(response => {
                    console.log('Attempting to retrieve new CSRF token...');
                    return response.text().then(text => {
                        const newCsrfToken = Utils.getCsrfToken(text);
                        console.log('Got new CSRF token ' + newCsrfToken);

                        if(!newCsrfToken){
                            throw Error('Couldn\'t retrieve a valid CSRF token upon the second attempt.');
                        }

                        //Retry the call with a new csrf token
                        this.csrfToken = newCsrfToken;
                        return this._postFile(url, data, method, callAction, true);
                    })
                    .catch(thirdError => {
                       throw Error(thirdError);
                    });
                }).catch(secondError => {
                    // Log the issue and give up
                    this._logError(secondError, callAction, false);
                });
            });
    };

    popups = {
        //GET the available preset popups that the user has created
        get: () => {
            return this._get(`${this.popupApiUrl}`, null, 'Get Presets');
        },

        //GET a single popup based on the id
        getById: (id) => {
            return this._get(`${this.popupApiUrl}/${id}`, null, 'Get Single Size Chart');
        },

        //GET a single popup based on the id
        duplicate: (id) => {
            return this._get(`${this.popupApiUrl}/duplicate/${id}`, null, 'Copy Size Chart');
        },

        //POST a new popup
        create: (data) => {
            return this._post(`${this.popupApiUrl}`, data, 'POST', 'Create Size Chart');
        },

        //PUT the popup
        update: (id, data) => {
            return this._post(`${this.popupApiUrl}/${id}`, data, 'PUT', 'Update Size Chart');
        },

        //DELETE popup by id
        delete: (id) => {
            return this._post(`${this.popupApiUrl}/${id}`, null, 'DELETE', 'Delete Size Chart');
        }
    };

    productz = {
      get: (id) => {
          return this._get(`${this.popupApiUrl}/pidbyhandle/${id}`, null, 'Get Product ID from handle');
      }
    };

    shoppe = {
        get: () => {
            return this._get(`${this.popupApiUrl}/shopinfo`, null, 'Get Shop Info');
        }
    }

    plan = {
        upgrade: () => {
            return this._post(`${this.apiUrl}/plan/select`, {
                plan_name: 'paid',
                return_url: `${data.shopOrigin}/admin/apps/${data.apiKey}`
            }, 'POST', 'Plan Upgrade');
        },

        downgrade: () => {
            return this._post(`${this.apiUrl}/plan/select`, {
                plan_name: 'free',
                return_url: `${data.shopOrigin}/admin/apps/${data.apiKey}`
            }, 'POST', 'Plan Downgrade');
        },
    };

    shop_settings = {
        save: (data) => {
            return this._post(`${this.apiUrl}/shop_settings`, data, 'POST', 'Save Shop Settings');
        },
    };

    recommendations = {
        //GET all the recommendations
        get: () => {
            return Promise.resolve({
                recommendations: [
                    {
                        type: "theme",
                        image_url: "https://cdn.shopify.com/s/files/1/0269/3899/8832/files/e1087owzlhm4pd2jaxwaxm2foiq1_400x.jpg?v=1630396976",
                        title: "Showcase - Premium Fashion Theme",
                        description: "Sell more with our luxury fashion theme, ideal for big imagery",
                        url: "https://themes.shopify.com/themes/showcase/?ref=cleancanvas"
                    },
                    {
                        type: "theme",
                        title: "Symmetry - Premium Theme",
                        image_url: "https://cdn.shopify.com/s/files/1/0269/3899/8832/files/l32cqv2eqq6p1dcmz0b56qa4vgyj_400x.jpg?v=1630396975",
                        description: "Perfect for luxury clothing stores with lots of products",
                        url: "https://themes.shopify.com/themes/symmetry/?ref=cleancanvas"
                    }
                    ]
            });
        }
    };

    importExport = {
        export: (params) => this._getDownload(`${this.apiUrl}/import_export.csv`, params, 'Export CSV'),
        import: (data) => this._postFile(`${this.apiUrl}/import_export`, data, 'POST', 'Import CSV')
    }

    coreAvailable = {
        get: () => {
            return this._get(`${this.apiUrl}/core_available`, null, 'Get theme app embed Core Available');
        }
    }

    coreEnabled = {
        get: () => {
            return this._get(`${this.apiUrl}/core_enabled`, null, 'Get theme app embed Core Enabled');
        }
    }
}
