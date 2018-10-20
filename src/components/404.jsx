import React from 'react';
import ContentBar from './common/content-bar';
import ImageBar from './common/image-bar';

const FourOhFour = () => (

  <section>
    <ImageBar ImageClass="parallax parallax--weave" />
    <ContentBar title="Error 404">
      <p>
        {'Unfortunately the page you are looking for has moved.'}
      </p>
    </ContentBar>
    <ImageBar ImageClass="parallax parallax--triangles" />
  </section>

);

export default FourOhFour;
