import React from 'react';

class CircleSection extends React.Component{
    render(){
        return (
            <div className="circles">
                {this.props.children}
            </div>
        )
    }
}

export default CircleSection


