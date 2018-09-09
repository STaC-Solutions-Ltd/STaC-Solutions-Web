import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorsActions from '../../actions/authorsActions';
import PropTypes from 'prop-types';
import React from 'react';

class AuthorSmall extends React.Component {

    constructor() {
        super();
        this.state = {
            author: null
        };
    }

    componentDidMount() {
        //assume we have loaded the posts 
        let currentAuthor = this.getAuthor(this.props.authorId);

        //post not found so attempt to reload all posts
        if (currentAuthor === null) {
            this.props.authorsActions.fetchAuthors().then(() => {
                let currentAuthor = this.getAuthor(this.props.authorId);
                this.setState({ author: currentAuthor });
            });
        } else {
            this.setState({ author: currentAuthor });
        }
    }

    getAuthor(authorID) {
        let author = this.props.authors.filter(author => author.id === authorID);

        if (author.length > 0) {
            return author[0];
        }

        return null;
    }

    generateAltText() {
        return this.state.author.name + " avatar";
    }

    mapAvatarImage() {
        return "./images/" + this.state.author.avatar;
    }

    render() {
        if (this.state.author) {
            return (
                <div className="avatar-container">
                    <div className="avatar-image-container"><img className="avatar-image" alt={this.generateAltText()} src={this.mapAvatarImage()} /></div>
                    <div className="avatar-label">{this.state.author.name}</div>
                </div>
            )
        } else {
            return (
                <div className="avatar-container">
                    <div className="avatar-image-container"><img className="avatar-image" alt="avatar" /></div>
                    <div className="avatar-label">Unknown</div>
                </div>
            )
        }
    }
}

AuthorSmall.propTypes = {
    authorsActions: PropTypes.object,
    authors: PropTypes.array
};

function mapStateToProps(state) {
    return {
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authorsActions: bindActionCreators(authorsActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorSmall);