import React from 'react';
import { isArray } from 'util';
import Parser from 'html-react-parser';

class PostContent extends React.Component {

    render() {
        if (this.props.content === null) {
            return null;
        } else if (isArray(this.props.content)) {
            let contents = this.props.content.map((cnt) => (<PostContent content={cnt} />))

            return contents;
        } else if (this.props.content.type === "blockquote") {
            return (
                <blockquote cite={this.props.content.cites}>{Parser(this.props.content.content)}</blockquote>
            )
        } else if (this.props.content.type === "paragraph") {
            return (
                <p>{Parser(this.props.content.content)}</p>
            )
        } else if (this.props.content.type === "listitem") {
            return (
                <li>{Parser(this.props.content.content)}</li>
            )
        } else if (this.props.content.type === "code") {
            return (
                <pre><code>{Parser(this.props.content.content)}</code></pre>
            )
        } else if (this.props.content.type === "list") {
            let contents = this.props.content.content.map(cnt => (<PostContent key="" content={cnt} />))
            return (
                <ul>
                    {contents}
                </ul >
            );
        } else if (this.props.content.type === "figure") {
            return (
                <figure>
                    <img src={this.props.content.image} altText={this.props.content.content} />
                    <figcaption>{this.props.content.content}</figcaption>
                </figure>
            )
        } else if (this.props.content.type === "section") {
            let contents = this.props.content.content.map(cnt => (<PostContent key="" content={cnt} />))
            return (
                <section>
                    <h3>{this.props.content.title}</h3>
                    {contents}
                </section >
            );
        } else {
            return null;
        }
    }
}
export default PostContent