import React from 'react';
import PropTypes from 'prop-types';

const LeftRightSplit = (props) => {
  const { left, right } = props;

  return (
    <div className="panel split centered">
      <div className="leftSplit">
        {left}
      </div>
      <div className="rightSplit">
        {right}
      </div>
    </div>
  );
};

LeftRightSplit.propTypes = {
  left: PropTypes.shape({}).isRequired,
  right: PropTypes.shape({}).isRequired
};

export default LeftRightSplit;
