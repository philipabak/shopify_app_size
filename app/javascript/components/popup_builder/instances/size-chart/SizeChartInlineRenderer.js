import React from 'react';
import PopupRenderer from "../../components/popup-renderer/PopupRenderer";
import Utils from "../../utils/Utils";
import {withTranslation} from 'react-i18next';

/**
 *
 * @param props: settings, content
 * @returns {*}
 * @constructor
 */
class SizeChartInlineRenderer extends PopupRenderer {
    render() {
        const { t } = this.props;
        return (
            <div className={`
                    ccpops-blockZ

                    ${!this.props.state.trigger.showDesktop ? 'ccpops--hide-desktop' : ''}
                    ${!this.props.state.trigger.showMobile ? 'ccpops--hide-mobile' : ''}

                    ccpops-inline--has-popup-size-${this.props.state.settings.popupSize}
                    ccpops-inline--has-padding-${this.props.state.settings.padding}
                    ccpops-inline--has-border-radius-${this.props.state.settings.borderRadius}
                    ccpops-inline--has-box-shadow-${this.props.state.settings.boxShadow}
                    ccpops-inline--has-position-${this.props.state.settings.position}

                    ccpops-inline--has-align-items-${this.props.state.content.alignItems}
                    ccpops-inline--has-image-stretch-${this.props.state.content.imageStretch}

                    ${this.props.state.content.image ? `ccpops-inline--has-image-position-${this.props.state.content.imagePosition}` : ''}
                    ${this.props.state.content.topText ?`ccpops-inline--has-top-text` : `ccpops-inline--no-top-text`}
                    ${this.props.state.content.bottomText ? `ccpops-inline--has-bottom-text` :  `ccpops-inline--no-bottom-text`}
                    ${this.props.state.settings.overlayColor.brightness > 0.8 && this.props.state.settings.overlayColor.saturation < 0.5 ? `ccpops-inline--has-dark-powered-by-text` :  ``}
                `}

                 style={{
                     backgroundColor: Utils.hsbToRgb(this.props.state.settings.overlayColor)
                 }}

                 id="ccpops-inline"

                 onClick={(e) => { this.dumpProps(e); this.props.onCloseClick(); } }
            >
                {
                    (this.props.shop_settings && this.props.shop_settings.enableAnalytics)  &&
                    <script type="text/javascript">
                        gtag(&lsquo;event&lsquo;, &lsquo;csc_inline_size_chart_loaded&lsquo;, &#123;&lsquo;app_name&lsquo;: &lsquo;CleanSizeCharts&lsquo;&#125;);
                    </script>
                }
            {
                this.props.shop_settings && this.props.shop_settings.customCss &&
                <style dangerouslySetInnerHTML={{ __html: this.props.shop_settings.customCss }}></style>
            }

                <div className="ccpops-inline-container"
                     role="dialog"
                     aria-label={ t("Size chart modal") }
                     aria-modal="true">

                    <div
                        className={`
                            ccpops-inline
                            ccpops-inline--popup-size-${this.props.state.settings.popupSize}
                            ccpops-inline--padding-${this.props.state.settings.padding}
                            ccpops-inline--border-radius-${this.props.state.settings.borderRadius}
                            ccpops-inline--box-shadow-${this.props.state.settings.boxShadow}
                            ccpops-inline--position-${this.props.state.settings.position}
                            ccpops-inline--image-position-${this.props.state.content.imagePosition}
                            ccpops-inline--image-stretch-${this.props.state.content.imageStretch}
                        `}

                        onClick={(e) => { e.stopPropagation(); }}

                        style={{
                            backgroundColor: Utils.hsbToRgb(this.props.state.settings.backgroundColor),

                            color: Utils.hsbToRgb(this.props.state.settings.fontColor),

                            backgroundImage: (
                                this.props.state.content.image && this.props.state.content.imagePosition === 'background' ?
                                    `url('${this.props.state.content.image}')`
                                    : 'none'
                            )
                        }}
                    >

                        {
                            this.props.state.content.image &&
                            ( this.props.state.content.imagePosition === 'left' || this.props.state.content.imagePosition === 'right')
                            &&
                            <div className={`ccpops-popup__image`} style={{
                                backgroundImage: `url('${this.props.state.content.image}')`
                            }}
                            >
                                <img className={`ccpops-popup__image`} alt={ t("Popup") }
                                     style={{width: `100%`, height:`100%`}}
                                     src={`${this.props.state.content.image}`}/>
                            </div>
                        }

                        {
                            this.props.state.content.image &&
                            ( this.props.state.content.imagePosition === 'top' || this.props.state.content.imagePosition === 'bottom')
                            &&
                            <img className={`ccpops-popup__image`} alt={ t("Popup") } src={`${this.props.state.content.image}`}/>
                        }

                        <div className={`ccpops-popup__content`}>
                            {
                                this.props.state.content.topText &&
                                <div className={`ccpops-popup__content__top-text`}
                                     dangerouslySetInnerHTML={{ __html: this.props.state.content.topText }}>
                                </div>
                            }

                            {
                                this.props.state.content.table &&
                                <div className={`ccpops-popup__content__table`}
                                     dangerouslySetInnerHTML={{ __html: this.props.state.content.table }}>
                                </div>
                            }

                            {
                                this.props.state.content.bottomText &&
                                <div className={`ccpops-popup__content__bottom-text`}
                                     dangerouslySetInnerHTML={{ __html: this.props.state.content.bottomText }}>
                                </div>
                            }

                            {
                                (this.props.plan === 'free')  &&
                                <footer className={`ccpops-popup__content__powered-by`}>
                                    <a href="https://apps.shopify.com/size-charts-by-clean-canvas/?ref=cleancanvas" target="_blank">{ t("POWERED BY CLEAN SIZE CHARTS") }</a>
                                </footer>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withTranslation()(SizeChartInlineRenderer);
