import React from 'react'
import Carousel from './shared/Carousel'

const HeroCarouselItem = ({children, imgUrl}) => (
    <div className='carousel-item hero is-fullheight-with-navbar has-background'
        style={{
            backgroundSize: 'cover',
            backgroundPositionY: 'center',
            backgroundPositionX: 'center',
            backgroundImage: `url('${imgUrl}')`
            }}>
        <div className="hero-body">
            <>{children}</>
        </div>
    </div>
)


const HeroCarousel = ({items = [{img, title, subtitle, text}]}) => {
    return items.map( ({img, title, subtitle, text}) => (
        <HeroCarouselItem imgUrl={img}>
            <div className="container">
                { title && <p className="title">{title}</p>}
                { subtitle && <p className="subtitle">{subtitle}</p>}
                { text && <p>{text}</p>}
            </div>
        </HeroCarouselItem>
    ))
}

export default function HomeCarousel() {
    return (
        <section className="hero is-fullheight-with-navbar has-carousel is-primary">
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
                <HeroCarousel items={homeCarouselItems}/>
            </Carousel>
        </section>
    )
}
