import React, { useState } from 'react'
import { MobileView } from 'react-device-detect'
import { homeCarouselConfig, homeCarouselItems } from '../data'
import Carousel from './shared/Carousel'
let carouselClass = 'is-fullheight-with-navbar'
const HeroCarouselItem = ({children, imgUrl, item}) => {
    return(
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
}


const HeroCarousel = ({items}) => {
    return items.map( (item) => {
        //console.log(item)
        const {img, subtitle, text, title, size} = item;
        return (
        <HeroCarouselItem key={img} imgUrl={img} item={item}>
            <div className="container ">
                { title && <p className={`title has-text-white ${size? "is-"+size: ""}`}>{title}</p>}
                { subtitle && <p className="title is-5 has-text-white has-text-right">{subtitle}</p>}
                { text && <p>{text}</p>}
            </div>
        </HeroCarouselItem>)
    })
}

export default function HomeCarousel() {

    return (
        <section className={`hero ${carouselClass} has-carousel`}>
            <Carousel
                id="Presentation"
                isHero={true}
                config={homeCarouselConfig}>
                
                <HeroCarousel items={homeCarouselItems}/>
            </Carousel>
        </section>
    )
}
