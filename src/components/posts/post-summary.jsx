import React from 'react';
import AuthorSmall from './author-small.jsx';
import { NavLink } from "react-router-dom";

class PostSummary extends React.Component {

    getPostUrl() {
        return "./blog/" + this.props.id;
    }

    getImageUrl() {
        return "./images/" + this.props.summary.image;
    }

    render() {
        return (
            <section className="post-summary">
                <div className="post-summary-meta-data">
                    <AuthorSmall authorId={this.props.authorId} />
                    <span className="post-summary-date">{new Date(this.props.date).toLocaleDateString()}</span>
                    <h4 className="post-summary-title">{this.props.title}</h4>
                </div>
                <div className="post-summary-content">
                    <p className="post-summary-description">{this.props.summary.text}</p>
                </div>
                <div className="post-summary-footer">
                    <NavLink className="post-summary-post-link" to={this.getPostUrl()}>Read More...</NavLink>
                    <img src={this.getImageUrl()}></img>
                </div>
            </section>
        )
    }
}

export default PostSummary