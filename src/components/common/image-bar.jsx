import React from 'react';
import PropTypes from 'prop-types';

const ImageBar = (props) => {
  const { ImageClass } = props;
  return (
    <div className="angle-holder angled-bottom angled-top">
      <div className={ImageClass} />
    </div>
  );
};

ImageBar.propTypes = {
  ImageClass: PropTypes.string.isRequired
};

export default ImageBar;
