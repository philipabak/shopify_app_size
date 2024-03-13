import React from "react";
import {Button, ButtonGroup, Card, Checkbox, Link, TextField} from "@shopify/polaris";
import CustomLabel from "../../components/custom-label/CustomLabel";
import {Editor} from '@tinymce/tinymce-react';
import constants from "../../utils/constants";
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import If from "../../components/if/If";
import {withTranslation} from 'react-i18next';

class SizeChartContentBuilder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props.content
        }
    }

    handleStateChange = (value, id) => {
        this.setState({
            [id]: value
        });

        this.props.handleContentUpdate({
            [id]: value
        });
    };

    handleWysiwygTextChange = (value, elem) => {
        this.setState({
            [elem.id]: value
        });

        this.props.handleContentUpdate({
            [elem.id]: value
        });
    };

    render() {
        const { t } = this.props;
        return (
            <Card>
                <Card.Section>
                    <CustomLabel spacing="tight">{ t("Top text") }</CustomLabel>
                    <Editor
                        id="topText"
                        apiKey={constants.tinyMceConfig.apiKey}
                        value={this.state.topText}
                        init={constants.tinyMceConfig.textSettings}
                        onEditorChange={this.handleWysiwygTextChange}
                    />

                    <CustomLabel>
                        { t("Size chart table") }

                        {
                            this.props.schema.tableHelpLink &&
                            <Link url={this.props.schema.tableHelpLink}>{ t("Help with tables") }</Link>
                        }
                    </CustomLabel>
                    <Editor
                        id="table"
                        apiKey={constants.tinyMceConfig.apiKey}
                        value={this.state.table}
                        init={constants.tinyMceConfig.tableSettings}
                        onEditorChange={this.handleWysiwygTextChange}
                    />

                    <CustomLabel>{ t("Bottom text") }</CustomLabel>
                    <Editor
                        id="bottomText"
                        apiKey={constants.tinyMceConfig.apiKey}
                        value={this.state.bottomText}
                        init={constants.tinyMceConfig.textSettings}
                        onEditorChange={this.handleWysiwygTextChange}
                    />

                    {/*<CustomLabel>Content alignment</CustomLabel>*/}
                    {/*<ButtonGroup segmented>*/}
                    {/*    <Button pressed={this.state.alignItems === 'center'}*/}
                    {/*            size="slim"*/}
                    {/*            accessibilityLabel="Align the content of the popup vertically centered"*/}
                    {/*            onClick={() => { this.handleStateChange('center', 'alignItems')}}>*/}
                    {/*        Middle*/}
                    {/*    </Button>*/}
                    {/*    <Button pressed={this.state.alignItems === 'top'}*/}
                    {/*            size="slim"*/}
                    {/*            accessibilityLabel="Align the content of the popup at the top"*/}
                    {/*            onClick={() => { this.handleStateChange('top', 'alignItems')}}>*/}
                    {/*        Top*/}
                    {/*    </Button>*/}
                    {/*</ButtonGroup>*/}

                </Card.Section>

                <Card.Section title={ t("Image") }>
                    <CustomLabel>
                        { t("Image URL") }

                        {
                            this.props.schema.imageHelpLink &&
                            <Link url={this.props.schema.imageHelpLink}>{ t("How to add an image") }</Link>
                        }
                    </CustomLabel>
                    <TextField
                        value={this.state.image}
                        id="image"
                        clearButton
                        onChange={this.handleStateChange}
                        onClearButtonClick={() => { this.handleStateChange('', 'image') }}
                    />

                    <SlideDown transitionOnAppear={false}>
                        <If statement={this.state.image && this.state.image.length > 0}>
                            <CustomLabel>{ t("Image position") }</CustomLabel>
                            <ButtonGroup segmented>
                                <Button pressed={this.state.imagePosition === 'background'}
                                        size="slim"
                                        accessibilityLabel={ t("Set the image position to appear as the background image of the popup") }
                                        onClick={() => {
                                            this.handleStateChange('background', 'imagePosition')
                                        }}>
                                    { t("Background") }
                                </Button>

                                <Button pressed={this.state.imagePosition === 'left'}
                                        size="slim"
                                        accessibilityLabel={ t("Set the image position to appear on the left within the popup") }
                                        onClick={() => {
                                            this.handleStateChange('left', 'imagePosition')
                                        }}>
                                    { t("Left") }
                                </Button>

                                <Button pressed={this.state.imagePosition === 'right'}
                                        size="slim"
                                        accessibilityLabel={ t("Set the image position to appear on the right within the popup") }
                                        onClick={() => {
                                            this.handleStateChange('right', 'imagePosition')
                                        }}>
                                    Right
                                </Button>

                                <Button pressed={this.state.imagePosition === 'top'}
                                        size="slim"
                                        accessibilityLabel={ t("Set the image position to appear on the top within the popup") }
                                        onClick={() => {
                                            this.handleStateChange('top', 'imagePosition')
                                        }}>
                                    { t("Top") }
                                </Button>

                                <Button pressed={this.state.imagePosition === 'bottom'}
                                        size="slim"
                                        accessibilityLabel={ t("Set the image position to appear on the bottom within the popup") }
                                        onClick={() => {
                                            this.handleStateChange('bottom', 'imagePosition')
                                        }}>
                                    { t("Bottom") }
                                </Button>
                            </ButtonGroup>

                            <CustomLabel>{ t("Stretch image to each edge") }</CustomLabel>
                            <Checkbox
                                label={ t("Stretch image") }
                                id="imageStretch"
                                checked={this.state.imageStretch}
                                onChange={this.handleStateChange}
                            />
                        </If>
                    </SlideDown>
                </Card.Section>
            </Card>
        )
    }
}

export default withTranslation()(SizeChartContentBuilder);
