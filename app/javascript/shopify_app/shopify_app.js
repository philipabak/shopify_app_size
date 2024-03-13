import createApp from "@shopify/app-bridge";
import { ResourcePicker, Toast, TitleBar, Modal} from '@shopify/app-bridge/actions';
//import { getSessionToken } from '@shopify/app-bridge-utils';
import { Redirect } from '@shopify/app-bridge/actions';
//import Redirect from '@react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const data = document.getElementById('shopify-app-init').dataset;
  console.log(data);
  console.log(data.apiKey);

 /* old boilerplate
    ShopifyApp.init({
    apiKey: data.apiKey,
    shopOrigin: data.shopOrigin,
    debug: data.debug === 'true',
    forceRedirect: true
  });
  */

  //const AppBridge = window ['app-bridge'];
   //const actions = window['app-bridge'].actions;
   //const TitleBar = window['app-bridge'].actions.TitleBar;
   //const Toast = window['app-bridge'].actions.Toast;
    //import { TitleBar } from '@shopify/app-bridge/actions';
  //const createApp = AppBridge.default;




/*
  const app = createApp ({

      apiKey: data.apiKey,

      //shop: data.shopOrigin,

     // shopOrigin: data.shopOrigin,
      shop: data.shopOrigin.replace('https://',''),
      shopOrigin: data.shopOrigin.replace('https://',''),


});

 */


    const app = createApp ({

        apiKey: data.apiKey,

        //shop: data.shopOrigin,

        // shopOrigin: data.shopOrigin,
        shop: data.shopOrigin.replace('https://',''),
        shopOrigin:  data.shopOrigin.replace('https://',''),
        //forceRedirect: true,
        host: data.host,


    });

    const titleBarOptions = {
        title: 'My page title',
    };
    const myTitleBar = TitleBar.create(app, titleBarOptions);

    //Redirect.create(app).dispatch(Redirect.Action.REMOTE, permissionUrl);
});
