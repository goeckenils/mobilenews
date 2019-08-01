import React, { Component } from "react";
import Article from "../newsfeed/Article";
import axios from "axios";
import moment from "moment"

class Feed extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=de&apiKey=cc2687c9aa3e492b9f11a21ed918d1ee')
            .then(res => res.data)
            .then(data => this.setState({ data: data.articles }))
    }
    render() {

        const CreateArticle = this.state.data.map(
            ({ title, publishedAt, urlToImage }) => {
                return (
                    <Article
                        image={urlToImage}
                        heading={title}
                        date={moment(publishedAt).startOf('day').fromNow()}

                    // date={publishedAt}
                    // publisher={name}
                    ></Article>
                );
            }
        );
        return <div>{CreateArticle} {console.log(this.state.data[0])}</div>;
    }
}

export default Feed;
