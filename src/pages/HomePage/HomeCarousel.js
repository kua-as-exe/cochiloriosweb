import React from 'react'
import Carousel from './Carousel'

const HeroCarouselItem = (props) => {

    return (
        <div class='carousel-item hero is-fullheight-with-navbar has-background'
            style={{
                backgroundSize: 'cover',
                backgroundPositionY: 'center',
                backgroundPositionX: 'center',
                backgroundImage: `url('${props.imgUrl}')`
                }}>
            <div className="hero-body">
                <>{props.children}</>
            </div>
        </div>
    )
}
export default function HomeCarousel() {
    return (
        <section class="hero is-fullheight-with-navbar has-carousel is-primary">
            <Carousel
                id="Presentation"
                isHero={true}
                config={{
                    navigationSwipe: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    infinite: true,
                    duration: 300,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    pauseOnHover: true,
                }}>
                <HeroCarouselItem imgUrl="img/IMG_20200918_091951.jpg">
                    <div class="container">
                        <h1 class="title">
                            Fullheight title XD
                        </h1>
                        <h2 class="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
                <HeroCarouselItem imgUrl="img/IMG_20201004_130834.jpg">
                    <div class="container">
                        <h1 class="title">
                            Fullheight title
                        </h1>
                        <h2 class="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
                <HeroCarouselItem imgUrl="img/IMG_20201014_184350.jpg">
                    <div class="container">
                        <h1 class="title">
                            Fullheight title
                        </h1>
                        <h2 class="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
                <HeroCarouselItem imgUrl="img/IMG_20201023_212514.jpg">
                    <div class="container">
                        <h1 class="title">
                            Fullheight title
                        </h1>
                        <h2 class="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
                <HeroCarouselItem imgUrl="img/IMG_20201026_211710.jpg">
                    <div class="container">
                        <h1 class="title">
                            Fullheight title
                        </h1>
                        <h2 class="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
            </Carousel>
        </section>
    )
}
