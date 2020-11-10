import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

export default function Carousel(props) {
    useLayoutEffect(() => {
        bulmaCarousel.attach('#'+props.id, props.config);
    }, [props.config])

    return (
        <div id={props.id} class={props.isHero?"hero-carousel":"carousel"}>
            {props.children}
        </div>
    )
}

Carousel.propTypes = {
    id: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired
}

