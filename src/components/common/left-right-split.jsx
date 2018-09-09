import React from 'react';

class LeftRightSplit extends React.Component{
    render(){
        return (
            <div className="panel split centered">
                <div className="leftSplit">
                    {this.props.left}
                </div>
                <div className="rightSplit">
                    {this.props.right}
                </div>
            </div>
        )
    }
}

export default LeftRightSplit