import React, { useLayoutEffect } from 'react';
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

}

