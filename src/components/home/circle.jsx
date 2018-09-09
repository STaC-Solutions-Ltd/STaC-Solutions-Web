import React from 'react';

class Circle extends React.Component{
    render(){
        return (
            <div className="circle-container">
                <div className="circle" title={this.props.Label}>
                    <img alt={this.props.AltText} src={this.props.Image} />
                </div>
                <p className="circle-label">{this.props.Label}</p>
            </div>
        )
    }
}

export default Circle