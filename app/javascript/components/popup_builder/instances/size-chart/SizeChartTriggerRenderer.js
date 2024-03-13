import React from 'react';
import TriggerRenderer from "../../components/trigger-renderer/TriggerRenderer";
import Utils from "../../utils/Utils";

/**
 *
 * @param props: settings, content
 * @returns {*}
 * @constructor
 */
export default class SizeChartTriggerRenderer extends TriggerRenderer {

    render() {
        var classNames = require('classnames');

        return (
            <div className={`
                ccpops-trigger-container
                
                ${!this.props.state.trigger.showDesktop ? 'ccpops--hide-desktop' : ''}
                ${!this.props.state.trigger.showMobile ? 'ccpops--hide-mobile' : ''}
                
                ccpops-trigger--has-link-type-${this.props.plan === 'free' ? 'fixed' : this.props.state.trigger.linkType}
                ccpops-trigger--has-position-${this.props.state.trigger.position}
                ccpops-trigger--has-rotated-${this.props.state.trigger.rotated}
                ccpops-trigger--has-text-hidden-mob-${this.props.state.trigger.icon.id !== 'none' ? this.props.state.trigger.iconOnlyOnMob : false}
                ccpops-trigger--has-bg-color-${this.props.state.trigger.backgroundColor.alpha > 0}
                ccpops-trigger--has-inherited-color-${this.props.state.trigger.useStoreColor && this.props.plan === 'paid' && this.props.state.trigger.linkType === 'inline'}
                ccpops-trigger--has-icon-only-${this.props.state.trigger.text.length === 0}
            `}

                 id="ccpops-trigger-container"
                 onClick={this.dumpProps}
            >
                {
                    (this.props.shop_settings && this.props.shop_settings.enableAnalytics)  &&
                    <script type="text/javascript">
                        gtag(&lsquo;event&lsquo;, &lsquo;csc_inline_size_chart_clicked&lsquo;, &#123;&lsquo;app_name&lsquo;: &lsquo;CleanSizeCharts&lsquo;&#125;);
                    </script>
                }


            {
                this.props.shop_settings && this.props.shop_settings.customCss &&
                <style dangerouslySetInnerHTML={{ __html: this.props.shop_settings.customCss }}></style>
            }

                <a data-nohref="true"
                   id="ccpops-trigger"
                   onClick={this.props.onClick}
                   className={classNames({
                    'ccpops-trigger': true,
                    'ccpops-trigger--only-icon': (this.props.state.trigger.text.length === 0 && (this.props.state.trigger.icon && this.props.state.trigger.icon.image))
                })}
                   style={{
                       backgroundColor: Utils.hsbToRgb(this.props.state.trigger.backgroundColor),
                       color: (this.props.state.trigger.useStoreColor && this.props.plan === 'paid' && this.props.state.trigger.linkType === 'inline') ? "inherit" : Utils.hsbToRgb(this.props.state.trigger.fontColor)
                   }}
                >
                    {
                        this.props.state.trigger.icon && this.props.state.trigger.icon.image &&
                            <span className="ccpops-trigger__icon" dangerouslySetInnerHTML={{ __html: this.props.state.trigger.icon.image }}></span>
                    }

                    <span className={classNames({
                              'ccpops-trigger__text': true
                          })}

                          // style={{
                          //     backgroundColor: Utils.hsbToRgb(this.props.state.trigger.backgroundColor)
                          // }}
                    >{ this.props.state.trigger.text }</span>
                </a>
            </div>
        )
    }
}
