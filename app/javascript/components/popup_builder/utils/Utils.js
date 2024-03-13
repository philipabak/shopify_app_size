import {hsbToRgb} from "@shopify/polaris";
import store from "./store";

export default class Utils {
    /**
     * Deletes an item in the passed array by a property value
     * @param arr
     * @param value
     * @param prop
     * @returns {*}
     */
    static deleteArrayItemByProp(arr, value, prop = "id") {
        for (let i in arr) {
            if (arr[i][prop] === value) {
                arr.splice(i, 1);
                break;
            }
        }

        return arr;
    }

    /**
     * Returns the index within the array matching the passed prop
     * @param arr
     * @param value
     * @param prop
     * @returns {*}
     */
    static getArrayIndexByProp(arr, value, prop = "id") {
        for (let i in arr) {
            if (arr[i][prop] === value) {
                return i;
            }
        }

        return false;
    }

    /**
     * Gets the CSRF token from the document or the passed html
     * @param html
     * @returns {string}
     */
    static getCsrfToken(html) {
        if(!store.csrfToken || html){
            // Retrieve the CSRF token from doc or html
            let doc = document;

            if (html) {
                var el = document.createElement('html');
                el.innerHTML = html;
                doc = el;
            }

            const metas = doc.getElementsByTagName('meta');

            for (let i = 0; i < metas.length; i++) {
                if (metas[i].getAttribute('name') === 'csrf-token') {
                    store.csrfToken = metas[i].getAttribute('content');
                    break;
                }
            }
        }

        return store.csrfToken;
    }

    /**
     * Transforms an hsb to rgb
     * @param hsb
     * @returns {string}
     * @private
     */
    static hsbToRgb(hsb){
        var rgb = hsbToRgb(hsb);
        return `rgba(${rgb.red},${rgb.green},${rgb.blue},${(typeof rgb.alpha !== undefined) ? rgb.alpha : 1})`;
    }

    /**
     * Makes the first letter of the string uppercase
     * @param str
     * @returns {string}
     */
    static capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * Pretty self explanatory
     * @returns {boolean}
     */
    static browserIsSafari(){
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
}