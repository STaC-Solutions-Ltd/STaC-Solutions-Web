import React from 'react';
import PropTypes from 'prop-types';

const CircleSection = (props) => {
  const { children } = props;

  return (
    <div className="circles">
      {children}
    </div>
  );
};

CircleSection.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

export default CircleSection;
