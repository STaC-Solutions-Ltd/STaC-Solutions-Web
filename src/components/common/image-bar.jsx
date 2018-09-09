import React from 'react';

class ImageBar extends React.Component{
    render(){
        return (
            <div className="angle-holder angled-bottom angled-top">
                <div className={this.props.ImageClass}></div>
            </div>
        )
    }
}

export default ImageBar