import React from 'react';
import './RecommendedStuff.scss';
import {TextStyle, Stack, Card, Thumbnail, Page} from "@shopify/polaris";
import If from "../if/If";
import Api from "../../utils/Api";

export default class RecommendedStuff extends React.Component {

    constructor(props) {
        super(props);

        this.api = new Api(this.props.schema);

        this.state = {
            recommendations: []
        }
    }

    componentDidMount() {
        this.api.recommendations.get()
            .then(response => {
               this.setState({
                  recommendations: response.recommendations
               });
            });
    }

    render() {
        return (
            <section>
                <If statement={this.state.recommendations.length > 0}>
                    <div className={`cc-recommended-stuff cc-recommended-stuff--has-${this.state.recommendations.length}`}>
                        {
                            this.state.recommendations.map((recommendation, index) => {
                                return (
                                    <a
                                        href={recommendation.url}
                                        onClick={function(){ ga('send', 'event', 'Recommendation', 'click', recommendation.title) }}
                                        target="_blank"
                                        key={`recommendations${index}`}
                                        className={`cc-recommended-stuff__card cc-recommended-stuff__card--${recommendation.type}`}>
                                        <Card sectioned>
                                            {
                                                recommendation.image_url && recommendation.image_url.length > 0 &&
                                                <Thumbnail
                                                    source={recommendation.image_url}
                                                    alt={recommendation.title}
                                                />
                                            }

                                            {
                                                recommendation.title && recommendation.title.length > 0 &&
                                                <p>
                                                    <TextStyle variation="strong">
                                                        {recommendation.title}
                                                    </TextStyle>
                                                </p>
                                            }

                                            {
                                                recommendation.description && recommendation.description.length > 0 &&
                                                <p>
                                                    <TextStyle variation="subdued">
                                                        {recommendation.description}
                                                    </TextStyle>
                                                </p>
                                            }
                                        </Card>
                                    </a>
                                )
                            })
                        }
                    </div>
                </If>
            </section>
        )
    }
}