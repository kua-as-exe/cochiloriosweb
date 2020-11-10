import React, { useState } from 'react';
import './css/App.css';

import HomeCarousel from './components/HomeCarousel.js'
import Navbar from './components/shared/Navbar';
import ItemCard from './components/shared/ItemCard.js'
import TakeBill from './components/TakeBill';

const products = {
    tortillas:{
        title: "Tortillas",
        text: "Tortillas de harina caseras y frescas",
        cost: 25,
        imgUrl: "img/tortillas.png",
    },
    chilofrijol:{
        title: "Chilofrijol",
        text: "Rico frijol con puerco al estilo sinaloense",
        cost: 50,
        imgUrl: "img/chilofrijol.png",
    },
   GalletasDeAvena:{
        title: "Galleta de Avena",
        text: "Galletas de avena bien sabrosas uwu",
        cost: 10,
        imgUrl: "img/galletas.png",
    },
}

const sections = {
    carnicos: {
        text: 'Cárnicos',
        products: ['chilofrijol']
    },
    tortillas: {
        text: 'Tortillas',
        products: ['tortillas']
    },
    galletas: {
        text: 'Galletas',
        products: ["GalletasDeAvena"]
    }
}

export default function HomePage() {
    const [bill, setbill] = useState({
        products: products,
        cost: 0
    });
    const handleUpdateCuantity = (cuantity, productID) => {
        const newBill = Object.assign({}, bill);
        const product = newBill.products[productID];
        // cuantity could be "1" or "-1"
        if(product.cuantity === undefined)
            product.cuantity = 0;
        product.cuantity += cuantity;
        newBill.cost += product.cost*cuantity;

        setbill(newBill);
    }

    const Category = ({category}) => {
        const thisCategory = sections[category];
        if(!(thisCategory && thisCategory.products && thisCategory.products.length > 0)) return <></>
        return(
            <>
                <h1 className="title is-3 has-text-centered">{thisCategory.text}</h1>
                <div className="columns">
                    {
                        thisCategory.products.map( productID => {
                            const product = products[productID];
                            if(!product) return <></>;
                            return <ItemCard 
                                key={productID}
                                id={productID}
                                updateBillProduct={handleUpdateCuantity} 
                                {...product}/>;
                        })
                    }
                </div>
            </>
        )
    }

    return (
        <div class="App">
            <Navbar billCost={bill.cost}/>
            <HomeCarousel/>

            <section className="section">
                <div className="container">                    
                    <h1 className="title is-4">Catálogo</h1>

                    <Category category="carnicos"/>
                    <Category category="tortillas"/>
                    <Category category="galletas"/>
                    
                </div>
            </section>

            <section className="section">
                <div className="container">
                <p className="title is-3">Realiza tu pedido!</p>
                    <TakeBill bill={bill}/>
                </div>
            </section>

          <pre>
              {JSON.stringify(bill, null, 2)}
          </pre>
      </div>
    )
}
