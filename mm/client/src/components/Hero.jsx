import React from 'react';

const Hero = props => {
    return (
        <div className="jumbotron" id="landing_hero">
            <h1 className="display-3">Hello, World!</h1>
            <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
            </p>
        </div>
    );
};

export default Hero;
