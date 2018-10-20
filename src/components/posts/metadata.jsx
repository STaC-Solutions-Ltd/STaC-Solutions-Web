import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import * as authorsActions from '../../actions/authorsActions';

class PostMetaData extends React.Component {
  constructor() {
    super();
    this.state = {
      author: null
    };
  }

  componentDidMount() {
    const { post, dispatchableAuthorsActions } = this.props;

    // assume we have loaded the posts
    let currentAuthor = this.getAuthor(post.authorId);

    // post not found so attempt to reload all posts
    if (currentAuthor === null) {
      dispatchableAuthorsActions.fetchAuthors().then(() => {
        currentAuthor = this.getAuthor(post.authorId);
        this.setState({ author: currentAuthor });
      });
    } else {
      this.setState({ author: currentAuthor });
    }
  }

  getAuthor(authorID) {
    const { authors } = this.props;

    const author = authors.filter(a => a.id === authorID);

    if (author.length > 0) {
      return author[0];
    }

    return null;
  }

  generateAltText() {
    const { author } = this.state;
    return `${author.name} avatar`;
  }

  mapAvatarImage() {
    const { author } = this.state;
    return `./images/${author.avatar}`;
  }

  render() {
    const { author } = this.state;
    const { post } = this.props;
    if (author) {
      return (
        <div className="post-metadata">
          <div className="post-metadata-labels">
            <div>
              {`Written by ${author.name}`}
            </div>
            <div>
              {`Published on ${new Date(post.date).toLocaleDateString()}`}
            </div>
          </div>
          <div className="post-metadata-image-container">
            <img className="avatar-image" alt={this.generateAltText()} src={this.mapAvatarImage()} />
          </div>
        </div>
      );
    }
    return (
      <div className="post-metadata">
        <div className="post-metadata-labels">
          <div>
            {'Unknown'}
          </div>
          <div>
            {new Date(post.date).toLocaleDateString()}
          </div>
        </div>
        <div className="post-metadata-image-container">
          <img className="avatar-image" alt="avatar" />
        </div>
      </div>
    );
  }
}

PostMetaData.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired,
  post: PropTypes.instanceOf(Object).isRequired,
  dispatchableAuthorsActions: PropTypes.instanceOf(Object).isRequired
};

function mapStateToProps(state) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchableAuthorsActions: bindActionCreators(authorsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostMetaData);
