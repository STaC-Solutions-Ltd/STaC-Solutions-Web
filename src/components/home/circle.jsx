import React from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
  const { Label, Image, AltText } = props;

  return (
    <div className="circle-container">
      <div className="circle" title={Label}>
        <img alt={AltText} src={Image} />
      </div>
      <p className="circle-label">
        {Label}
      </p>
    </div>
  );
};

Circle.propTypes = {
  Label: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired,
  AltText: PropTypes.string.isRequired
};

export default Circle;
