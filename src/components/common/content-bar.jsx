import React from 'react';
import PropTypes from 'prop-types';

const ContentBar = (props) => {
  const { title, children } = props;
  return (
    <section className="panel centered">
      <h2>
        {title}
      </h2>
      {children}
    </section>
  );
};

ContentBar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Array).isRequired
};

export default ContentBar;
