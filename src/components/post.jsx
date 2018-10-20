import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import * as postsActions from '../actions/postsActions';
import ImageBar from './common/image-bar';
import PostMetaData from './posts/metadata';

class Post extends React.Component {
  static createMarkUp(html) {
    return { __html: html };
  }

  constructor() {
    super();
    this.state = {
      post: null,
      postHTML: ''
    };
  }

  componentDidMount() {
    const { match, dispatchablePostsActions } = this.props;

    // assume we have loaded the posts
    let currentPost = this.getPostData(match.params.post);

    // post not found so attempt to reload all posts
    if (currentPost === null) {
      dispatchablePostsActions.fetchPosts().then(() => {
        currentPost = this.getPostData(match.params.post);
        this.fetchPostHTML(currentPost.url)
          .then(() => this.setState({ post: currentPost }));

        document.title = currentPost.title;
      });
    } else {
      document.title = currentPost.title;

      this.fetchPostHTML(currentPost.url)
        .then(() => this.setState({ post: currentPost }));
    }
  }

  componentDidUpdate() {
    window.twttr.widgets.load(
      document.getElementById('article')
    );
  }

  componentWillUnmount() {
    document.title = 'STaC Solutions Ltd';
  }

  getPostData(postID) {
    const { posts } = this.props;
    const post = posts.filter(p => p.id === postID);

    if (post.length > 0) {
      return post[0];
    }

    return null;
  }

  fetchPostHTML(path) {
    return fetch(`/posts/${path}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'text/html'
      }
    })
      .then(response => response.text())
      .then(text => this.setState({ postHTML: text }));
  }

  render() {
    const { post, postHTML } = this.state;

    if (post === null) {
      return null;
    }

    return (
      <section>
        <ImageBar ImageClass="parallax parallax--weave" />
        <section className="panel">
          <PostMetaData post={post} />
          <div id="article" dangerouslySetInnerHTML={Post.createMarkUp(postHTML)} />
        </section>
        <ImageBar ImageClass="parallax parallax--triangles" />
      </section>
    );
  }
}

Post.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  posts: PropTypes.instanceOf(Array).isRequired,
  dispatchablePostsActions: PropTypes.instanceOf(Object).isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchablePostsActions: bindActionCreators(postsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
