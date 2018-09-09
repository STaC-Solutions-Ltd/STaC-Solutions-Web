import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../actions/postsActions';
import PropTypes from 'prop-types';
import React from 'react';
import ImageBar from './common/image-bar.jsx'
import PostSummary from './posts/post-summary.jsx'

class Posts extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.props.postsActions.fetchPosts()
            .then(() => {
                let posts = this.props.posts.map((post) => {
                    return (
                        <PostSummary key={post.id}
                            id={post.id}
                            authorId={post.authorId}
                            date={post.date}
                            title={post.title}
                            summary={post.summary} />
                    );
                });

                this.setState({ posts: posts });
            });
    }

    render() {

        return (
            <section>
                <ImageBar ImageClass="parallax parallax--weave" />
                <div className="panel">
                    {this.state.posts}
                </div>
                <ImageBar ImageClass="parallax parallax--triangles" />
            </section>
        )
    }
}


Posts.propTypes = {
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
)(Posts);