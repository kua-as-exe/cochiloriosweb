import React from 'react'

export default function ItemCard() {
    return (
        <div className="column">
            <div class="card">
                <div className="card-header">
                    <p className="card-header-title is-centered">Hola</p>
                </div>
                <div class="card-image">
                    <figure class="image is-square">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="card-content has-text-centered" style={{padding: '10px 0px'}}>
                    <p className="title is-5">Titulo</p>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item">Ver más</a>
                </footer>
            </div>
        </div>
    )
}
