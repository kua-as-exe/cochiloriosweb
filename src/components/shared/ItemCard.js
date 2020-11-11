import React from 'react'

import { FaPlus, FaMinus } from 'react-icons/fa';

export default function ItemCard({title, cuantity = 0, text, cost, imgUrl, updateBillProduct, id, unit}) {

    const add = () => {
        console.log(cuantity)
        updateBillProduct(1, id);
    };
    const dis = () => {
        if(cuantity <= 0) return;
        updateBillProduct(-1, id);
    };

    return (
        <section className="column is-3" id={`catalogo-${id}`}>
            <div className="card p-3">
                <div className="card-image">
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
        </section>
    )
}
