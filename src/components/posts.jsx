import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as postsActions from '../actions/postsActions';
import ImageBar from './common/image-bar';
import PostSummary from './posts/post-summary';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const { posts, dispatchablePostAction } = this.props;

    dispatchablePostAction.fetchPosts()
      .then(() => {
        const filteredPosts = posts.filter(post => post.enabled === 1).map(post => (
          <PostSummary
            key={post.id}
            id={post.id}
            authorId={post.authorId}
            date={post.date}
            title={post.title}
            summary={post.summary}
          />
        ));

        this.setState({ posts: filteredPosts });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <section>
        <ImageBar ImageClass="parallax parallax--weave" />
        <div className="panel">
          {posts}
        </div>
        <ImageBar ImageClass="parallax parallax--triangles" />
      </section>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  dispatchablePostAction: PropTypes.instanceOf(Object).isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchablePostAction: bindActionCreators(postsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
