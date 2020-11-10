import React from 'react'
//import Carousel from '../../components/shared/Carousel'
import HomeCarousel from './HomeCarousel.js'
import ItemCard from '../../components/shared/ItemCard.js'
import Carousel from './Carousel.js'

const title = "Tortillas"
const text = "Tortillas de harina caseras"
const cost = "25$"

export default function HomePage() {
    return (
        <>
            <HomeCarousel/>

            <section className="section">
                <div className="container">                    
                <h1 className="title is-4">Catálogo</h1>
                <h1 className="title is-3 has-text-centered">Cárnicos</h1>
                    <Carousel
                        class="columns"
                        id="carnicos"
                        config={{
                            navigationSwipe: true,
                            slidesToScroll: 1,
                            slidesToShow: 4,
                            duration: 300,
                            autoplay: false,
                            autoplaySpeed: 5000,
                            pauseOnHover: true,
                        }}>
                        <div className="column">
                            <div class="card">
                                <div className="card-header">
                                    <p className="card-header-title is-centered">{title}</p>
                                </div>
                                <div class="card-image">
                                    <figure class="image is-9x16">
                                    <img src="img/tortillas.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content has-text-centered" style={{padding: '10px 0px'}}>
                                    <p>{text}</p>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">Ver más</a>
                                </footer>
                            </div>
                        </div>

                        <div className="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-square">
                                    <img src="img/tortillas.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content has-text-centered" style={{padding: '10px 0px'}}>
                                    <p className="title is-5">{title}</p>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">Ver más</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-square">
                                    <img src="img/tortillas.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content has-text-centered" style={{padding: '10px 0px'}}>
                                    <p className="title is-5">{title}</p>
                                    <p className="subtitle is-6">{text}</p>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">{cost}</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column">
                            <a class="box box_item" style={{padding: '10px 20px'}}>
                                <div class="card-image">
                                    <figure class="image is-square">
                                    <img src="img/tortillas.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content has-text-centered" style={{padding: '10px 0px'}}>
                                    <p className="title is-5">{title}</p>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">{cost}</a>
                                </footer>
                            </a>
                        </div>
                        <div className="column">
                            <div class="box box_item" style={{padding: '10px 20px'}}>
                                <div class="card-image">
                                    <figure class="image is-square">
                                    <img src="img/tortillas.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content has-text-centered" style={{padding: '10px 0px'}}>
                                    <p className="title is-5">{title}</p>
                                    <p className="subtitle is-6">{text}</p>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">{cost}</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column">
                            <div class="box box_item" style={{padding: '10px 20px'}}>
                                <div class="card-image">
                                    <figure class="image is-square">
                                    <img src="img/tortillas.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content has-text-centered" style={{padding: '10px 0px'}}>
                                    <p className="title is-5">{title}</p>
                                    <p className="subtitle"><small>{text}</small></p>
                                    <p className="subtitle is-6">{cost}</p>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">-</a>
                                    <a href="#" class="card-footer-item">0</a>
                                    <a href="#" class="card-footer-item">+</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column">
                            <div class="card">
                                 <div className="card-header">
                                    <p className="card-header-title is-centered">{title}</p>
                                </div>
                                <div class="card-image">
                                    <figure class="image is-square">
                                    <img src="img/tortillas.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content has-text-centered" style={{padding: '10px 0px'}}>
                                    <p className="title is-5"><small>{text}</small></p>
                                    <p className="subtitle is-6">{cost}</p>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">-</a>
                                    <a href="#" class="card-footer-item">0</a>
                                    <a href="#" class="card-footer-item">+</a>
                                </footer>
                            </div>
                        </div>
                    </Carousel>
                    <div className="columns">
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                    </div>
                </div>
            </section>
            <div className="buttons">
                <button className="button is-primary">Primary</button>
                <button className="button is-link">Link</button>
            </div>
        </>
    )
}
