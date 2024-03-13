export default {
    appSettings: {
        ratingLink: 'https://apps.shopify.com/size-charts-by-clean-canvas/?ref=cleancanvas#modal-show=ReviewListingModal'
    },
    cookieKeys: {
        session: '_ccsc_session'
    },
    localStorageKeys: {
        feedback: 'feedback-dismissed',
        feedbackDismissDate: 'feedback-dismissed-date',
        feedbackReceived: 'feedback-received',
        feedbackMode: 'feedback-mode',
        builderSidebarExpanded: 'builder-sidebar-expanded',
        announcement: 'announcement-dismissed'
    },
    tinyMceConfig: {
        apiKey: 'b8u1r03omfk1tf42gfv3ajevspfwcxweliw1880pxn2ggt0y',
        textSettings: {
            height: 250,
            menubar: false,
            plugins: [
                'advlist autolink lists link image code fullscreen table paste code'
            ],

            toolbar:
                `undo redo | bold italic | alignleft aligncenter alignright | styleselect | fontsizeselect | fontselect | 
                 backcolor forecolor | bullist | outdent indent | link image  | fullscreen code`,

            toolbar_drawer: 'sliding',

            fontsize_formats: "12px 14px 16px 18px 20px 25px 30px 35px",

            style_formats: [
                {title: 'Paragraph', block: 'p'},
                {title: 'Heading 1', block: 'h1'},
                {title: 'Heading 2', block: 'h2'},
                {title: 'Heading 3', block: 'h3'},
                {title: 'Heading 4', block: 'h4'},
                {title: 'Heading 5', block: 'h5'},
                {title: 'Heading 6', block: 'h6'},
                {title: 'Button', inline: 'a', classes: 'ccpops-popup__content__button'}
            ]
        },

        //https://www.tiny.cloud/docs/plugins/table/
        tableSettings: {
            height: 500,
            menubar: false,
            table_style_by_css: true,
            content_css : "/css/tiny-tables.css",
            plugins: [
                'advlist autolink lists link image code fullscreen table paste code'
            ],
            toolbar:
                `table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol |
                
                 undo redo | bold italic | alignleft aligncenter alignright | fontsizeselect | fontselect | 
                 forecolor | link image  | fullscreen code`,

            toolbar_drawer: 'sliding',

            fontsize_formats: "12px 14px 16px 18px 20px 25px 30px 35px",

            table_toolbar: "",

            table_default_attributes: {
                class: 'ccpops-table',
                border: '1'
            },

            table_class_list: [
                {title: 'None', value: 'ccpops-table'},
                {title: 'Odd Stripes', value: 'ccpops-table ccpops-table--odd-stripes'},
                {title: 'Even Stripes', value: 'ccpops-table ccpops-table--even-stripes'},
                {title: 'Bottom Border Only', value: 'ccpops-table ccpops-table--bottom-border-only'},
                {title: 'Top Border Only', value: 'ccpops-table ccpops-table--top-border-only'},
                {title: 'Side Borders Only', value: 'ccpops-table ccpops-table--side-border-only'}
            ],

            style_formats: [
                {title: 'Paragraph', block: 'p'},
                {title: 'Heading 1', block: 'h1'},
                {title: 'Heading 2', block: 'h2'},
                {title: 'Heading 3', block: 'h3'},
                {title: 'Heading 4', block: 'h4'},
                {title: 'Heading 5', block: 'h5'},
                {title: 'Heading 6', block: 'h6'},
                {title: 'Button', inline: 'a', classes: 'ccpops-button'}
            ]
        }
    }
}
