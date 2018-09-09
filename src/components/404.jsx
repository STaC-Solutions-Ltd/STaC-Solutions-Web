import React from 'react';
import ContentBar from './common/content-bar.jsx';
import ImageBar from './common/image-bar.jsx';

class FourOhFour extends React.Component {
    render() {
        return (

            <section>
                <ImageBar ImageClass="parallax parallax--weave" />
                <ContentBar title="Error 404">
                    <p>
                        Unfortunately the page you are looking for has moved.
                    </p>
                </ContentBar>
                <ImageBar ImageClass="parallax parallax--triangles" />
            </section>

        )
    }
}

export default FourOhFour