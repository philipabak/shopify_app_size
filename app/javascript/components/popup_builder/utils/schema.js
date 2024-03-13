export default {
    sizeChart: {
        appName: "Clean Size Charts",
        label: "Size Chart",
        labelPlural: "Size Charts",
        helpLink: "https://help.taskhusky.com/category/30-clean-size-chart",
        helpLink: "https://help.taskhusky.com/collection/41-clean-size-charts",
        tableHelpLink: "https://help.taskhusky.com/article/40-using-and-creating-tables",
        imageHelpLink: "https://help.taskhusky.com/article/38-using-your-own-images",
        onboardingTitle: "Size charts",
        onboardingContent: "Manage your size charts and check up on how many clicks they're getting.",
        apiNamespace: "size-chart",
        apiVerson: 'v1',
        showRecommendations: false,
        disabledComponents: {
            "settings": ["popupSize", "padding", "closeStyle", ""],
            "conditions": [],
            "trigger": []
        },
        tabLabels: ['Presets', 'Style', 'Content', 'Placement', 'Products', 'Analytics'],
        triggerIcons: [
            {
                id: 'none',
                label: 'None',
                image: null
            },
            {
                id: 'icon1',
                label: 'Tape Measure',
                image: '<svg width="240px" height="240px" viewBox="0 0 240 240" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                    '    <g id="Tape" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                    '        <rect x="0" y="0" width="240" height="240"></rect>\n' +
                    '        <g id="Group-25" transform="translate(4.100000, 30.000000)" stroke="currentColor" stroke-width="10">\n' +
                    '            <path d="M85.9998,58.9999 C104.2258,58.9999 118.9998,52.7319 118.9998,44.9999 C118.9998,37.2679 104.2258,30.9999 85.9998,30.9999 C67.7748,30.9999 52.9998,37.2679 52.9998,44.9999 C52.9998,52.7319 67.7748,58.9999 85.9998,58.9999 Z"></path>\n' +
                    '            <path d="M86.3783,89.9999 C136.0843,89.9999 172.0183,69.8529 172.0183,44.9999 C172.0183,20.1469 136.0843,-0.0001 86.3783,-0.0001 C36.6723,-0.0001 1.0183,20.1469 1.0183,44.9999 C1.0183,69.8529 36.6723,89.9999 86.3783,89.9999 Z"></path>\n' +
                    '            <path d="M1.0194,44.9638 L0.9994,116.8318 L0.9994,135.0008 C0.9994,157.0908 39.2794,175.0008 86.4994,175.0008 L231,174.8318 L231,89.9998 L86.3784,89.9998"></path>\n' +
                    '            <path d="M155.4998,170.1664 L155.4998,156.0004" stroke-linecap="round" stroke-linejoin="round"></path>\n' +
                    '            <path d="M108.4998,170.1664 L108.4998,156.0004" stroke-linecap="round" stroke-linejoin="round"></path>\n' +
                    '            <path d="M61.4998,170.1664 L61.4998,156.0004" stroke-linecap="round" stroke-linejoin="round"></path>\n' +
                    '            <path d="M131.4998,170.3891 L131.4998,144.0001" stroke-linecap="round" stroke-linejoin="round"></path>\n' +
                    '            <path d="M178.4998,170.3891 L178.4998,144.0001" stroke-linecap="round" stroke-linejoin="round"></path>\n' +
                    '            <path d="M84.4998,170.3891 L84.4998,144.0001" stroke-linecap="round" stroke-linejoin="round"></path>\n' +
                    '            <path d="M37.4998,165.3891 L37.4998,139.0001" stroke-linecap="round" stroke-linejoin="round"></path>\n' +
                    '            <path d="M202.4998,170.1664 L202.4998,156.0004" stroke-linecap="round" stroke-linejoin="round"></path>\n' +
                    '            <path d="M172.0184,44.9999 L172.0184,89.9999"></path>\n' +
                    '        </g>\n' +
                    '    </g>\n' +
                    '</svg>'
            },
            {
                id: 'icon2',
                label: 'Hanger',
                image: '<svg width="240px" height="240px" viewBox="0 0 240 240" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                    '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                    '        <rect x="0" y="0" width="240" height="240"></rect>\n' +
                    '        <path d="M127.720866,80.0908638 L214.279134,163.459136" stroke="currentColor" stroke-width="10" stroke-linecap="square" transform="translate(171.000000, 121.775000) rotate(-12.000000) translate(-171.000000, -121.775000) "></path>\n' +
                    '        <path d="M25.7208663,80.0908638 L112.279134,163.459136" stroke="currentColor" stroke-width="10" stroke-linecap="square" transform="translate(69.000000, 121.775000) scale(-1, 1) rotate(-12.000000) translate(-69.000000, -121.775000) "></path>\n' +
                    '        <path d="M30,192.748813 L210,192.748813" stroke="currentColor" stroke-width="10" stroke-linecap="square"></path>\n' +
                    '        <path d="M215,192.748813 C226.045695,192.748813 235,183.794508 235,172.748813 C235,165.738789 231.393509,159.571106 225.934764,156" stroke="currentColor" stroke-width="10"></path>\n' +
                    '        <path d="M5,192.748813 C16.045695,192.748813 25,183.794508 25,172.748813 C25,165.738789 21.3935094,159.571106 15.9347642,156" stroke="currentColor" stroke-width="10" transform="translate(15.000000, 174.374407) scale(-1, 1) translate(-15.000000, -174.374407) "></path>\n' +
                    '        <path d="M120.5,87.5 L120.5,71.9384766" stroke="currentColor" stroke-width="10" stroke-linecap="square"></path>\n' +
                    '        <path d="M119.5,72 C130.821837,72 140,62.8218374 140,51.5 C140,40.1781626 130.821837,31 119.5,31 C108.178163,31 99,40.1781626 99,51.5" stroke="currentColor" stroke-width="10"></path>\n' +
                    '    </g>\n' +
                    '</svg>'
            },
            {
                id: 'icon3',
                label: 'Ruler 1',
                image: '<svg width="240px" height="240px" viewBox="0 0 240 240" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                    '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                    '        <rect x="0" y="0" width="320" height="320"></rect>\n' +
                    '        <rect stroke="currentColor" stroke-width="10" x="5" y="5" width="70" height="230"></rect>\n' +
                    '        <rect stroke="currentColor" stroke-width="10" transform="translate(155.000000, 40.000000) rotate(-270.000000) translate(-155.000000, -40.000000) " x="120" y="-40" width="70" height="160"></rect>\n' +
                    '        <g transform="translate(107.000000, 7.000000)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="10">\n' +
                    '            <path d="M32.6960784,7.5 L18.5294118,7.5" transform="translate(26.029412, 8.000000) rotate(-90.000000) translate(-26.029412, -8.000000) "></path>\n' +
                    '            <path d="M78.754902,8.5 L64.5882353,8.5" transform="translate(72.088235, 8.000000) rotate(-90.000000) translate(-72.088235, -8.000000) "></path>\n' +
                    '            <path d="M61.4477124,14.7222222 L35.0588235,14.7222222" transform="translate(48.558824, 14.222222) rotate(-90.000000) translate(-48.558824, -14.222222) "></path>\n' +
                    '            <path d="M14.3888889,14.7222222 L-12,14.7222222" transform="translate(1.500000, 14.222222) rotate(-90.000000) translate(-1.500000, -14.222222) "></path>\n' +
                    '            <path d="M108.506536,14.7222222 L82.1176471,14.7222222" transform="translate(95.617647, 14.222222) rotate(-90.000000) translate(-95.617647, -14.222222) "></path>\n' +
                    '        </g>\n' +
                    '        <g transform="translate(11.000000, 49.000000)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="10">\n' +
                    '            <path d="M14.1666667,93.5 L0,93.5" transform="translate(7.500000, 94.000000) rotate(-180.000000) translate(-7.500000, -94.000000) "></path>\n' +
                    '            <path d="M14.1666667,48.5 L8.48087033e-16,48.5" transform="translate(7.500000, 48.000000) rotate(-180.000000) translate(-7.500000, -48.000000) "></path>\n' +
                    '            <path d="M15.1666667,1.5 L0,1.5" transform="translate(8.000000, 1.000000) rotate(-180.000000) translate(-8.000000, -1.000000) "></path>\n' +
                    '            <path d="M26.3888889,71.5 L0,71.5" transform="translate(13.500000, 71.000000) rotate(-180.000000) translate(-13.500000, -71.000000) "></path>\n' +
                    '            <path d="M26.3888889,118.5 L0,118.5" transform="translate(13.500000, 118.000000) rotate(-180.000000) translate(-13.500000, -118.000000) "></path>\n' +
                    '            <path d="M26.3888889,24.5 L0,24.5" transform="translate(13.500000, 24.000000) rotate(-180.000000) translate(-13.500000, -24.000000) "></path>\n' +
                    '            <path d="M14.1666667,142.5 L8.48087033e-16,142.5" transform="translate(7.500000, 142.000000) rotate(-180.000000) translate(-7.500000, -142.000000) "></path>\n' +
                    '        </g>\n' +
                    '    </g>\n' +
                    '</svg>'
            },
            {
                id: 'icon4',
                label: 'Ruler 2',
                image: '<svg width="240px" height="240px" viewBox="0 0 240 240" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                    '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                    '        <rect x="0" y="0" width="240" height="240"></rect>\n' +
                    '        <rect stroke="currentColor" stroke-width="10" transform="translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) " x="85" y="5" width="70" height="230"></rect>\n' +
                    '        <g transform="translate(35.000000, 85.000000)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="10">\n' +
                    '            <path d="M121,9.5 L103,9.5" transform="translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) "></path>\n' +
                    '            <path d="M66,9.5 L48,9.5" transform="translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) "></path>\n' +
                    '            <path d="M10,10.5 L-9,10.5" transform="translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) "></path>\n' +
                    '            <path d="M100,17.5 L67,17.5" transform="translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) "></path>\n' +
                    '            <path d="M157,17.5 L124,17.5" transform="translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) "></path>\n' +
                    '            <path d="M44,17.5 L11,17.5" transform="translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) "></path>\n' +
                    '            <path d="M179,9.5 L161,9.5" transform="translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) "></path>\n' +
                    '        </g>\n' +
                    '    </g>\n' +
                    '</svg>'
            },
            {
                id: 'icon5',
                label: 'Shirt',
                image: '<svg width="240px" height="240px" viewBox="0 0 240 240" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                    '    <defs>\n' +
                    '        <path d="M40,60.4960119 L0,60.4960119 L0,0.7787322 L81.6020443,0.7787322 C81.6020443,0.825546334 81.5943298,0.872360469 81.5943298,0.917224014 C81.5943298,22.3698009 98.7899487,39.7612517 120.000964,39.7612517 C141.21198,39.7612517 158.40567,22.3698009 158.40567,0.917224014 C158.40567,0.872360469 158.397956,0.825546334 158.397956,0.7787322 L240,0.7787322 L240,60.4960119 L200,60.4960119 L200,240.826722 L40,240.826722 L40,60.4960119 Z"></path>\n' +
                    '    </defs>\n' +
                    '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                    '        <rect x="0" y="0" width="320" height="320"></rect>\n' +
                    '        <g transform="translate(0.000000, -0.826722)">\n' +
                    '            <mask fill="white">\n' +
                    '                <use xlink:href="#path-1"></use>\n' +
                    '            </mask>\n' +
                    '            <path stroke="currentColor" stroke-width="10" d="M45,235.826722 L195,235.826722 L195,55.4960119 L235,55.4960119 L235,5.7787322 L163.141786,5.7787322 C160.747747,27.695485 142.357496,44.7612517 120.000964,44.7612517 C97.6441813,44.7612517 79.2524988,27.6952555 76.8582418,5.7787322 L5,5.7787322 L5,55.4960119 L45,55.4960119 L45,235.826722 Z M76.6074782,0.528263354 C76.6095046,0.493453821 76.6117808,0.470547118 76.615429,0.433833704 C76.6136085,0.448881516 76.6110466,0.481743655 76.6086508,0.526513291 Z M153.417161,1.24816509 C153.417713,1.25385547 153.418313,1.25821167 153.419055,1.26358545 C153.418472,1.25752214 153.417887,1.25123738 153.417303,1.2447386 Z"></path>\n' +
                    '        </g>\n' +
                    '        <g transform="translate(127.000000, 87.000000)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="10">\n' +
                    '            <path d="M65.3943662,25.4990564 L29,25.5009436" transform="translate(47.197183, 25.500000) rotate(-360.000000) translate(-47.197183, -25.500000) "></path>\n' +
                    '            <path d="M65.3943662,69.5019536 L29,69.4980464" transform="translate(47.197183, 69.500000) rotate(-360.000000) translate(-47.197183, -69.500000) "></path>\n' +
                    '            <path d="M65.1267606,46.5059754 L-4.97379915e-14,46.4940246" transform="translate(32.563380, 46.500000) rotate(-360.000000) translate(-32.563380, -46.500000) "></path>\n' +
                    '            <path d="M65.1267606,0.502830665 L5.68434189e-14,0.497169335" transform="translate(32.563380, 0.500000) rotate(-360.000000) translate(-32.563380, -0.500000) "></path>\n' +
                    '            <path d="M65.1267606,91.502241 L-4.97379915e-14,91.497759" transform="translate(32.563380, 91.500000) rotate(-360.000000) translate(-32.563380, -91.500000) "></path>\n' +
                    '            <path d="M65.3943662,115.501954 L29,115.498046" transform="translate(47.197183, 115.500000) rotate(-360.000000) translate(-47.197183, -115.500000) "></path>\n' +
                    '        </g>\n' +
                    '    </g>\n' +
                    '</svg>'
            }
        ],
        presets: [
            {
                "name": "Men's Top",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/mens_top.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Men's Top</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"border-collapse: collapse; border-width: 1px; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr>\n<th style=\"border-width: 1px;\">&nbsp;</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\" colspan=\"2\">Chest</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\" colspan=\"2\">Waist</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\" colspan=\"2\">Hips</th>\n</tr>\n<tr>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">Size</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">in</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">cm</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">in</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">cm</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">&nbsp;in</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">cm</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"border-color: #ced4d9;\">\n<td style=\"border-width: 1px; border-color: #ced4d9;\">XS</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">31-32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">79-81</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">24-25</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">61-64</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">33-34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">84-86</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">S</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">33-34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">84-86</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">26-27</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">66-69</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">35-36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">89-91</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">M</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">35-36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">89-91</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">28-29</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">71-74</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">37-38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">94-97</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">L</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">37-39</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">94-99</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">30-32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">76-81</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">39-41</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">99-104</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">XL</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40-42</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">102-107</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">33-35</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">84-89</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">42-44</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">107-112</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">XXL</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">43-45</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">109-114</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36-38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">91-97</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">45-47</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">114-119</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p><strong>Chest:</strong> Measure around the fullest part of your chest, making sure the tape measure is parallel to the ground and not too tight or too loose.</p>\n<p><strong>Waist:</strong> Measure around the narrowest part of your waist, usually just above your belly button. Make sure the tape measure is snug but not too tight or too loose.</p>\n<p><strong>Hips:</strong> Measure around the fullest part of your hips, usually around the widest part of your buttocks. Make sure the tape measure is parallel to the ground and not too tight or too loose.</p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Women's Top",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/womens_top.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Women's Top</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"border-collapse: collapse; border-width: 1px; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr>\n<th style=\"border-width: 1px;\">&nbsp;</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\" colspan=\"2\">Chest</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\" colspan=\"2\">Waist</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\" colspan=\"2\">Hips</th>\n</tr>\n<tr>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">Size</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">in</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">cm</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">in</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">cm</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">&nbsp;in</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">cm</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"border-color: #ced4d9;\">\n<td style=\"border-width: 1px; border-color: #ced4d9;\">XS</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">31-32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">79-81</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">24-25</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">61-64</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">33-34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">84-86</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">S</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">33-34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">84-86</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">26-27</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">66-69</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">35-36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">89-91</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">M</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">35-36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">89-91</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">28-29</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">71-74</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">37-38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">94-97</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">L</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">37-39</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">94-99</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">30-32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">76-81</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">39-41</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">99-104</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">XL</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40-42</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">102-107</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">33-35</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">84-89</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">42-44</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">107-112</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">XXL</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">43-45</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">109-114</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36-38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">91-97</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">45-47</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">114-119</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p><strong>Bust:</strong> Measure around the fullest part of your bust, making sure the tape measure is parallel to the ground and not too tight or too loose. Make sure to wear a well-fitting bra to get an accurate measurement.</p>\n<p><strong>Waist:</strong> Measure around the narrowest part of your waist, usually just above your belly button. Make sure the tape measure is snug but not too tight or too loose.</p>\n<p><strong>Hips:</strong> Measure around the fullest part of your hips, usually around the widest part of your buttocks. Make sure the tape measure is parallel to the ground and not too tight or too loose.</p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Men's Bottom",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/mens_bottom.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Men's Bottom</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table>\n<thead>\n<tr>\n<th>&nbsp;</th>\n<th colspan=\"2\">Waist</th>\n<th colspan=\"2\">Inseam</th>\n</tr>\n<tr>\n<th>US Size</th>\n<th>in</th>\n<th>cm</th>\n<th>in</th>\n<th>cm</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>28</td>\n<td>28</td>\n<td>71</td>\n<td>30-32</td>\n<td>76-81</td>\n</tr>\n<tr>\n<td>29</td>\n<td>29</td>\n<td>74</td>\n<td>30-32</td>\n<td>76-81</td>\n</tr>\n<tr>\n<td>30</td>\n<td>30</td>\n<td>76</td>\n<td>30-34</td>\n<td>76-86</td>\n</tr>\n<tr>\n<td>31</td>\n<td>31</td>\n<td>79</td>\n<td>30-34</td>\n<td>76-86</td>\n</tr>\n<tr>\n<td>32</td>\n<td>32</td>\n<td>81</td>\n<td>30-36</td>\n<td>76-91</td>\n</tr>\n<tr>\n<td>33</td>\n<td>33</td>\n<td>84</td>\n<td>30-36</td>\n<td>76-91</td>\n</tr>\n<tr>\n<td>34</td>\n<td>34</td>\n<td>86</td>\n<td>30-36</td>\n<td>76-91</td>\n</tr>\n<tr>\n<td>36</td>\n<td>36</td>\n<td>91</td>\n<td>30-36</td>\n<td>76-91</td>\n</tr>\n<tr>\n<td>38</td>\n<td>38</td>\n<td>97</td>\n<td>30-36</td>\n<td>76-91</td>\n</tr>\n<tr>\n<td>40</td>\n<td>40</td>\n<td>102</td>\n<td>30-36</td>\n<td>76-91</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p><strong>Waist:</strong> Measure around the narrowest part of your waist, usually just above your belly button. Make sure the tape measure is snug but not too tight or too loose.</p>\n<p><strong>Inseam:</strong> Measure from the crotch seam to the bottom of the leg, or from the inside of the leg to the ankle, depending on your preference.</p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Women's Bottom",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/womens_bottom.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Women's Bottom</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"border-collapse: collapse; width: 100%; height: 285.563px; border-width: 1px; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr style=\"height: 23.7969px;\">\n<th style=\"height: 23.7969px; width: 42.8152%; border-width: 1px; border-color: #ced4d9;\" colspan=\"3\">Size</th>\n<th style=\"width: 28.5435%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\" colspan=\"2\">Waist</th>\n<th style=\"width: 28.5435%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\" colspan=\"2\">Hips</th>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<th style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">US Size</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">UK Size</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">EU Size</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">in</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">cm</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">in</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">cm</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">0</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">4</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">32</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">24-25</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">61-63</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">34-35</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">86-89</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">2</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">6</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">34</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">25-26</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">63-66</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">35-36</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">89-91</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">4</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">8</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">36</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">26-27</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">66-69</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">36-37</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">91-94</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">6</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">10</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">38</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">27-28</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">69-71</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">37-38</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">94-97</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">8</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">12</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">40</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">28-29</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">71-74</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">38-39</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">97-99</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">10</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">14</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">42</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">29-30</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">74-76</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">40-41</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">102-104</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">12</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">16</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">44</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">30-31</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">76-79</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">41-42</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">104-107</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">14</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">18</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">46</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">32-33</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">81-84</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">43-44</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">109-112</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">16</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">20</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">48</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">33-34</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">84-86</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">44-45</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">112-114</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">18</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">22</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">50</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">35-36</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">89-91</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">46-47</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-width: 1px; border-color: #ced4d9;\">117-119</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Men's Shoes",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/ments_shoes.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Men's Shoes</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"border-collapse: collapse; border-width: 1px; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr>\n<th style=\"border-color: #ced4d9; border-width: 1px;\" colspan=\"3\">Sizes</th>\n<th style=\"border-color: #ced4d9; border-width: 1px;\" colspan=\"2\">Foot Length</th>\n</tr>\n<tr>\n<th style=\"border-color: #ced4d9; border-width: 1px;\">US Size</th>\n<th style=\"border-color: #ced4d9; border-width: 1px;\">UK Size</th>\n<th style=\"border-color: #ced4d9; border-width: 1px;\">EU Size</th>\n<th style=\"border-color: #ced4d9; border-width: 1px;\">in</th>\n<th style=\"border-color: #ced4d9; border-width: 1px;\">cm</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">6</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">5.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">39</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">9.25</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">23.5</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">6.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">6</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">39.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">9.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">24.1</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">7</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">6.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">40</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">9.625</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">24.4</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">7.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">7</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">40.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">9.75</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">24.8</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">8</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">7.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">41</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">9.9375</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">25.4</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">8.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">8</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">42</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10.125</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">25.7</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">9</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">8.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">42.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10.25</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">26.0</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">9.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">9</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">43</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10.4375</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">26.7</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">9.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">44</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10.5625</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">27.0</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">44.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10.75</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">27.3</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">11</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">45</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">10.9375</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">27.9</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">11.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">11</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">46</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">11.125</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">28.3</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">12</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">11.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">46.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">11.25</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">28.6</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">13</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">12.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">48</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">11.5625</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">29.4</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">14</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">13.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">49</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">11.875</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">30.2</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">15</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">14.5</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">50</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">12.1875</td>\n<td style=\"border-color: #ced4d9; border-width: 1px;\">31.0</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p>To measure your foot length, place your bare foot on a piece of paper and trace around it. Then, measure the length from the tip of your longest toe to the back of your heel. Use this measurement to find your corresponding size in the chart.</p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Women's Shoes",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/womens_shoes.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Women's Shoes</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"border-collapse: collapse; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr>\n<th style=\"border-color: #ced4d9;\" colspan=\"3\">Size</th>\n<th style=\"border-color: #ced4d9;\" colspan=\"2\">Foot Length</th>\n</tr>\n<tr>\n<th style=\"border-color: #ced4d9;\">US Size</th>\n<th style=\"border-color: #ced4d9;\">UK Size</th>\n<th style=\"border-color: #ced4d9;\">EU Size</th>\n<th style=\"border-color: #ced4d9;\">in</th>\n<th style=\"border-color: #ced4d9;\">cm</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"border-color: #ced4d9;\">4</td>\n<td style=\"border-color: #ced4d9;\">2</td>\n<td style=\"border-color: #ced4d9;\">34</td>\n<td style=\"border-color: #ced4d9;\">8.1875</td>\n<td style=\"border-color: #ced4d9;\">20.8</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">4.5</td>\n<td style=\"border-color: #ced4d9;\">2.5</td>\n<td style=\"border-color: #ced4d9;\">34.5</td>\n<td style=\"border-color: #ced4d9;\">8.375</td>\n<td style=\"border-color: #ced4d9;\">21.3</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">5</td>\n<td style=\"border-color: #ced4d9;\">3</td>\n<td style=\"border-color: #ced4d9;\">35</td>\n<td style=\"border-color: #ced4d9;\">8.5</td>\n<td style=\"border-color: #ced4d9;\">21.6</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">5.5</td>\n<td style=\"border-color: #ced4d9;\">3.5</td>\n<td style=\"border-color: #ced4d9;\">36</td>\n<td style=\"border-color: #ced4d9;\">8.75</td>\n<td style=\"border-color: #ced4d9;\">22.2</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">6</td>\n<td style=\"border-color: #ced4d9;\">4</td>\n<td style=\"border-color: #ced4d9;\">36.5</td>\n<td style=\"border-color: #ced4d9;\">8.875</td>\n<td style=\"border-color: #ced4d9;\">22.5</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">6.5</td>\n<td style=\"border-color: #ced4d9;\">4.5</td>\n<td style=\"border-color: #ced4d9;\">37</td>\n<td style=\"border-color: #ced4d9;\">9.0625</td>\n<td style=\"border-color: #ced4d9;\">23.0</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">7</td>\n<td style=\"border-color: #ced4d9;\">5</td>\n<td style=\"border-color: #ced4d9;\">37.5</td>\n<td style=\"border-color: #ced4d9;\">9.25</td>\n<td style=\"border-color: #ced4d9;\">23.5</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">7.5</td>\n<td style=\"border-color: #ced4d9;\">5.5</td>\n<td style=\"border-color: #ced4d9;\">38</td>\n<td style=\"border-color: #ced4d9;\">9.375</td>\n<td style=\"border-color: #ced4d9;\">23.8</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">8</td>\n<td style=\"border-color: #ced4d9;\">6</td>\n<td style=\"border-color: #ced4d9;\">38.5</td>\n<td style=\"border-color: #ced4d9;\">9.5</td>\n<td style=\"border-color: #ced4d9;\">24.1</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">8.5</td>\n<td style=\"border-color: #ced4d9;\">6.5</td>\n<td style=\"border-color: #ced4d9;\">39</td>\n<td style=\"border-color: #ced4d9;\">9.6875</td>\n<td style=\"border-color: #ced4d9;\">24.6</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">9</td>\n<td style=\"border-color: #ced4d9;\">7</td>\n<td style=\"border-color: #ced4d9;\">40</td>\n<td style=\"border-color: #ced4d9;\">9.875</td>\n<td style=\"border-color: #ced4d9;\">25.1</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">9.5</td>\n<td style=\"border-color: #ced4d9;\">7.5</td>\n<td style=\"border-color: #ced4d9;\">40.5</td>\n<td style=\"border-color: #ced4d9;\">10</td>\n<td style=\"border-color: #ced4d9;\">25.4</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">10</td>\n<td style=\"border-color: #ced4d9;\">8</td>\n<td style=\"border-color: #ced4d9;\">41</td>\n<td style=\"border-color: #ced4d9;\">10.1875</td>\n<td style=\"border-color: #ced4d9;\">25.9</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">10.5</td>\n<td style=\"border-color: #ced4d9;\">8.5</td>\n<td style=\"border-color: #ced4d9;\">42</td>\n<td style=\"border-color: #ced4d9;\">10.3125</td>\n<td style=\"border-color: #ced4d9;\">26.2</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">11</td>\n<td style=\"border-color: #ced4d9;\">9</td>\n<td style=\"border-color: #ced4d9;\">42.5</td>\n<td style=\"border-color: #ced4d9;\">10.5</td>\n<td style=\"border-color: #ced4d9;\">26.7</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">11.5</td>\n<td style=\"border-color: #ced4d9;\">9.5</td>\n<td style=\"border-color: #ced4d9;\">43</td>\n<td style=\"border-color: #ced4d9;\">10.6875</td>\n<td style=\"border-color: #ced4d9;\">27.1</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">12</td>\n<td style=\"border-color: #ced4d9;\">10</td>\n<td style=\"border-color: #ced4d9;\">44</td>\n<td style=\"border-color: #ced4d9;\">10.875</td>\n<td style=\"border-color: #ced4d9;\">27.6</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p>To measure your foot length, place your bare foot on a piece of paper and trace around it. Then, measure the length from the tip of your longest toe to the back of your heel. Use this measurement to find your corresponding size in the chart.</p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Bra",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/bra.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Bra's</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"border-collapse: collapse; border-width: 1px; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">Band Size</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">Cup Size</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">Bust (in)</th>\n<th style=\"border-width: 1px; border-color: #ced4d9;\">Bust (cm)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">30</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">A</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">81</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">30</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">B</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">33</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">84</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">30</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">C</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">86</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">30</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">D</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">35</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">89</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">30</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">DD/E</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">91</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">A</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">86</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">B</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">35</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">89</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">C</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">91</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">D</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">37</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">94</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">32</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">DD/E</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">97</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">A</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">91</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">B</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">37</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">94</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">C</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">97</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">D</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">39</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">99</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">34</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">DD/E</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">102</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">A</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">97</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">B</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">39</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">99</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">C</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">102</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">D</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">41</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">104</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">36</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">DD/E</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">42</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">107</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">A</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">102</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">B</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">41</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">104</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">C</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">42</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">107</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">D</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">43</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">109</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">38</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">DD/E</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">44</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">112</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">A</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">42</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">107</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">B</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">43</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">109</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">C</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">44</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">112</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">D</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">45</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">114</td>\n</tr>\n<tr>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">40</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">DD/E</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">46</td>\n<td style=\"border-width: 1px; border-color: #ced4d9;\">117</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p>Start by measuring your band size. Wrap a tape measure snugly around your ribcage just under your bust, making sure the tape is level all the way around.</p>\n<p>Round the measurement to the nearest whole number. If the measurement is even, add 4 inches (or 10 cm); if it's odd, add 5 inches (or 12.5 cm). This is your band size.</p>\n<p>To determine your cup size, measure around the fullest part of your bust, making sure the tape measure is level all the way around.</p>\n<p>Subtract your band size from your bust measurement. The difference will correspond to your cup size based on the following chart:</p>\n<p>0: A cup<br />1: B cup<br />2: C cup<br />3: D cup<br />4: DD/E cup<br /><br />Combine your band size and cup size to get your bra size. For example, if your band size is 34 and your cup size is B, your bra size is 34B.</p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Dress",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/dress.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Dresses</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"border-collapse: collapse; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr>\n<th style=\"border-color: #ced4d9;\" rowspan=\"2\">Size</th>\n<th style=\"border-color: #ced4d9;\" colspan=\"2\">Bust</th>\n<th style=\"border-color: #ced4d9;\" colspan=\"2\">Waist</th>\n<th style=\"border-color: #ced4d9;\" colspan=\"2\">Hips</th>\n</tr>\n<tr>\n<th style=\"border-color: #ced4d9;\">in</th>\n<th style=\"border-color: #ced4d9;\">cm</th>\n<th style=\"border-color: #ced4d9;\">in</th>\n<th style=\"border-color: #ced4d9;\">cm</th>\n<th style=\"border-color: #ced4d9;\">in</th>\n<th style=\"border-color: #ced4d9;\">cm</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"border-color: #ced4d9;\">XS</td>\n<td style=\"border-color: #ced4d9;\">31-32</td>\n<td style=\"border-color: #ced4d9;\">79-81</td>\n<td style=\"border-color: #ced4d9;\">24-25</td>\n<td style=\"border-color: #ced4d9;\">61-63</td>\n<td style=\"border-color: #ced4d9;\">34-35</td>\n<td style=\"border-color: #ced4d9;\">86-89</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">S</td>\n<td style=\"border-color: #ced4d9;\">33-34</td>\n<td style=\"border-color: #ced4d9;\">84-86</td>\n<td style=\"border-color: #ced4d9;\">26-27</td>\n<td style=\"border-color: #ced4d9;\">66-69</td>\n<td style=\"border-color: #ced4d9;\">36-37</td>\n<td style=\"border-color: #ced4d9;\">91-94</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">M</td>\n<td style=\"border-color: #ced4d9;\">35-36</td>\n<td style=\"border-color: #ced4d9;\">89-91</td>\n<td style=\"border-color: #ced4d9;\">28-29</td>\n<td style=\"border-color: #ced4d9;\">71-74</td>\n<td style=\"border-color: #ced4d9;\">38-39</td>\n<td style=\"border-color: #ced4d9;\">97-99</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">L</td>\n<td style=\"border-color: #ced4d9;\">37-39</td>\n<td style=\"border-color: #ced4d9;\">94-99</td>\n<td style=\"border-color: #ced4d9;\">30-32</td>\n<td style=\"border-color: #ced4d9;\">76-81</td>\n<td style=\"border-color: #ced4d9;\">40-42</td>\n<td style=\"border-color: #ced4d9;\">102-107</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">XL</td>\n<td style=\"border-color: #ced4d9;\">40-42</td>\n<td style=\"border-color: #ced4d9;\">102-107</td>\n<td style=\"border-color: #ced4d9;\">33-35</td>\n<td style=\"border-color: #ced4d9;\">84-89</td>\n<td style=\"border-color: #ced4d9;\">43-45</td>\n<td style=\"border-color: #ced4d9;\">109-114</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">XXL</td>\n<td style=\"border-color: #ced4d9;\">43-45</td>\n<td style=\"border-color: #ced4d9;\">109-114</td>\n<td style=\"border-color: #ced4d9;\">36-38</td>\n<td style=\"border-color: #ced4d9;\">91-97</td>\n<td style=\"border-color: #ced4d9;\">46-48</td>\n<td style=\"border-color: #ced4d9;\">117-122</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p>To measure your dress size, follow these steps:</p>\n<p>Bust measurement: Wrap a tape measure around the fullest part of your bust, making sure the tape is level all the way around.</p>\n<p>Waist measurement: Wrap a tape measure around the narrowest part of your waist, which is usually above your belly button and below your rib cage. Make sure the tape is snug but not too tight.</p>\n<p>Hips measurement: Wrap a tape measure around the fullest part of your hips, which is usually at the widest part of your buttocks.</p>\n<p>Use the measurements to find your corresponding size in the chart. If your measurements fall between two sizes, it's usually best to go with the larger size.</p>\n<p>&nbsp;</p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Bikini",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/bikini.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Bikini's</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--odd-stripes\" style=\"border-collapse: collapse; width: 100%; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr>\n<th style=\"width: 100%; border-color: #ced4d9;\" colspan=\"4\">Bikini Top</th>\n</tr>\n<tr>\n<th style=\"width: 25%; border-color: #ced4d9;\">Size</th>\n<th style=\"width: 25%; border-color: #ced4d9;\">Bust (in)</th>\n<th style=\"width: 25%; border-color: #ced4d9;\">Bust (cm)</th>\n<th style=\"width: 25%; border-color: #ced4d9;\">Cup Size</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"width: 25%; border-color: #ced4d9;\">XS</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">30-32</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">76-81</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">A-B</td>\n</tr>\n<tr>\n<td style=\"width: 25%; border-color: #ced4d9;\">S</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">32-34</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">81-86</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">B-C</td>\n</tr>\n<tr>\n<td style=\"width: 25%; border-color: #ced4d9;\">M</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">34-36</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">86-91</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">C-D</td>\n</tr>\n<tr>\n<td style=\"width: 25%; border-color: #ced4d9;\">L</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">36-38</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">91-97</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">D-DD/E</td>\n</tr>\n<tr>\n<td style=\"width: 25%; border-color: #ced4d9;\">XL</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">38-40</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">97-102</td>\n<td style=\"width: 25%; border-color: #ced4d9;\">DD/E-F</td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>\n<table class=\"ccpops-table ccpops-table--odd-stripes\" style=\"border-collapse: collapse; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr>\n<th style=\"border-color: #ced4d9;\" colspan=\"5\">Bikini Bottom</th>\n</tr>\n<tr>\n<th style=\"border-color: #ced4d9;\" rowspan=\"2\">Size</th>\n<th style=\"border-color: #ced4d9;\" colspan=\"2\">Waist</th>\n<th style=\"border-color: #ced4d9;\" colspan=\"2\">Hips</th>\n</tr>\n<tr>\n<th style=\"border-color: #ced4d9;\">in</th>\n<th style=\"border-color: #ced4d9;\">cm</th>\n<th style=\"border-color: #ced4d9;\">in</th>\n<th style=\"border-color: #ced4d9;\">cm</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"border-color: #ced4d9;\">XS</td>\n<td style=\"border-color: #ced4d9;\">24-25</td>\n<td style=\"border-color: #ced4d9;\">61-64</td>\n<td style=\"border-color: #ced4d9;\">34-35</td>\n<td style=\"border-color: #ced4d9;\">86-89</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">S</td>\n<td style=\"border-color: #ced4d9;\">26-27</td>\n<td style=\"border-color: #ced4d9;\">66-69</td>\n<td style=\"border-color: #ced4d9;\">36-37</td>\n<td style=\"border-color: #ced4d9;\">91-94</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">M</td>\n<td style=\"border-color: #ced4d9;\">28-29</td>\n<td style=\"border-color: #ced4d9;\">71-74</td>\n<td style=\"border-color: #ced4d9;\">38-39</td>\n<td style=\"border-color: #ced4d9;\">97-99</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">L</td>\n<td style=\"border-color: #ced4d9;\">30-31</td>\n<td style=\"border-color: #ced4d9;\">76-79</td>\n<td style=\"border-color: #ced4d9;\">40-41</td>\n<td style=\"border-color: #ced4d9;\">102-104</td>\n</tr>\n<tr>\n<td style=\"border-color: #ced4d9;\">XL</td>\n<td style=\"border-color: #ced4d9;\">32-33</td>\n<td style=\"border-color: #ced4d9;\">81-84</td>\n<td style=\"border-color: #ced4d9;\">42-43</td>\n<td style=\"border-color: #ced4d9;\">107-109</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">To measure your bikini top size, follow these steps:</span></p>\n<p><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">Bust measurement: Wrap a tape measure around the fullest part of your bust, making sure the tape is level all the way around.</span></p>\n<p><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">Cup measurement: Measure around the fullest part of your bust again, but this time subtract your band measurement (measured around your ribcage just under your bust). The difference in inches or centimeters between your bust measurement and your band measurement corresponds to your cup size based on the following chart:</span></p>\n<p><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">A cup: 1 inch (2.5 cm)</span><br /><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">B cup: 2 inches (5 cm)</span><br /><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">C cup: 3 inches (7.5 cm)</span><br /><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">D cup: 4 inches (10 cm)</span><br /><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">DD/E cup: 5 inches (12.5 cm)</span><br /><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">F cup: 6 inches (15 cm)</span><br /><br /><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">Use your bust and cup measurements to find your corresponding size in the chart. If your measurements fall between two sizes, it's usually best to go with the larger size.</span></p>\n<p><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">To measure your bikini bottom size, follow these steps:</span></p>\n<p><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">Waist measurement: Wrap a tape measure around the narrowest part of your waist, which is usually above your belly button and below your rib cage. Make sure the tape is snug but not too tight.</span></p>\n<p><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">Hips measurement: Wrap a tape measure around the fullest part of your hips, which is usually at the widest part of your buttocks.</span></p>\n<p><span style=\"font-size: 14px; font-family: arial, helvetica, sans-serif;\">Use the measurements to find your corresponding size in the chart. If your measurements fall between two sizes, it's usually best to go with the larger size.</span></p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Pet Clothing",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/pet_clothing.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Pet Clothing</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"border-collapse: collapse; width: 100%; height: 166.578px; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr style=\"height: 23.7969px;\">\n<th style=\"height: 47.5938px; width: 14.2717%; border-color: #ced4d9;\" rowspan=\"2\">Size</th>\n<th style=\"height: 23.7969px; width: 28.5435%; border-color: #ced4d9;\" colspan=\"2\">Back Length</th>\n<th style=\"height: 23.7969px; width: 28.5435%; border-color: #ced4d9;\" colspan=\"2\">Chest</th>\n<th style=\"height: 23.7969px; width: 28.5435%; border-color: #ced4d9;\" colspan=\"2\">Neck</th>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<th style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">in</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">cm</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">in</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">cm</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">in</th>\n<th style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">cm</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">XS</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">up to 8</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">up to 20</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">12-16</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">30-40</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">up to 9</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">up to 23</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">S</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">8-10</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">20-25</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">16-20</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">40-50</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">9-12</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">23-30</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">M</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">10-12</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">25-30</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">20-24</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">50-60</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">12-14</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">30-35</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">L</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">12-14</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">30-35</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">24-28</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">60-70</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">14-17</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">35-43</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">XL</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">14-16</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">35-40</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">28-32</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">70-80</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">17-20</td>\n<td style=\"width: 14.2717%; height: 23.7969px; border-color: #ced4d9;\">43-50</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p>To measure your pet's clothing size, follow these steps:</p>\n<p><strong>Back length measurement:</strong> Measure from the base of your pet's neck (where the collar would sit) to the base of their tail. This is the length of your pet's back.</p>\n<p><strong>Chest measurement:</strong> Measure around the fullest part of your pet's chest, just behind their front legs.</p>\n<p><strong>Neck measurement:</strong> Measure around the base of your pet's neck, where the collar would sit.</p>\n<p>Use the measurements to find your corresponding size in the chart. If your pet's measurements fall between two sizes, it's usually best to go with the larger size.</p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Pet Collar",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/pet_collar.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<h2>Pet Collar</h2>\n<p>Use the size chart below to determine your size.&nbsp;</p>",
                      "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"border-collapse: collapse; width: 100%; height: 166.578px; border-color: #ced4d9;\" border=\"1\">\n<thead>\n<tr style=\"height: 23.7969px;\">\n<th style=\"width: 33.3333%; height: 47.5938px; border-color: #ced4d9;\" rowspan=\"2\">Size</th>\n<th style=\"height: 23.7969px; width: 66.6667%; border-color: #ced4d9;\" colspan=\"2\">Neck Size</th>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<th style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">in</th>\n<th style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">cm</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">XS</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">6-10</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">15-25</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">S</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">10-14</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">25-35</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">M</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">14-18</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">35-45</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">L</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">18-22</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">45-55</td>\n</tr>\n<tr style=\"height: 23.7969px;\">\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">XL</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">22-26</td>\n<td style=\"width: 33.3333%; height: 23.7969px; border-color: #ced4d9;\">55-65</td>\n</tr>\n</tbody>\n</table>",
                      "bottomText": "<h2>How to Measure</h2>\n<p>To measure your pet's collar size, follow these steps:</p>\n<p><strong>Measure your pet's neck:</strong> Wrap a tape measure around your pet's neck, making sure it is snug but not too tight. If you don't have a tape measure, you can use a piece of string and then measure the string with a ruler.</p>\n<p><strong>Add two inches (5 cm):</strong> Once you have the measurement, add two inches (5 cm) to get the right collar size for your pet. This allows for some extra space so that the collar is not too tight.</p>\n<p>Use the measurement to find your corresponding size in the chart. If your pet's measurements fall between two sizes, it's usually best to go with the larger size.</p>",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "fixed",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0.13583984375000002,
                        "alpha": 1
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "",
                      "placementOptionText": "Size",
                      "placementProductForm": "end",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true
                    }
                }
            },
            {
                "name": "Blank",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/blank.png?v=1678713795",
                "state_store": {
                    "settings": {
                      "popupSize": "large",
                      "padding": "medium",
                      "backgroundColor": {
                        "hue": 300,
                        "saturation": 0,
                        "brightness": 1,
                        "alpha": 1
                      },
                      "borderRadius": "medium",
                      "boxShadow": "medium",
                      "position": "central",
                      "fontColor": {
                        "hue": 157,
                        "saturation": 0.1875,
                        "brightness": 0.2802734375,
                        "alpha": 1
                      },
                      "overlayColor": {
                        "hue": 224,
                        "saturation": 0,
                        "brightness": 0.10019531250000002,
                        "alpha": 0.8808302238805971
                      },
                      "closeColor": {
                        "hue": 157,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "closeStyle": "style1",
                      "showPoweredBy": true,
                      "countryCode": ""
                    },
                    "content": {
                      "image": "",
                      "imagePosition": "top",
                      "imageStretch": true,
                      "topText": "<p>blank</p>",
                      "table": "<p>blank</p>",
                      "bottomText": "",
                      "alignItems": "center"
                    },
                    "conditions": {
                      "products": [
                        {
                          "title": "Test Product 1",
                          "url": "test-product-1",
                          "mid": "gid://shopify/Product/9830183246"
                        }
                      ],
                      "collections": []
                    },
                    "trigger": {
                      "text": "Size Chart",
                      "linkType": "inline",
                      "fontColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 1
                      },
                      "backgroundColor": {
                        "hue": 0,
                        "saturation": 0,
                        "brightness": 0,
                        "alpha": 0
                      },
                      "icon": {
                        "id": "icon4",
                        "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                      },
                      "iconOnlyOnMob": true,
                      "rotated": true,
                      "position": "middle-right",
                      "showMobile": true,
                      "showDesktop": true,
                      "placementSelected": "option",
                      "placementOptionText": "Size",
                      "placementProductForm": "after",
                      "placementProductDescription": "end",
                      "placementCssSelector": "",
                      "placementAlignment": "left",
                      "useStoreColor": true,
                      "CssSelector": ""
                    }
                }
            },
            {
                "name": "Style 1",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/preset1.jpg?v=1579261721",
                "state_store": {
                    "settings": {
                        "popupSize": "large",
                        "padding": "medium",
                        "backgroundColor": {"hue": 300, "saturation": 0, "brightness": 1, "alpha": 1},
                        "borderRadius": "medium",
                        "boxShadow": "medium",
                        "position": "central",
                        "fontColor": {"hue": 157, "saturation": 0.1875, "brightness": 0.2802734375, "alpha": 1},
                        "overlayColor": {
                            "hue": 224,
                            "saturation": 0,
                            "brightness": 0.10019531250000002,
                            "alpha": 0.8808302238805971
                        },
                        "closeColor": {"hue": 157, "saturation": 0, "brightness": 0, "alpha": 1},
                        "closeStyle": "style1",
                        "showPoweredBy": true,
                        "countryCode": ""
                    }, "content": {
                        "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/jeans1.jpg?v=1579184285",
                        "imagePosition": "top",
                        "imageStretch": true,
                        "topText": "",
                        "table": "<table class=\"ccpops-table ccpops-table--even-stripes\" style=\"width: 100%; border-color: #ced4d9; border-collapse: collapse;\" border=\"1\">\n<tbody>\n<tr style=\"height: 16px;\">\n<td style=\"width: 50%; height: 16px; border-color: #ced4d9;\" colspan=\"2\"><span style=\"color: #595959;\"><strong>UK</strong></span></td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\"><span style=\"color: #595959;\"><strong>US</strong></span></td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\"><span style=\"color: #595959;\"><strong>EUROPE</strong></span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">32</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">XS/S</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">XS/S</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">83</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">34</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">S</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">S</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">87</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">36</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">M</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">M</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">91</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">38</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">M</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">M</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">96</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">40</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">M</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">M</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">101</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">42</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">L</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">L</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">102</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">44</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">XXL</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">XXL</td>\n<td style=\"width: 25%; height: 16px; border-color: #ced4d9;\">108</td>\n</tr>\n</tbody>\n</table>",
                        "bottomText": "",
                        "alignItems": "center"
                    }, "conditions": {
                        "products": [], "collections": []
                    }, "trigger": {
                        "text": "Size Chart",
                        "linkType": "fixed",
                        "fontColor": {"hue": 0, "saturation": 0, "brightness": 1, "alpha": 1},
                        "backgroundColor": {"hue": 0, "saturation": 0, "brightness": 0.13583984375000002, "alpha": 1},
                        "icon": {
                            "id": "icon4",
                            "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                        },
                        "iconOnlyOnMob": true,
                        "rotated": true,
                        "position": "middle-right",
                        "showMobile": true,
                        "showDesktop": true,
                        "placementSelected": "",
                        "placementOptionText": "Size",
                        "placementProductForm": "end",
                        "placementProductDescription": "end",
                        "placementCssSelector": "",
                        "placementAlignment": "left",
                        "useStoreColor": true
                    }, "analytics": {
                        "analyticsEnabled": false
                    }
                }
            },
            {
                "name": "Style 2",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/preset2.jpg?v=1579617391",
                "state_store": {
                    "settings": {
                        "popupSize": "large",
                        "padding": "medium",
                        "backgroundColor": {"hue": 300, "saturation": 0, "brightness": 1, "alpha": 1},
                        "borderRadius": "none",
                        "boxShadow": "medium",
                        "position": "central",
                        "fontColor": {"hue": 157, "saturation": 0, "brightness": 0.27509765625000004, "alpha": 1},
                        "overlayColor": {
                            "hue": 292.2901119402985,
                            "saturation": 0,
                            "brightness": 0.48876953125,
                            "alpha": 0.8808302238805971
                        },
                        "closeColor": {"hue": 157, "saturation": 0, "brightness": 0, "alpha": 1},
                        "closeStyle": "style1",
                        "showPoweredBy": true,
                        "countryCode": ""
                    }, "content": {
                        "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/shoes.jpg?v=1579616881",
                        "imagePosition": "left",
                        "imageStretch": true,
                        "topText": "<h4><span style=\"font-size: 18px;\">Women's Footwear Sizes</span></h4>\n<p><span style=\"font-size: 14px;\">We stock shoe sizes from size 3 to 9. For smaller sizes please ring us in store.</span></p>",
                        "table": "<table class=\"ccpops-table ccpops-table--bottom-border-only\" style=\"border-collapse: collapse; width: 100%; height: 128px; border-width: 1px; border-color: #ced4d9;\" border=\"1\">\n<tbody>\n<tr style=\"height: 16px; background-color: #ee8275;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"color: #ffffff;\"><strong>UK Size</strong></span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"color: #ffffff;\"><strong>UK Size</strong></span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"color: #ffffff;\"><strong>US Size</strong></span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"color: #ffffff;\"><strong>US Size</strong></span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">3</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">S</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">36</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">5</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">4</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">S</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">37</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">6</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">5</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">M</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">38</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">7</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">6</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">M</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">39</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">8</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">7</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">L</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">40</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">9</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">8</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">L</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">41</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">10</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">9</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">N/A</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">42</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #ced4d9; padding: 0px;\"><span style=\"font-size: 14px;\">11</span></td>\n</tr>\n</tbody>\n</table>",
                        "bottomText": "",
                        "alignItems": "center"
                    }, "conditions": {
                        "products": [], "collections": []
                    }, "trigger": {
                        "text": "",
                        "linkType": "fixed",
                        "fontColor": {"hue": 0, "saturation": 0, "brightness": 1, "alpha": 1},
                        "backgroundColor": {"hue": 343, "brightness": 0.85, "saturation": 0.7, "alpha": 1},
                        "icon": {
                            "id": "icon1",
                            "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Tape\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <g id=\"Group-25\" transform=\"translate(4.100000, 30.000000)\" stroke=\"currentColor\" stroke-width=\"10\">\n            <path d=\"M85.9998,58.9999 C104.2258,58.9999 118.9998,52.7319 118.9998,44.9999 C118.9998,37.2679 104.2258,30.9999 85.9998,30.9999 C67.7748,30.9999 52.9998,37.2679 52.9998,44.9999 C52.9998,52.7319 67.7748,58.9999 85.9998,58.9999 Z\"></path>\n            <path d=\"M86.3783,89.9999 C136.0843,89.9999 172.0183,69.8529 172.0183,44.9999 C172.0183,20.1469 136.0843,-0.0001 86.3783,-0.0001 C36.6723,-0.0001 1.0183,20.1469 1.0183,44.9999 C1.0183,69.8529 36.6723,89.9999 86.3783,89.9999 Z\"></path>\n            <path d=\"M1.0194,44.9638 L0.9994,116.8318 L0.9994,135.0008 C0.9994,157.0908 39.2794,175.0008 86.4994,175.0008 L231,174.8318 L231,89.9998 L86.3784,89.9998\"></path>\n            <path d=\"M155.4998,170.1664 L155.4998,156.0004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n            <path d=\"M108.4998,170.1664 L108.4998,156.0004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n            <path d=\"M61.4998,170.1664 L61.4998,156.0004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n            <path d=\"M131.4998,170.3891 L131.4998,144.0001\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n            <path d=\"M178.4998,170.3891 L178.4998,144.0001\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n            <path d=\"M84.4998,170.3891 L84.4998,144.0001\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n            <path d=\"M37.4998,165.3891 L37.4998,139.0001\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n            <path d=\"M202.4998,170.1664 L202.4998,156.0004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n            <path d=\"M172.0184,44.9999 L172.0184,89.9999\"></path>\n        </g>\n    </g>\n</svg>"
                        },
                        "iconOnlyOnMob": true,
                        "rotated": false,
                        "position": "top-right",
                        "showMobile": true,
                        "showDesktop": true,
                        "placementSelected": "",
                        "placementOptionText": "",
                        "placementProductForm": "end",
                        "placementProductDescription": "end",
                        "placementCssSelector": "",
                        "placementAlignment": "left",
                        "useStoreColor": true
                    }, "analytics": {
                        "analyticsEnabled": false
                    }
                }
            },
            {
                "name": "Style 3",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/preset3.jpg?v=1579272545",
                "state_store": {
                    "settings": {
                        "popupSize": "medium",
                        "padding": "medium",
                        "backgroundColor": {
                            "hue": 331.7070895522388,
                            "saturation": 0.04375,
                            "brightness": 0.8533203125,
                            "alpha": 1
                        },
                        "borderRadius": "medium",
                        "boxShadow": "medium",
                        "position": "full",
                        "fontColor": {"hue": 157, "saturation": 0, "brightness": 1, "alpha": 1},
                        "overlayColor": {
                            "hue": 224,
                            "saturation": 0,
                            "brightness": 0.10019531250000002,
                            "alpha": 0.8808302238805971
                        },
                        "closeColor": {"hue": 157, "saturation": 0, "brightness": 0, "alpha": 1},
                        "closeStyle": "style1",
                        "showPoweredBy": true,
                        "countryCode": ""
                    },
                    "content": {
                        "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/bra-background.jpg?v=1579264655",
                        "imagePosition": "background",
                        "imageStretch": true,
                        "topText": "<h2 style=\"text-align: center;\"><span style=\"font-size: 30px;\"><strong>BRA CUP SIZES</strong></span></h2>\n<p style=\"text-align: center;\"><span style=\"font-size: 20px;\"><span style=\"font-size: 18px;\">To measure your cup size, measure around the largest part of your bust. </span><br /><span style=\"font-size: 18px;\">It's best to measure without a bra on, but or at least with a very lightly padded one.</span></span></p>",
                        "table": "<table class=\"ccpops-table ccpops-table--top-border-only\" style=\"border-collapse: collapse; table-layout: fixed; border: 1px hidden #969696; height: 192px;\" border=\"1\">\n<tbody>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\"><strong>UK</strong></td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\"><strong>EUROPE</strong></td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\"><strong>US</strong></td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\"><strong>AUS</strong></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">28</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">60</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">28</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">6</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">30</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">65</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">30</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">8</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">32</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">70</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">32</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">10</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">32</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">70</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">32</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">10</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">34</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">75</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">34</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">12</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">36</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">80</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">36</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">14</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">38</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">85</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">38</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">16</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">40</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">90</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">40</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">18</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">42</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">95</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">42</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">20</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">44</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">100</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">44</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">22</td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">46</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">105</td>\n<td style=\"width: 121.406px; height: 16px; border-color: #969696;\">46</td>\n<td style=\"width: 122.406px; height: 16px; border-color: #969696;\">24</td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>",
                        "bottomText": "",
                        "alignItems": "center"
                    },
                    "conditions": {"products": [], "collections": []},
                    "trigger": {
                        "text": "Bra Size Guide",
                        "linkType": "fixed",
                        "fontColor": {"hue": 0, "saturation": 0, "brightness": 0.26591796874999996, "alpha": 1},
                        "backgroundColor": {"hue": 0, "saturation": 0, "brightness": 1, "alpha": 1},
                        "icon": {"id": "none", "image": null},
                        "iconOnlyOnMob": true,
                        "rotated": true,
                        "position": "middle-right",
                        "showMobile": true,
                        "showDesktop": true,
                        "placementSelected": "",
                        "placementOptionText": "",
                        "placementProductForm": "end",
                        "placementProductDescription": "end",
                        "placementCssSelector": "",
                        "placementAlignment": "left",
                        "useStoreColor": true
                    },
                    "analytics": {
                        "analyticsEnabled": false
                    }
                }
            },
            {
                "name": "Style 4",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/preset4.jpg?v=1579261421",
                "state_store": {
                    "settings": {
                        "popupSize": "medium",
                        "padding": "medium",
                        "backgroundColor": {"hue": 300, "saturation": 0, "brightness": 1, "alpha": 1},
                        "borderRadius": "none",
                        "boxShadow": "medium",
                        "position": "right",
                        "fontColor": {"hue": 157, "saturation": 0.1875, "brightness": 0.2802734375, "alpha": 1},
                        "overlayColor": {
                            "hue": 224,
                            "saturation": 0,
                            "brightness": 0.10019531250000002,
                            "alpha": 0.8808302238805971
                        },
                        "closeColor": {"hue": 157, "saturation": 0, "brightness": 0, "alpha": 1},
                        "closeStyle": "style1",
                        "showPoweredBy": true,
                        "countryCode": ""
                    }, "content": {
                        "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/walking-in-love1.jpg?v=1579260932",
                        "imagePosition": "top",
                        "imageStretch": true,
                        "topText": "<p style=\"text-align: center;\"><span style=\"font-size: 14px;\">Some clothing may vary from these measurements but you can still use them as a guide.</span></p>",
                        "table": "<table class=\"ccpops-table\" style=\"border-collapse: collapse; width: 100%; height: 144px; border-width: 1px; border-color: #7E8C8D;\" border=\"1\">\n<tbody>\n<tr style=\"height: 16px; background-color: #34495e;\">\n<th style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><strong><span style=\"color: #ffffff;\">Size</span></strong></th>\n<th style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><strong><span style=\"color: #ffffff;\">Bust</span></strong></th>\n<th style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><strong><span style=\"color: #ffffff;\">Waist</span></strong></th>\n<th style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><strong><span style=\"color: #ffffff;\">Lower Hip</span></strong></th>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">4</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">79</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">60</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">84</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">6</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">81.5</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">62.5</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">86.5</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">8</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">84</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">65</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">89</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">10</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">89</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">70</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">94</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">12</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">94</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">75</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">99</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">14</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">99</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">80</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">104</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">16</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">104</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">85</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">109</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">18</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">111</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">92</span></td>\n<td style=\"width: 25%; height: 16px; border-width: 1px; border-color: #7e8c8d;\"><span style=\"font-size: 14px;\">116</span></td>\n</tr>\n</tbody>\n</table>",
                        "bottomText": "<p style=\"text-align: center;\"><span style=\"font-size: 14px;\">The length of our garments vary according to style of clothing. </span></p>\n<p style=\"text-align: center;\"><span style=\"font-size: 14px;\">Please check individual product pages for items specific length measurements.</span></p>\n<p style=\"text-align: center;\">&nbsp;</p>",
                        "alignItems": "center"
                    }, "conditions": {
                        "products": [], "collections": []
                    }, "trigger": {
                        "text": "What's My Size?",
                        "linkType": "fixed",
                        "fontColor": {"hue": 0, "saturation": 0, "brightness": 1, "alpha": 1},
                        "backgroundColor": {"hue": 0, "saturation": 0, "brightness": 0.31230468749999996, "alpha": 1},
                        "icon": {
                            "id": "icon2",
                            "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <path d=\"M127.720866,80.0908638 L214.279134,163.459136\" stroke=\"currentColor\" stroke-width=\"10\" stroke-linecap=\"square\" transform=\"translate(171.000000, 121.775000) rotate(-12.000000) translate(-171.000000, -121.775000) \"></path>\n        <path d=\"M25.7208663,80.0908638 L112.279134,163.459136\" stroke=\"currentColor\" stroke-width=\"10\" stroke-linecap=\"square\" transform=\"translate(69.000000, 121.775000) scale(-1, 1) rotate(-12.000000) translate(-69.000000, -121.775000) \"></path>\n        <path d=\"M30,192.748813 L210,192.748813\" stroke=\"currentColor\" stroke-width=\"10\" stroke-linecap=\"square\"></path>\n        <path d=\"M215,192.748813 C226.045695,192.748813 235,183.794508 235,172.748813 C235,165.738789 231.393509,159.571106 225.934764,156\" stroke=\"currentColor\" stroke-width=\"10\"></path>\n        <path d=\"M5,192.748813 C16.045695,192.748813 25,183.794508 25,172.748813 C25,165.738789 21.3935094,159.571106 15.9347642,156\" stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(15.000000, 174.374407) scale(-1, 1) translate(-15.000000, -174.374407) \"></path>\n        <path d=\"M120.5,87.5 L120.5,71.9384766\" stroke=\"currentColor\" stroke-width=\"10\" stroke-linecap=\"square\"></path>\n        <path d=\"M119.5,72 C130.821837,72 140,62.8218374 140,51.5 C140,40.1781626 130.821837,31 119.5,31 C108.178163,31 99,40.1781626 99,51.5\" stroke=\"currentColor\" stroke-width=\"10\"></path>\n    </g>\n</svg>"
                        },
                        "iconOnlyOnMob": true,
                        "rotated": true,
                        "position": "middle-right",
                        "showMobile": true,
                        "showDesktop": true,
                        "placementSelected": "",
                        "placementOptionText": "",
                        "placementProductForm": "end",
                        "placementProductDescription": "end",
                        "placementCssSelector": "",
                        "placementAlignment": "left",
                        "useStoreColor": true
                    }, "analytics": {
                        "analyticsEnabled": false
                    }
                }
            },
            {
                "name": "Style 5",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/preset5.jpg?v=1579277544",
                "state_store": {
                    "settings": {
                        "popupSize": "large",
                        "padding": "medium",
                        "backgroundColor": {
                            "hue": 204.64085820895522,
                            "saturation": 0.58125,
                            "brightness": 0.44267578124999996,
                            "alpha": 1
                        },
                        "borderRadius": "none",
                        "boxShadow": "none",
                        "position": "central",
                        "fontColor": {"hue": 157, "saturation": 0, "brightness": 1, "alpha": 1},
                        "overlayColor": {
                            "hue": 292.2901119402985,
                            "brightness": 1,
                            "saturation": 0,
                            "alpha": 0.8821128731343284
                        },
                        "closeColor": {"hue": 157, "saturation": 0, "brightness": 0, "alpha": 1},
                        "closeStyle": "style1",
                        "showPoweredBy": true,
                        "countryCode": ""
                    }, "content": {
                        "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/shoes2.jpg?v=1579274465",
                        "imagePosition": "bottom",
                        "imageStretch": true,
                        "topText": "<h2 style=\"text-align: center;\"><span style=\"font-size: 25px;\"><strong>Footwear Sizes</strong></span></h2>\n<p style=\"text-align: center;\"><span style=\"font-size: 14px;\">Please note this is for reference only. </span><span style=\"font-size: 14px;\">Please refer to the product description for a more accurate size guidance.</span></p>",
                        "table": "<table class=\"ccpops-table ccpops-table--bottom-border-only\" border=\"1\">\n<tbody>\n<tr style=\"height: 16px;\">\n<th style=\"width: 25%; height: 16px;\"><strong>UK</strong></th>\n<td style=\"width: 13.6051%; height: 16px;\">3</td>\n<td style=\"width: 11.837%; height: 16px;\">4</td>\n<td style=\"width: 12.3034%; height: 16px;\">5</td>\n<td style=\"width: 12.7334%; height: 16px;\">6</td>\n<td style=\"width: 12.7517%; height: 16px;\">7</td>\n</tr>\n<tr style=\"height: 16px;\">\n<th style=\"width: 25%; height: 16px;\"><strong>EUROPE</strong></th>\n<td style=\"width: 13.6051%; height: 16px;\">36</td>\n<td style=\"width: 11.837%; height: 16px;\">37</td>\n<td style=\"width: 12.3034%; height: 16px;\">38</td>\n<td style=\"width: 12.7334%; height: 16px;\">39</td>\n<td style=\"width: 12.7517%; height: 16px;\">40</td>\n</tr>\n<tr style=\"height: 16px;\">\n<th style=\"width: 25%; height: 16px;\"><strong>US</strong></th>\n<td style=\"width: 13.6051%; height: 16px;\">5</td>\n<td style=\"width: 11.837%; height: 16px;\">6</td>\n<td style=\"width: 12.3034%; height: 16px;\">7</td>\n<td style=\"width: 12.7334%; height: 16px;\">8</td>\n<td style=\"width: 12.7517%; height: 16px;\">9</td>\n</tr>\n<tr style=\"height: 16px;\">\n<th style=\"width: 25%; height: 16px;\"><strong>AUSTRALIA</strong></th>\n<td style=\"width: 13.6051%; height: 16px;\">5</td>\n<td style=\"width: 11.837%; height: 16px;\">6</td>\n<td style=\"width: 12.3034%; height: 16px;\">7</td>\n<td style=\"width: 12.7334%; height: 16px;\">8</td>\n<td style=\"width: 12.7517%; height: 16px;\">9</td>\n</tr>\n</tbody>\n</table>",
                        "bottomText": "",
                        "alignItems": "center"
                    }, "conditions": {
                        "products": [], "collections": []
                    }, "trigger": {
                        "text": "",
                        "linkType": "fixed",
                        "fontColor": {"hue": 0, "saturation": 0, "brightness": 1, "alpha": 1},
                        "backgroundColor": {
                            "hue": 204.64085820895522,
                            "saturation": 0.58125,
                            "brightness": 0.44267578124999996,
                            "alpha": 1
                        },
                        "icon": {
                            "id": "icon4",
                            "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <rect stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(120.000000, 120.000000) scale(1, -1) rotate(-90.000000) translate(-120.000000, -120.000000) \" x=\"85\" y=\"5\" width=\"70\" height=\"230\"></rect>\n        <g transform=\"translate(35.000000, 85.000000)\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"10\">\n            <path d=\"M121,9.5 L103,9.5\" transform=\"translate(112.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-112.000000, -9.500000) \"></path>\n            <path d=\"M66,9.5 L48,9.5\" transform=\"translate(57.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-57.000000, -9.500000) \"></path>\n            <path d=\"M10,10.5 L-9,10.5\" transform=\"translate(0.500000, 10.500000) scale(1, -1) rotate(-270.000000) translate(-0.500000, -10.500000) \"></path>\n            <path d=\"M100,17.5 L67,17.5\" transform=\"translate(83.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-83.500000, -17.500000) \"></path>\n            <path d=\"M157,17.5 L124,17.5\" transform=\"translate(140.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-140.500000, -17.500000) \"></path>\n            <path d=\"M44,17.5 L11,17.5\" transform=\"translate(27.500000, 17.500000) scale(1, -1) rotate(-270.000000) translate(-27.500000, -17.500000) \"></path>\n            <path d=\"M179,9.5 L161,9.5\" transform=\"translate(170.000000, 9.500000) scale(1, -1) rotate(-270.000000) translate(-170.000000, -9.500000) \"></path>\n        </g>\n    </g>\n</svg>"
                        },
                        "iconOnlyOnMob": true,
                        "rotated": false,
                        "position": "middle-right",
                        "showMobile": true,
                        "showDesktop": true,
                        "placementSelected": "",
                        "placementOptionText": "",
                        "placementProductForm": "end",
                        "placementProductDescription": "end",
                        "placementCssSelector": "",
                        "placementAlignment": "left",
                        "useStoreColor": true
                    }, "analytics": {
                        "analyticsEnabled": false
                    }
                }
            },
            {
                "name": "Style 6",
                "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/preset6.jpg?v=1579691644",
                "state_store": {
                    "settings": {
                        "popupSize": "medium",
                        "padding": "medium",
                        "backgroundColor": {"hue": 300, "saturation": 0, "brightness": 1, "alpha": 1},
                        "borderRadius": "medium",
                        "boxShadow": "medium",
                        "position": "full",
                        "fontColor": {"hue": 157, "saturation": 0, "brightness": 0.24150390624999996, "alpha": 1},
                        "overlayColor": {
                            "hue": 224,
                            "saturation": 0,
                            "brightness": 0.10019531250000002,
                            "alpha": 0.8808302238805971
                        },
                        "closeColor": {"hue": 157, "saturation": 0, "brightness": 0, "alpha": 1},
                        "closeStyle": "style1",
                        "showPoweredBy": true,
                        "countryCode": ""
                    },
                    "content": {
                        "image": "https://cdn.shopify.com/s/files/1/0307/6453/1847/files/size-chart1.svg?117",
                        "imagePosition": "left",
                        "imageStretch": false,
                        "topText": "",
                        "table": "<p><strong>Clothing Sizes</strong></p>\n<table class=\"ccpops-table\" style=\"border-collapse: collapse; width: 100%; height: 176px; border-width: 1px; border-color: #95a5a6;\" border=\"1\">\n<tbody>\n<tr style=\"height: 16px; background-color: #000000; border-color: #ecf0f1;\">\n<td style=\"width: 14.2857%; height: 32px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" rowspan=\"2\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">US Size</span></strong></span></td>\n<td style=\"width: 28.5714%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" colspan=\"2\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">Bust</span></strong></span></td>\n<td style=\"width: 28.5714%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" colspan=\"2\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">Waist</span></strong></span></td>\n<td style=\"width: 28.5714%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" colspan=\"2\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">Hips</span></strong></span></td>\n</tr>\n<tr style=\"height: 16px; background-color: #000000; border-color: #ecf0f1;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">Inches</span></strong></span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">CM</span></strong></span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">Inches</span></strong></span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">CM</span></strong></span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">Inches</span></strong></span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">CM</span></strong></span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">2</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">31</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">78.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">23.75</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">60.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">34</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">86.5</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">4</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">32</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">81</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">24.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">63</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">35</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">89</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">6</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">34</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">86</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">26.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">68</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">37</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">94</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">8</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">36</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">91</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">28.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">73</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">39</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">99</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">10</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">38</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">96</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">30.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">78</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">41</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">104</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">12</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">40</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">101</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">32.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">83</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">43</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">109</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">14</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">42</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">106</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">34.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">88</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">43</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">114</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">16</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">44</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">111</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">36.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">93</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">47</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">119</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">18</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">46</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">116</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">38.5</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">98</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">49</span></td>\n<td style=\"width: 14.2857%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">124</span></td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>\n<p><strong>International Sizes</strong></p>\n<table class=\"ccpops-table\" style=\"border-collapse: collapse; width: 100%; height: 160px; border-width: 1px; border-color: #95a5a6;\" border=\"1\">\n<tbody>\n<tr style=\"height: 16px; background-color: #000000;\">\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">Size</span></strong></span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">UK</span></strong></span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">Europe</span></strong></span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">USA/CAN</span></strong></span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\"><strong><span style=\"color: #ffffff;\">AUS/NZL</span></strong></span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\"><span style=\"font-size: 14px;\">XS</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:4}\"><span style=\"font-size: 14px;\">4</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:32}\"><span style=\"font-size: 14px;\">32</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:0}\"><span style=\"font-size: 14px;\">0</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:4}\"><span style=\"font-size: 14px;\">4</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 20%; height: 32px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" rowspan=\"2\"><span style=\"font-size: 14px;\">S</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:6}\"><span style=\"font-size: 14px;\">6</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:34}\"><span style=\"font-size: 14px;\">34</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:2}\"><span style=\"font-size: 14px;\">2</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:6}\"><span style=\"font-size: 14px;\">6</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:8}\"><span style=\"font-size: 14px;\">8</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:36}\"><span style=\"font-size: 14px;\">36</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:4}\"><span style=\"font-size: 14px;\">4</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:8}\"><span style=\"font-size: 14px;\">8</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 20%; height: 32px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" rowspan=\"2\"><span style=\"font-size: 14px;\">M</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:10}\"><span style=\"font-size: 14px;\">10</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:38}\"><span style=\"font-size: 14px;\">38</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:6}\"><span style=\"font-size: 14px;\">6</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:10}\"><span style=\"font-size: 14px;\">10</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:12}\"><span style=\"font-size: 14px;\">12</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:40}\"><span style=\"font-size: 14px;\">40</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:8}\"><span style=\"font-size: 14px;\">8</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:12}\"><span style=\"font-size: 14px;\">12</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 20%; height: 32px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" rowspan=\"2\"><span style=\"font-size: 14px;\">L</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:14}\"><span style=\"font-size: 14px;\">14</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:42}\"><span style=\"font-size: 14px;\">42</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:10}\"><span style=\"font-size: 14px;\">10</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:14}\"><span style=\"font-size: 14px;\">14</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:16}\"><span style=\"font-size: 14px;\">16</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:44}\"><span style=\"font-size: 14px;\">44</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:12}\"><span style=\"font-size: 14px;\">12</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:16}\"><span style=\"font-size: 14px;\">16</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 20%; height: 32px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" rowspan=\"2\"><span style=\"font-size: 14px;\">XL</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:18}\"><span style=\"font-size: 14px;\">18</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:46}\"><span style=\"font-size: 14px;\">46</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:14}\"><span style=\"font-size: 14px;\">14</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:18}\"><span style=\"font-size: 14px;\">18</span></td>\n</tr>\n<tr style=\"height: 16px;\">\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:20}\"><span style=\"font-size: 14px;\">20</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:48}\"><span style=\"font-size: 14px;\">48</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:16}\"><span style=\"font-size: 14px;\">16</span></td>\n<td style=\"width: 20%; height: 16px; border-width: 1px; border-color: #95a5a6; padding: 0px;\" data-sheets-value=\"{&quot;1&quot;:3,&quot;3&quot;:20}\"><span style=\"font-size: 14px;\">20</span></td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>",
                        "bottomText": "",
                        "alignItems": "center"
                    },
                    "conditions": {
                        "products": [], "collections": []
                    },
                    "trigger": {
                        "text": "Size Guide",
                        "linkType": "fixed",
                        "fontColor": {"hue": 0, "saturation": 0, "brightness": 1, "alpha": 1},
                        "backgroundColor": {"hue": 0, "saturation": 0, "brightness": 0.13583984375000002, "alpha": 1},
                        "icon": {
                            "id": "icon2",
                            "image": "<svg width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect x=\"0\" y=\"0\" width=\"240\" height=\"240\"></rect>\n        <path d=\"M127.720866,80.0908638 L214.279134,163.459136\" stroke=\"currentColor\" stroke-width=\"10\" stroke-linecap=\"square\" transform=\"translate(171.000000, 121.775000) rotate(-12.000000) translate(-171.000000, -121.775000) \"></path>\n        <path d=\"M25.7208663,80.0908638 L112.279134,163.459136\" stroke=\"currentColor\" stroke-width=\"10\" stroke-linecap=\"square\" transform=\"translate(69.000000, 121.775000) scale(-1, 1) rotate(-12.000000) translate(-69.000000, -121.775000) \"></path>\n        <path d=\"M30,192.748813 L210,192.748813\" stroke=\"currentColor\" stroke-width=\"10\" stroke-linecap=\"square\"></path>\n        <path d=\"M215,192.748813 C226.045695,192.748813 235,183.794508 235,172.748813 C235,165.738789 231.393509,159.571106 225.934764,156\" stroke=\"currentColor\" stroke-width=\"10\"></path>\n        <path d=\"M5,192.748813 C16.045695,192.748813 25,183.794508 25,172.748813 C25,165.738789 21.3935094,159.571106 15.9347642,156\" stroke=\"currentColor\" stroke-width=\"10\" transform=\"translate(15.000000, 174.374407) scale(-1, 1) translate(-15.000000, -174.374407) \"></path>\n        <path d=\"M120.5,87.5 L120.5,71.9384766\" stroke=\"currentColor\" stroke-width=\"10\" stroke-linecap=\"square\"></path>\n        <path d=\"M119.5,72 C130.821837,72 140,62.8218374 140,51.5 C140,40.1781626 130.821837,31 119.5,31 C108.178163,31 99,40.1781626 99,51.5\" stroke=\"currentColor\" stroke-width=\"10\"></path>\n    </g>\n</svg>"
                        },
                        "iconOnlyOnMob": true,
                        "rotated": true,
                        "position": "bottom-right",
                        "showMobile": true,
                        "showDesktop": true,
                        "placementSelected": "",
                        "placementOptionText": "",
                        "placementProductForm": "end",
                        "placementProductDescription": "end",
                        "placementCssSelector": "",
                        "placementAlignment": "left",
                        "useStoreColor": true
                    }, "analytics": {
                        "analyticsEnabled": false
                    }
                }
            }
        ]
    }
}
