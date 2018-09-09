import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../actions/postsActions';
import PropTypes from 'prop-types';
import React from 'react';
import PostContent from './post/post-content.jsx'
import ImageBar from './common/image-bar.jsx'
import FourOhFour from './404.jsx';

class Post extends React.Component {

    constructor() {
        super();
        this.state = {
            post: null
        };
    }

    componentDidMount() {
        //assume we have loaded the posts 
        let currentPost = this.getPost(this.props.match.params.post);

        //post not found so attempt to reload all posts
        if (currentPost === null) {
            this.props.postsActions.fetchPosts().then(() => {
                let currentPost = this.getPost(this.props.match.params.post);
                this.setState({ post: currentPost });
            });
        } else {
            this.setState({ post: currentPost });
        }
    }

    getPost(postID) {
        let post = this.props.posts.filter(post => post.id === postID);

        if (post.length > 0) {
            return post[0];
        }

        return null;
    }

    render() {
        if (this.state.post === null) {
            return (
                <FourOhFour></FourOhFour>
            );
        } else {

            return (
                <section >
                    <ImageBar ImageClass="parallax parallax--weave" />
                    <article className="center panel">
                        <div>
                            <div>
                                <userpicture />
                                <username />
                                <div>Published on {this.state.post.date}</div>
                            </div>
                            <h2>{this.state.post.title}</h2>
                        </div>
                        <PostContent content={this.state.post.content} />
                    </article >
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