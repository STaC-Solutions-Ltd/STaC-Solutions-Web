import React from 'react';

class ContentBar extends React.Component{
    render(){
        return (
            <section className="panel centered">
                <h2>{this.props.title}</h2>
                {this.props.children}
            </section>
        )
    }
}

export default ContentBar