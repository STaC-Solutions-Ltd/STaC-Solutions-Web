import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthorSmall from './author-small';

class PostSummary extends React.Component {
  getPostUrl() {
    const { id } = this.props;

    return `./blog/${id}`;
  }

  getImageUrl() {
    const { summary } = this.props;

    return `./images/${summary.image}`;
  }

  render() {
    const {
      authorId,
      date,
      title,
      summary
    } = this.props;

    return (
      <section className="post-summary">
        <div className="post-summary-meta-data">
          <AuthorSmall authorId={authorId} />
          <span className="post-summary-date">
            {new Date(date).toLocaleDateString()}
          </span>
          <h4 className="post-summary-title">
            {title}
          </h4>
        </div>
        <div className="post-summary-content">
          <p className="post-summary-description">
            {summary.text}
          </p>
        </div>
        <div className="post-summary-footer">
          <NavLink className="post-summary-post-link" to={this.getPostUrl()}>
            {'Read More...'}
          </NavLink>
          {summary.image &&
            <img src={this.getImageUrl()} alt="" />
          }
        </div>
      </section>
    );
  }
}

PostSummary.propTypes = {
  id: PropTypes.string.isRequired,
  summary: PropTypes.shape({ text: '', image: '' }).isRequired,
  authorId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PostSummary;
