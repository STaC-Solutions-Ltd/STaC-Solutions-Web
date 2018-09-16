import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../actions/postsActions';
import PropTypes from 'prop-types';
import React from 'react';
import ImageBar from './common/image-bar.jsx'
import FourOhFour from './404.jsx';
import PostMetaData from './posts/metadata.jsx';

class Post extends React.Component {

    constructor() {
        super();
        this.state = {
            post: null,
            postHTML: ''
        };
    }

    componentDidMount() {
        //assume we have loaded the posts 
        let currentPost = this.getPostData(this.props.match.params.post);

        //post not found so attempt to reload all posts
        if (currentPost === null) {
            this.props.postsActions.fetchPosts().then(() => {
                let currentPost = this.getPostData(this.props.match.params.post);
                this.fetchPostHTML(currentPost.url)
                    .then(() => this.setState({ post: currentPost }));
            });
        } else {
            this.fetchPostHTML(currentPost.url)
                .then(() => this.setState({ post: currentPost }));
        }
    }

    componentDidUpdate() {
        twttr.widgets.load(
            document.getElementById('article')
        );
    }

    getPostData(postID) {
        let post = this.props.posts.filter(post => post.id === postID);

        if (post.length > 0) {
            return post[0];
        }

        return null;
    }

    fetchPostHTML(path) {
        return fetch("/posts/" + path, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'text/html'
            }
        })
            .then(response => response.text())
            .then(text => this.setState({ postHTML: text }));
    }

    createMarkup(html) {
        return { __html: html };
    }

    render() {
        if (this.state.post === null) {
            return null;
        } else {

            return (
                <section>
                    <ImageBar ImageClass="parallax parallax--weave" />
                    <section className="panel">
                        <PostMetaData post={this.state.post} />
                        <div id="article" dangerouslySetInnerHTML={this.createMarkup(this.state.postHTML)}></div>
                    </section>
                    <ImageBar ImageClass="parallax parallax--triangles" />
                </section >
            );
        }

    }
}

Post.propTypes = {
    postsActions: PropTypes.object,
    posts: PropTypes.array
};

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postsActions: bindActionCreators(postsActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);