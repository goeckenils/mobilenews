import React, { Component } from "react";
import Article from "../newsfeed/Article";
import axios from "axios";

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
            ({ title, author, publishedAt, urlToImage }) => {
                return (
                    <Article
                        image={urlToImage}
                        heading={title}
                        location={author}
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
