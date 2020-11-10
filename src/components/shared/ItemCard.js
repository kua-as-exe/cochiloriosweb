import React from 'react'

import { FaPlus, FaMinus } from 'react-icons/fa';

export default function ItemCard({title, cuantity = 0, text, cost, imgUrl, updateBillProduct, id}) {

    const add = () => {
        console.log(cuantity)
        updateBillProduct(1, id);
    };
    const dis = () => {
        if(cuantity <= 0) return;
        updateBillProduct(-1, id);
    };

    return (
        <div className="column is-3">
            <div class="card p-3">
                <div class="card-image">
                    <figure class="image is-square">
                        <img src={imgUrl} alt={title}/>
                    </figure>
                </div>
                <div class="card-content has-text-centered p-1">
                    <p className="title is-5">{title}</p>
                    <p className="subtitle mb-1"><small>{text}</small></p>
                    <p className="subtitle is-6">${cost}</p>
                </div>
                <footer class="card-footer disable-select">
                    <a class="card-footer-item" onClick={dis}><FaMinus/></a>
                    <span class="card-footer-item has-text-weight-semibold">{cuantity}</span>
                    <a class="card-footer-item" onClick={add}><FaPlus/></a>
                </footer>
            </div>
        </div>
    )
}
