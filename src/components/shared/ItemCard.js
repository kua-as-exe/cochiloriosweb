import React, { useState } from 'react'

import { FaPlus, FaMinus } from 'react-icons/fa';
import Carousel from './Carousel';

const items = [
    {
        img: "img/carrusel/IMG_20200918_091951.jpg",
        title: "Hola familia",
        subtitle: "A",
    },
    {
        img: "img/carrusel/IMG_20201004_130834.jpg",
        title: "Fullheight title",
        subtitle: "B",
    },
    {
        img: "img/carrusel/IMG_20201004_13083x.jpg",
        title: "Fullheight title",
        subtitle: "B",
    },
    {
        img: "img/carrusel/IMG_20201004_13083y.jpg",
        title: "Fullheight title",
        subtitle: "B",
    },
]

const Details = () => {
    return (
        <div class="box">
           <Carousel
                id="P"
                isHero={false}
                config={{
                    navigationSwipe: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    infinite: true,
                    duration: 300,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    pauseOnHover: true,
                }}>
                    
                <h1>Hola</h1>      
                <h1>Hola</h1>      
                <h1>Hola</h1>      
                <h1>Hola</h1>      
                <h1>Hola</h1>      

            </Carousel>
        </div>
    )
}

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

export default function ItemCard({title, cuantity = 0, text, cost, imgUrl, updateBillProduct, id, unit}) {
    const [ModalDetails, setModalDetails] = useState(false);

    const add = () => {
        updateBillProduct(1, id);
    };
    const dis = () => {
        if(cuantity <= 0) return;
        updateBillProduct(-1, id);
    };
    const handleOpenModal = () => setModalDetails(false);
    const handleCloseModal = () => setModalDetails(false);

    return (
        <section className="column is-3" id={`catalogo-${id}`}>
            <div className="card p-3">
                <div className="card-image" onClick={handleOpenModal}>
                    <figure className="image is-square">
                        <img src={imgUrl} alt={title}/>
                    </figure>
                </div>
                <div className="card-content has-text-centered p-1">
                    <p className="title is-5">{title}</p>
                    <p className="subtitle mb-1"><small>{text}</small></p>
                    <p className="subtitle is-6">
                        ${cost} - {unit && <small>{unit}</small>}
                    </p>
                </div>
                <footer className="card-footer disable-select">
                    <a className="card-footer-item" onClick={dis}><FaMinus/></a>
                    <span className="card-footer-item has-text-weight-semibold">{cuantity}</span>
                    <a className="card-footer-item" onClick={add}><FaPlus/></a>
                </footer>
            </div>
            <div class={`modal ${ModalDetails? "is-active":""}`}>
                <div class="modal-background" onClick={handleCloseModal}></div>
                <div class="modal-content">
                    <Details/>
                </div>
                <button class="modal-close is-large" aria-label="close" onClick={handleCloseModal}></button>
            </div>
        </section>
    )
}