(function () {
    var utils = new function Utils() {
        this.namespace = '[ccpops]';

        this.commentNodes = null;

        this.getUrlParam = function (parameter) {
            var parameter = parameter.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + parameter + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

        this.isDebug = this.getUrlParam('ccpops-debug') ? true : false;

        this.arrayContainsHandles = function (arr, handles) {
            let decodedHandles = handles.map((h) => decodeURIComponent(h));
            return arr.some((elem) => {
                return handles.includes(elem.url) || decodedHandles.includes(elem.url);
            });
        };

        this.arrayContainsIds = function (arr1, arr2) {
            for (var j = 0; j < arr1.length; j++) {
                for (var i = 0; i < arr2.length; i++) {
                    if (arr1[j] === arr2[i].id) {
                        return arr2[i];
                    }
                }
            }
            return false;
        };

        this.arrayContains = function (arr1, arr2) {
            for (var j = 0; j < arr1.length; j++) {
                for (var i = 0; i < arr2.length; i++) {
                    if (arr1[j] === arr2[i]) {
                        return arr2[i];
                    }
                }
            }
            return false;
        };

        this.getCanonicalUrls = function () {
            let links = document.querySelectorAll("link[rel='canonical']") || [];
            return [...links]
                .filter((link) => link.getAttribute("href"))
                .map((link) => link.getAttribute("href"));
        };

        this.handleFromUrl = function (url) {
            let fullpath = (new URL(url)).pathname;
            return fullpath.substring(fullpath.lastIndexOf('/') + 1);
        };

        this.getPageHandles = function () {
            let canonicalHandles = (this.getCanonicalUrls() || [])
                .map(this.handleFromUrl.bind(this))
                .filter((handle) => handle.length);

            let locationHandle = this.handleFromUrl(document.location.href);
            return locationHandle ? [ ...canonicalHandles, locationHandle ] : canonicalHandles;
        };

        this.warn = function (msg, args) {
            if (args) {
                console.warn(utils.namespace + ' ' + msg, args);
            } else {
                console.warn(utils.namespace + ' ' + msg);
            }
        };

        this.debug = function (msg, args) {
            if (this.isDebug) {
                if (args) {
                    console.log(utils.namespace + ' ' + msg, args);
                } else {
                    console.log(utils.namespace + ' ' + msg);
                }
            }
        };

        this.localStorage = {
            namespace: 'ccpops-',

            set: function(key, value) {
                try {
                    localStorage.setItem(this.namespace + key, value);
                } catch (e) {
                    utils.warn('localStorage not available');
                }
            },

            get: function(key) {
                try {
                    let item = localStorage.getItem(this.namespace + key);
                    utils.debug('Item with key: ' + key + ' found: ' + item);
                    return item;
                } catch (e) {
                    utils.warn('localStorage not available');
                    return '';
                }
            }
        };

        this.api = {
            reporting: function() {
                function increment(activity, popupId){

                    if(window.Shopify && window.Shopify.AdminBarInjector) {
                        return;

                    }else if(window.Shopify && window.Shopify.PreviewBarInjector) {
                        utils.debug("Not incrementing " + activity + " because the we're in preview mode");
                        return;
                    }

                    utils.debug('Incrementing ' + activity + ' for popup ' + popupId);
                    try {
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", 'https://[[APP_HOST]]/api/v1/size-chart/' + popupId + '/reports/increment', true);
                        // xhr.setRequestHeader('X-CSRF-TOKEN', 'edAmC/iVP5gehLlD87VBTo8J8qWSeYQ8qe2IEdDAov0j6+9pR6MHlCtnBbv1Fct4YWGWDKzbkQsYaTVJHMdl2w==');
                        xhr.setRequestHeader('Content-Type', 'application/json');
                        xhr.send(JSON.stringify({
                            activity: activity
                        }));
                    }catch(err){
                        utils.warn('Unable to increment ' + activity + ' for popup ' + popupId, err);
                    }
                }

                return {
                    incrementClicks: function (popupId) {
                        increment('link_click', popupId);
                    },
                    incrementImpressions: function (popupId) {
                        increment('link_impression', popupId);
                    }
                }
            }
        };

        this.device = {
            isMobile: function(){
                return window.screen.width < 768;
            },
            setCountryCode: function(countryCode) {
                utils.debug('Setting country code to:' + countryCode);
                utils.localStorage.set("countryCode", countryCode);
            },
            getCountryCode: function() {
                utils.debug('Getting country code');
                var countryCode = utils.localStorage.get("countryCode");
                return countryCode != null ? countryCode : '';
            }
        }

        this.scroll = {
            oldTop: null,
            scrollPosition: null,

            lock: function(){
                var body = document.querySelector('body');

                if(body.style.top) {
                    utils.scroll.oldTop = body.style.top;
                }

                utils.scroll.scrollPosition = window.pageYOffset;
                body.style.top = '-' + utils.scroll.scrollPosition + 'px';
                body.classList.add('ccpops-scroll-locked');
            },

            unlock: function(){
                var body = document.querySelector('body');
                body.classList.remove('ccpops-scroll-locked');

                if(utils.scroll.oldTop) {
                    body.style.top = utils.scroll.oldTop;
                }else{
                    body.style.removeProperty('top');
                }

                window.scrollTo(0, utils.scroll.scrollPosition);
            }
        }

        this.findVisibleElemsContainingText = function (selector, text){
            text = text.toLowerCase().trim();
            var elements = document.querySelectorAll(selector);
            return Array.prototype.filter.call(elements, function(element){
                return (RegExp(text).test(element.textContent.toLowerCase()) && element.offsetParent !== null);
            });
        }

        this.findCommentsContainingText = function(comment){
            if(!this.commentNodes) {
                var findComments = function (el) {
                    var arr = [];
                    for (var i = 0; i < el.childNodes.length; i++) {
                        var node = el.childNodes[i];
                        if (node.nodeType === 8) {
                            arr.push(node);
                        } else {
                            arr.push.apply(arr, findComments(node));
                        }
                    }
                    return arr;
                };
                this.commentNodes = findComments(document);
                console.log(this.commentNodes);
            }


            for(var i=0; i<this.commentNodes.length; i++){
                console.log(this.commentNodes[i].nodeValue);
                console.log(comment);
                if(this.commentNodes[i].nodeValue.toString()==comment){
                    console.log("Found it!!");
                    return this.commentNodes[i];
                }
            }

            return;
        }

        this.placeInlineAppropriately = function(whereto, triggerLocation,elem){
            if(whereto==='start')
            {
                triggerLocation.prepend(elem);
            }else if(whereto==='end')
            {
                triggerLocation.appendChild(elem);
            }else if(whereto==='before')
            {
                triggerLocation.parentNode.insertBefore(elem,triggerLocation);

            }else if(whereto==='after')
            {
                triggerLocation.after(elem);
            }
        }
    };

    function Popup(popup){

        var _this = this;

        utils.debug("placementAlignment: ", popup.trigger.placementAlignment);
        utils.debug("linkType: ", popup.trigger.linkType);
        utils.debug("trigger: ", popup.trigger.trigger);
        utils.debug("placementSelected: ", popup.trigger.placementSelected);
        utils.debug("placementProductForm: ", popup.trigger.placementProductForm);
        utils.debug("size chart country code: ", popup.countryCode);

        //Render the CSS. This is a concatenated and scss-parsed version of TriggerRenderer.scss and PopupRenderer.scss (with vendor prefixes!!)
        var css = [[INJECTED_CSS]];

        if (!css) {
            console.warn('No CSS found');
            return;
        }

        var style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);

        this.doInlineAppend = function(trigger, elem){

            utils.debug('Appending Inline: ', trigger.placementSelected);


            var clearfixElem = document.createElement('div');
            clearfixElem.innerHTML = "";
            clearfixElem.setAttribute('style', 'clear: both');

            var append = (trigger.placementProductForm && trigger.placementProductForm === "start" ? false : true);
            let whereto = '';
            if(trigger.placementProductForm) {
                whereto = trigger.placementProductForm;
            }


            //did we inject a custom placement comment anywhere in the page
            var customLocationComment = utils.findCommentsContainingText('CCSizeChartLaunchLocationCustom');
            if(customLocationComment){
                utils.debug('Found CCSizeChartLaunchLocationCustom comment, putting link there');

                var extraCss = "";

                if (trigger.placementAlignment && trigger.placementAlignment === "right") {
                    if (trigger.linkType != "inlinechart")
                        extraCss = "width: auto; float: right; justify-self:end;";
                }

                elem.setAttribute("style", extraCss);



                    if (trigger.placementAlignment && trigger.placementAlignment === "right") {
                        customLocationComment.replaceWith(elem, clearfixElem);
                   } else {
                        customLocationComment.replaceWith(elem);
                    }


                return;
            }

            //did we pick css or snippet??
            if(trigger.placementCssSelector && trigger.placementCssSelector.length > 0) {
                utils.debug('Found css selector, attempting to put link in', trigger.placementCssSelector);
                utils.debug('Css selector info found: ', trigger.CssSelector);
                let triggerLoca = trigger.placementCssSelector;
                if(trigger.CssSelector != undefined){
                    if(trigger.CssSelector=='id')
                    {
                        triggerLoca = ("#"+triggerLoca).replace("##",'#').replace('.','');
                    }else if(trigger.CssSelector=='class'){
                        triggerLoca = ("."+triggerLoca).replace("..",'.').replace('#','');
                    }

                }
                utils.debug('Css selector resolved to: ', triggerLoca);
                const triggerLocation = document.querySelectorAll(triggerLoca);
                utils.debug('Css selector resolved to: ', triggerLocation.length);

                if(triggerLocation){
                    utils.debug("Found trigger Location");
                    if(whereto !== ''){
                        utils.debug("Found whereto", whereto);
                        //let elem = elem;
                        if(whereto=='start')
                        {
                            triggerLocation.forEach(
                                triggerLocation => triggerLocation.prepend(elem)
                            )
                        }else if(whereto=='end')
                        {
                            triggerLocation.forEach(
                                triggerLocation => {
                                    triggerLocation.appendChild(elem.cloneNode(true));
                                    utils.debug("Found trigger spot ",triggerLocation);
                                    return triggerLocation;
                                }
                            );
                        }else if(whereto=='before')
                        {
                            triggerLocation.forEach(
                                triggerLocation => triggerLocation.parentNode.insertBefore(elem,triggerLocation)
                            )

                        }else if(whereto=='after')
                        {
                            triggerLocation.forEach(
                                triggerLocation => triggerLocation.after(elem)
                            )
                        }

                    }else {


                        if(whereto !== '') {
                            if (whereto == 'start') {
                                triggerLocation.forEach(
                                    triggerLocation => triggerLocation.prepend(elem)
                                )
                            } else if (whereto == 'end') {
                                triggerLocation.forEach(
                                    triggerLocation =>  triggerLocation.appendChild(elem)
                                )
                            } else if (whereto == 'before') {
                                triggerLocation.forEach(
                                    triggerLocation => triggerLocation.parentNode.insertBefore(elem, triggerLocation)
                                )

                            } else if (whereto == 'after') {
                                triggerLocation.forEach(
                                    triggerLocation => triggerLocation.after(elem)
                                )
                            }
                        }else {

                            if (append) {
                                triggerLocation.forEach(
                                    triggerLocation =>  triggerLocation.appendChild(elem)
                                )
                            } else {
                                triggerLocation.forEach(
                                    triggerLocation => triggerLocation.prepend(elem)
                                )
                            }
                        }
                    }
                    return;
                }
                utils.debug('Unable to find matching element.');
            }

            //are we placing this thing on the option tag??
            if(trigger.placementSelected === 'option') {
                if (trigger.placementOptionText && trigger.placementOptionText.length > 0) {
                    utils.debug('Found option text, attempting to put link in label with text: ', trigger.placementOptionText);

                        function insertOptionPopupLink() {
                            var triggerLocations = utils.findVisibleElemsContainingText("label", trigger.placementOptionText);

                            if(triggerLocations.length === 0){
                                //Try other semi-plausible elements to use
                                triggerLocations = utils.findVisibleElemsContainingText(
                                  "form[action*='cart/add'] span, form[action*='cart/add'] h2, form[action*='cart/add'] h3, form[action*='cart/add'] h4, form[action*='cart/add'] h5, form[action*='cart/add'] h6, form[action*='cart/add'] legend, variant-radios legend", trigger.placementOptionText);
                            }
                            if (triggerLocations.length > 0) {
                                //Remove any old hidden references to the link
                                var oldTriggerLink = document.querySelector('#ccpops-trigger-container');
                                if(oldTriggerLink && oldTriggerLink.offsetParent === null){
                                    oldTriggerLink.parentNode.removeChild(oldTriggerLink);
                                    utils.debug('Removed old reference to trigger link');
                                }

                                if (triggerLocations.length > 1) {
                                    utils.warn('Found multiple locations to insert trigger link. Using the first element.', triggerLocations);
                                }

                                if (triggerLocations[0].querySelector('#ccpops-trigger-container') === null) {
                                    utils.debug('Attempting to add link where needed');
                                    var extraCss = "";

                                    if (trigger.placementAlignment && trigger.placementAlignment === "right") {
                                        if (trigger.linkType != "inlinechart")
                                            extraCss = "width: auto; float: right; justify-self:end;";
                                    }

                                    elem.setAttribute("style", "display: inline !important; " + extraCss);
                                    //Add a trailing space
                                    triggerLocations[0].innerHTML = triggerLocations[0].innerHTML + " ";

                                    //Hack for Expression
                                    if (Shopify && Shopify.theme && Shopify.theme.name && Shopify.theme.name.indexOf('Expression') > -1) {
                                        triggerLocations[0].style.zIndex = '1';
                                    }

                                    if(trigger.placementProductForm !== '') {
                                        utils.placeInlineAppropriately('end', triggerLocations[0], elem);
                                    }


                                    if (trigger.placementAlignment && trigger.placementAlignment === "right") {
                                        triggerLocations[0].appendChild(clearfixElem);
                                    }
                                } else {
                                    utils.debug('Found popup link, not adding again.');
                                }

                                return true;
                            }else{
                                return false;
                            }
                        }

                        //Do it again for luck (some apps, e.g. Variant Swatch King overwrite the labels)
                        setTimeout(insertOptionPopupLink, 1000);
                        setTimeout(insertOptionPopupLink, 3000);
                        setTimeout(insertOptionPopupLink, 6000);

                        if(insertOptionPopupLink()){
                            return;
                        }

                    utils.debug('Unable to find matching label element.');
                }
            }

            if(trigger.placementSelected === 'description') {
                utils.debug('Attempting to place link in product description.');

                async function findTheMents() {
                    var triggerLocation;
                    if (trigger.placementProductDescription === 'start') {
                        triggerLocation = await utils.findCommentsContainingText('CCSizeChartLaunchLocationBefore');
                    } else if (trigger.placementProductDescription === 'end') {
                        triggerLocation = await utils.findCommentsContainingText('CCSizeChartLaunchLocationAfter');
                    } else {

                       let tl  = await utils.findCommentsContainingText('CCSizeChartLaunchLocationBefore');
                        triggerLocation = tl.parentNode;
                    }

                    return triggerLocation;
                    //await utils.debug(triggerLocation);

                };
                findTheMents()
                    .then((triggerLocation) => {
                        if (triggerLocation) {
                            var extraCss = "";

                            if (trigger.placementAlignment && trigger.placementAlignment === "right") {
                                if (trigger.linkType != "inlinechart")
                                    extraCss = "width: auto; float: right; justify-self:end;";
                            }

                            elem.setAttribute("style", extraCss);

                            if (trigger.placementProductDescription === 'start' || trigger.placementProductDescription === 'end') {
                                if (trigger.placementAlignment && trigger.placementAlignment === "right") {
                                    triggerLocation.replaceWith(elem, clearfixElem);
                                } else {
                                    triggerLocation.replaceWith(elem);
                                }
                            } else {

                                utils.placeInlineAppropriately(trigger.placementProductDescription, triggerLocation, elem);

                            }

                            return;
                        }


                        utils.warn('Unable to find "CCSizeChartLaunchLocationBefore" or "CCSizeChartLaunchLocationAfter" html comments');
                    })
                }




            //Try adding to form, last ditch attempt
            utils.debug('Attempting to place link in product form.');
            var triggerLocation = document.querySelector("form[action*='cart/add']");

            var extraCss = "";

            if (trigger.placementAlignment && trigger.placementAlignment === "right") {
                if (trigger.linkType != "inlinechart")
                    extraCss = "width: auto; float: right; justify-self:end; padding-top: 1em; padding-bottom: 1em;";
            }else{
                if(append){
                    if (trigger.linkType != "inlinechart")
                        extraCss = "padding-bottom: 0.5em;";
                }else{
                    if (trigger.linkType != "inlinechart")
                        extraCss = "padding-top: 0.5em; padding-bottom: 0.5em;";
                }
            }

            elem.setAttribute("style", extraCss);

            if (triggerLocation) {
                if (append) {
                    triggerLocation.appendChild(elem);

                    if (trigger.placementAlignment && trigger.placementAlignment === "right") {
                        triggerLocation.appendChild(clearfixElem);
                    }
                } else {

                    if (trigger.placementAlignment && trigger.placementAlignment === "right") {
                        triggerLocation.prepend(clearfixElem);
                    }

                    triggerLocation.prepend(elem);
                }

                return;
            } else {
                utils.warn('Unable to find relevant product form to insert size chart link.');
            }

        };

        this.appendElemToBody = function(html) {
            //Insert hrefs where needed (React can't have hrefs, it screws the routing)
            html = html.replace(/<a data-nohref="true"/g, '<a href="#"',);
            var elem = document.createElement('div');
            elem.innerHTML = '<div>' + html + '</div>';
            elem = elem.firstChild;
            utils.debug("elem",elem);
/*
            if(popup.trigger.linkType && popup.trigger.linkType === 'inline'){
                this.doInlineAppend(popup.trigger, elem.querySelector('#ccpops-trigger-container'));
                document.body.appendChild(elem.querySelector('#ccpops-popup'));
                document.body.appendChild(elem.querySelector('#ccpops-inline'));
            }else if(popup.trigger.linkType && popup.trigger.linkType === 'inlinechart'){
                this.doInlineAppend(popup.html, elem.querySelector('#ccpops-inline'));
                document.body.appendChild(elem.querySelector('#ccpops-popup'));
            }else {
                document.body.appendChild(elem);
            }
            */
                utils.debug("linkType: ",popup.trigger.linkType);
            if(popup.trigger.linkType && popup.trigger.linkType === 'inline'){
                this.doInlineAppend(popup.trigger, elem.querySelector('#ccpops-trigger-container'));
                document.body.appendChild(elem.querySelector('#ccpops-popup'));
                //document.body.appendChild(elem.querySelector('#ccpops-inline'));
                utils.debug("inline");
            }else if(popup.trigger.linkType && popup.trigger.linkType === 'fixed') {
                document.body.appendChild(elem.querySelector('#ccpops-popup'));
                document.body.appendChild(elem.querySelector('#ccpops-trigger-container'));
                //document.body.appendChild(elem.querySelector('#ccpops-inline'));
                utils.debug("fixed");
            }else if(popup.trigger.linkType && popup.trigger.linkType === 'inlinechart') {
                console.log(popup.trigger);
                this.doInlineAppend(popup.trigger, elem.querySelector('#ccpops-inline'));
                document.body.appendChild(elem.querySelector('#ccpops-popup'));
                document.body.appendChild(elem.querySelector('#ccpops-trigger-container'));
                //this.doInlineAppend(popup.trigger,elem.querySelector('#ccpops-inline'));
                utils.debug("inlinechart");
            }else if(popup.trigger.linkType && popup.trigger.linkType === 'snippet'){
                //document.body.appendChild(elem.querySelector('#ccpops-popup'));
                document.body.appendChild(elem.querySelector('#ccpops-trigger-container'));
                this.doInlineAppend(popup.trigger, elem.querySelector('#ccpops-trigger-container'));
                document.body.appendChild(elem.querySelector('#ccpops-popup'));
                //document.body.appendChild(elem.querySelector('#ccpops-inline'));
                //this.doInlineAppend(popup.trigger,elem.querySelector('#ccpops-inline'));
                utils.debug("snippet");
            }else if(popup.trigger.linkType && popup.trigger.linkType === 'css'){
                document.body.appendChild(elem.querySelector('#ccpops-trigger-container'));
                this.doInlineAppend(popup.trigger, elem.querySelector('#ccpops-trigger-container'));
                document.body.appendChild(elem.querySelector('#ccpops-popup'));
                //document.body.appendChild(elem.querySelector('#ccpops-inline'));
                utils.debug("css");
            }

            setTimeout(window.dispatchEvent(new Event('resize')),0);
        };

        //Append the popup & trigger to the body (will be hidden)
        this.appendElemToBody(popup.html);

        let popupElem = document.querySelector('.ccpops-veil');
        let triggerElem = document.querySelectorAll('.ccpops-trigger');
       // let inlineElem = document.querySelector('.ccpops-blockZ');

        if(popupElem!=undefined) {
            popupElem.setAttribute('data-ccpops-popup', popup.id);
        }
       // if(inlineElem!=undefined) {
            //inlineElem.setAttribute('data-ccpops-inline', popup.id);
       // }
        if(triggerElem!=undefined){
            triggerElem.forEach(
                tElem => tElem.parentElement.setAttribute('data-ccpops-trigger', popup.id)
            )
        }


        //Bind the trigger
        triggerElem.forEach(
            tElem => (tElem.onclick = function(){
            _this.showPopup();
            return false;
        })
        );

        this.showPopup = function(){
            utils.debug('Showing popup');

            popupElem.style.opacity = 0;
            popupElem.style.display = 'block';

            utils.api.reporting().incrementClicks(popup.id);

            setTimeout(function(){
                popupElem.style.opacity = 1;
            },100);

            if(utils.device.isMobile()) {
                setTimeout(utils.scroll.lock, 500);
            }
        };

        this.hidePopup = function(){
            utils.debug('Hiding popup');

            if(utils.device.isMobile()) {
                utils.scroll.unlock();
            }

            popupElem.style.opacity = 0;

            setTimeout(function(){
                popupElem.style.display = 'none';
            },500);
        };

        utils.api.reporting().incrementImpressions(popup.id);

        //Bind the closing elements
        document.querySelector('#ccpops-popup-container__close').onclick = function(e){
            _this.hidePopup();
            e.stopPropagation();
            return false;
        };

        document.querySelector('#ccpops-popup').onclick = function(e){
            if(e.target.className.indexOf('ccpops-veil') > -1) {
                _this.hidePopup();
                return false;
            }
        };
    }

    (function () {
        utils.debug('%cDEBUG START', 'color:green;font-size:15px');

        if(window.location.href.indexOf('/products/') > -1  || window.location.href.indexOf('products_preview') > -1){

            utils.debug('Checking for current country code');
            if (utils.device.getCountryCode() == '') {
                utils.debug('No current country code. Looking it up');
                // We need to request the users country code to limit size charts by country
                // we don't do this async because the rendering will finish before the call returns
                const request = new XMLHttpRequest();
                request.open('GET', 'https://ipapi.co/json?key=OwQHjb65TriJYBJUdhwtOYkIembo9qQ2qkgx5Wx07d3NhHS3e1', false);  // `false` makes the request synchronous
                request.send(null);

                if (request.status === 200) {
                  var jsonData = JSON.parse(request.responseText);
                  utils.debug('browser country_code:' + jsonData.country_code_iso3);
                  utils.device.setCountryCode(jsonData.country_code_iso3);
                } else {
                    utils.error('ipapi error:' + request.responseText)
                    utils.device.setCountryCode('');
                }
            }

            //An array of popup data necessary to render the popups.
            //NOTE: The order of the popups in the array should by updated_at DESC
            var popups = [[INJECTED_POPUP_JS]];

            utils.debug('Got popups', popups);

            //Get the handle of the page
            var thisPageHandles = utils.getPageHandles();

            if (!thisPageHandles || !thisPageHandles.length) {
                utils.warn('Unable to get thisPageHandles', thisPageHandles);
                return;
            }
            utils.debug('Got thisPageHandles', thisPageHandles);

            //Loop each popup and decide whether to render the trigger link
            for (var i = 0; i < popups.length; i++) {
                var showingTriggerLink = false;
                var popup = popups[i];

                utils.debug('%cStarted processing popup ' + popup.id + ' (' + popup.name + ')', 'color:white;font-size:13px;background-color:blue');
                utils.debug('Popup ' + popup.id + ' dump: ', [popup]);

                //Make sure we have everything we need
                if (!popup.conditions) {
                    utils.warn('No conditions found for popup ' + popup.id, popups);
                    return;
                } else if (!popup.html) {
                    utils.warn('No html found for popup ' + popup.id, popups);
                    return;
                }

                //We can try and render and trigger link
                var triggerProducts = popup.conditions.products;
                var triggerCollections = popup.conditions.collections ||[];
                var triggerTags =  popup.conditions.tags || [];
                var triggerVendors = popup.conditions.vendors || "";
                var triggerTypes = popup.conditions.myTypes || [];
                var allDefault = popup.conditions.allProducts || false;

                // First off, should we display this size chart at all?
                if (popup.countryCode != null && popup.countryCode != '' ) {
                    utils.debug('Size chart has a country display requirement: ' + popup.countryCode);
                    if (utils.device.getCountryCode() != popup.countryCode) {
                        utils.debug('Skipping size chart because users country is ' + utils.device.countryCode + ' and size chart set to display ' + popup.countryCode);
                        continue;
                    }
                }

                if (triggerProducts.length === 0 && triggerCollections.length === 0 && triggerVendors.length === 0 && triggerTags.length === 0 && triggerTypes.length === 0) {
                    if(allDefault)
                    {
                         utils.debug('There are no products or collections on which to show popup ' + popup.id + '. Showing on all products.');
                        //utils.debug('There are no products or collections or tags or vendors on which to show popup ' + popup.id + '. So we won\'t show it.');
                        new Popup(popup);
                        showingTriggerLink = true;
                    }else{
                        utils.debug('There are no products or collections or tags or vendors or types on which to show popup ' + popup.id + '. So we won\'t show it.');
                    }
                    //Create a new popup for all product pages
                   // utils.debug('There are no products or collections on which to show popup ' + popup.id + '. Showing on all products.');
                    utils.debug('There are no products or collections or tags or vendors or types on which to show popup ' + popup.id + '. So we won\'t show it.');
                    //new Popup(popup);
                    //showingTriggerLink = true;


                } else if (triggerProducts.length > 0) {
                    if (utils.arrayContainsHandles(triggerProducts, thisPageHandles)) {
                        //Create a new popup for this product page
                        utils.debug('Found a matching Product - showing popup link.', triggerProducts);
                        new Popup(popup);
                        showingTriggerLink = true;

                    } else {
                        utils.debug("Popup is tagged to " + triggerProducts.length + " product(s) but this ain't one of them!", triggerProducts);
                    }
                } else {
                    utils.debug('This popup is not directly tagged to any Product.');
                }


                if (showingTriggerLink === false && triggerCollections.length > 0) {
                    if(window.ccPops && ccPops.sizeChart && ccPops.sizeChart.collections) {
                        if(ccPops.sizeChart.collections.length > 0){
                            utils.debug('This product belongs to ' + ccPops.sizeChart.collections.length + ' Collection(s)', ccPops.sizeChart.collections);

                            var matchedCollection = (utils.arrayContainsIds(ccPops.sizeChart.collections, triggerCollections));
                            utils.debug('matched collection: ', matchedCollection);
                            //This size chart is tagged with one of this products collections
                            if (matchedCollection) {
                                utils.debug('Found  a matching Collection (' + matchedCollection.title + ') - showing popup link.', matchedCollection);
                                new Popup(popup);
                                showingTriggerLink = true;

                            } else {
                                utils.debug("This popup doesn't belong in any of the " + triggerCollections.length + " Collections tagged against this Product", triggerCollections);
                            }
                        }
                    } else {
                        //Create a new popup for this product page
                        utils.debug('Unable to find any variable ccPops - the theme code has been removed!');
                    }
                }


                if (showingTriggerLink === false && triggerTags !== undefined && triggerTags.length > 0) {
                    if(window.ccPops && ccPops.sizeChart && ccPops.sizeChart.tags) {
                        if(ccPops.sizeChart.tags.length > 0){
                            utils.debug('This product belongs to ' + ccPops.sizeChart.tags.length + ' TAG(s)', ccPops.sizeChart.tags);

                            var matchedCollection = (utils.arrayContains(ccPops.sizeChart.tags, triggerTags));

                            //This size chart is tagged with one of this products collections
                            if (matchedCollection) {
                                utils.debug('Found  a matching Tag (' + matchedCollection + ') - showing popup link.', matchedCollection);
                                new Popup(popup);
                                showingTriggerLink = true;

                            } else {
                                utils.debug("This popup doesn't have any of the " + triggerTags.length + " tags associated with this Product", triggerCollections);
                            }
                        }
                    } else {
                        //Create a new popup for this product page
                        utils.debug('Unable to find any variable ccPops - the theme code has been removed!');
                    }
                }

                if (showingTriggerLink === false && triggerVendors !== undefined  && triggerVendors.length > 0) {
                    if(window.ccPops && ccPops.sizeChart && ccPops.sizeChart.vendors) {

                        if(ccPops.sizeChart.vendors !== ""){
                            utils.debug('This product belongs to ' + 'a' + ' vendor(s)', ccPops.sizeChart.vendors);
                            let productVendors = [];
                            productVendors.push(ccPops.sizeChart.vendors);
                            var matchedCollection = (utils.arrayContains(productVendors, triggerVendors));

                            //This size chart is tagged with one of this products collections
                            if (matchedCollection) {
                                utils.debug('Found  a matching vendor (' + matchedCollection + ') - showing popup link.', matchedCollection);
                                new Popup(popup);
                                showingTriggerLink = true;

                            } else {
                                utils.debug("This popup doesn't have any of the " + triggerVendors.length + " vendors associated with this Product", triggerVendors);
                            }
                        }
                    } else {
                        //Create a new popup for this product page
                        utils.debug('Unable to find any variable ccPops - the theme code has been removed!');
                    }
                }

                if (showingTriggerLink === false && triggerTypes !== undefined  && triggerTypes.length > 0) {
                    if(window.ccPops && ccPops.sizeChart && ccPops.sizeChart.myTypes) {

                        if(ccPops.sizeChart.myTypes !== ""){
                            utils.debug('This product belongs to ' + 'a' + ' type(s)', ccPops.sizeChart.myTypes);
                            let productTypes = [];
                            productTypes.push(ccPops.sizeChart.myTypes);
                            var matchedCollection = (utils.arrayContains(productTypes, triggerTypes));

                            //This size chart is set to show one of the types of this product
                            if (matchedCollection) {
                                utils.debug('Found a matching product type (' + matchedCollection + ') - showing popup link.', matchedCollection);
                                new Popup(popup);
                                showingTriggerLink = true;

                            } else {
                                utils.debug("This popup doesn't have any of the " + triggerTypes.length + " types associated with this Product", triggerTypes);
                            }
                        }
                    } else {
                        //Create a new popup for this product page
                        utils.debug('Unable to find any variable ccPops - the theme code has been removed!');
                    }
                }

                if(showingTriggerLink){
                    if (i < (popups.length - 1)) {
                        utils.debug('There\'s ' + ((popups.length - 1) - i) + ' more popup(s) which will not be processed ' +
                            'because this popup matched.');
                    }

                    utils.debug('%cFinished processing popup ' + popup.id + ' (' + popup.name + ')', 'color:white;font-size:13px;background-color:green');

                    break;
                }

                utils.debug('%cFinished processing popup ' + popup.id + ' (' + popup.name + ')', 'color:white;font-size:13px;background-color:blue');
            }
        } else {
            utils.debug('This is not a product page, aborting.');
        }
    })();
})();
