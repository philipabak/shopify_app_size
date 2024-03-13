import React from 'react';
import PopupRenderer from "../../components/popup-renderer/PopupRenderer";
import Utils from "../../utils/Utils";

/**
 *
 * @param props: settings, content
 * @returns {*}
 * @constructor
 */
export default class SizeChartPopupRenderer extends PopupRenderer {

    render() {
        return (
            <div className={`
                    ccpops-veil

                    ${!this.props.state.trigger.showDesktop ? 'ccpops--hide-desktop' : ''}
                    ${!this.props.state.trigger.showMobile ? 'ccpops--hide-mobile' : ''}

                    ccpops-popup--has-popup-size-${this.props.state.settings.popupSize}
                    ccpops-popup--has-padding-${this.props.state.settings.padding}
                    ccpops-popup--has-border-radius-${this.props.state.settings.borderRadius}
                    ccpops-popup--has-box-shadow-${this.props.state.settings.boxShadow}
                    ccpops-popup--has-position-${this.props.state.settings.position}

                    ccpops-popup--has-align-items-${this.props.state.content.alignItems}
                    ccpops-popup--has-image-stretch-${this.props.state.content.imageStretch}

                    ${this.props.state.content.image ? `ccpops-popup--has-image-position-${this.props.state.content.imagePosition}` : ''}
                    ${this.props.state.content.topText ?`ccpops-popup--has-top-text` : `ccpops-popup--no-top-text`}
                    ${this.props.state.content.bottomText ? `ccpops-popup--has-bottom-text` :  `ccpops-popup--no-bottom-text`}
                    ${this.props.state.settings.overlayColor.brightness > 0.8 && this.props.state.settings.overlayColor.saturation < 0.5 ? `ccpops-popup--has-dark-powered-by-text` :  ``}
                `}

                 style={{
                     backgroundColor: Utils.hsbToRgb(this.props.state.settings.overlayColor)

                 }}

                 id="ccpops-popup"

                 onClick={(e) => { this.dumpProps(e); this.props.onCloseClick(); } }
            >
                {
                    (this.props.shop_settings && this.props.shop_settings.enableAnalytics)  &&
                    <script type="text/javascript">
                        gtag(&lsquo;event&lsquo;, &lsquo;csc_fixed_size_chart_clicked&lsquo;, &#123;&lsquo;app_name&lsquo;: &lsquo;CleanSizeCharts&lsquo;&#125;);
                    </script>
                }
            {
                this.props.shop_settings && this.props.shop_settings.customCss &&
                <style dangerouslySetInnerHTML={{ __html: this.props.shop_settings.customCss }}></style>
            }


                <div className="ccpops-popup-container"
                     role="dialog"
                     aria-label="Size chart modal"
                     aria-modal="true">

                    <a data-nohref="true"
                       onClick={this.props.onCloseClick}
                       aria-label="Close modal"
                       id="ccpops-popup-container__close"
                       className={`
                            ccpops-popup-container__close
                            ccpops-popup-container__close--${this.props.state.settings.closeStyle}
                        `}

                       style={{
                           color: Utils.hsbToRgb(this.props.state.settings.closeColor)
                       }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/>
                        </svg>
                    </a>

                    <div
                        className={`
                            ccpops-popup
                            ccpops-popup--popup-size-${this.props.state.settings.popupSize}
                            ccpops-popup--padding-${this.props.state.settings.padding}
                            ccpops-popup--border-radius-${this.props.state.settings.borderRadius}
                            ccpops-popup--box-shadow-${this.props.state.settings.boxShadow}
                            ccpops-popup--position-${this.props.state.settings.position}
                            ccpops-popup--image-position-${this.props.state.content.imagePosition}
                            ccpops-popup--image-stretch-${this.props.state.content.imageStretch}
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
                            <img className={`ccpops-popup__image`} alt="Popup"
                                 style={{width: `100%`, height:`100%`}}
                                 src={`${this.props.state.content.image}`}/>
                           </div>

                        }

                        {
                            this.props.state.content.image &&
                            ( this.props.state.content.imagePosition === 'top' || this.props.state.content.imagePosition === 'bottom')
                            &&
                            <img className={`ccpops-popup__image`} alt="Popup" src={`${this.props.state.content.image}`}/>
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
                                    <a href="https://apps.shopify.com/size-charts-by-clean-canvas/?ref=cleancanvas" target="_blank">POWERED BY CLEAN SIZE CHARTS</a>
                                </footer>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
