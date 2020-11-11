import React, { useState } from 'react';
import './css/App.css';

import HomeCarousel from './components/HomeCarousel.js'
import Navbar from './components/shared/Navbar';
import ItemCard from './components/shared/ItemCard.js'
import TakeBill from './components/TakeBill';
import { products, sections, WhatsappNumber } from './data';

function getLinkWhastapp(number, message) {
    var url = 'https://api.whatsapp.com/send?phone=' 
       + number 
       + '&text=' 
       + encodeURIComponent(message)
  
    return url
  }

const getWhatsappMessage = (clientData, bill) => {
    const {name, tel, direction, comments} = clientData;
    let products = [];

    Object.values(bill.products).forEach(product => {
        if(product.cuantity > 0){
            products.push(`    - ${product.cuantity} | ${product.title}`)
        }
    })
    products = products.join('\n');
    

    return (`
*COChilorios* 🐷
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
    Pedido de: *${name}*
    Contacto:  ${tel}
    
    Dirección: ${direction}
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 *Pedido:*
${products}

 *Costo: $${bill.cost}*
${
   comments && `*Comentarios:*
      _${comments}_`
}
`)
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
            <div className="">
                <BgImgHero
                    is="is-small"
                    dark={true}
                    size="is-3"
                    img="img/banners/catalogo.jpg"
                    title={thisCategory.text}/>

                <div className="columns mt-1">
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
                <hr/>
            </div>
        )
    }
    const handleTakeBill = (clientData) => {
        console.log(clientData);
        const message = getWhatsappMessage(clientData, bill)
        console.log(message)
        const whatsLink = getLinkWhastapp(WhatsappNumber, message);
        window.open(whatsLink);
    }

    const BgImgHero = ({img, title, subtitle, dark = false, is = "", size = ""}) => (
        <div className={`hero ${dark?'is-dark': ''} ${is}`} style={{
                background: 'url("'+img+'")',
                backgroundSize: 'cover',
                backgroundPositionY: 'center',
                backgroundPositionX: 'center',
            }}>

            <div className="hero-body">
            <div className="container">
                {title && <p className={`title ${size}`}>{title}</p>}
                {subtitle && <p className={`subtitle ${size}`}>{subtitle}</p>}
            </div>
            </div>
        </div>
    )

    return (
        <div className="App">
            <Navbar billCost={bill.cost}/>
            <HomeCarousel/>

            <section className="section" id='catalogo'>
                <div className="container mt-5">
                    <div className="box">

                    <BgImgHero
                        //is="is-medium
                        size="is-2"
                        dark={true}
                        img="img/banners/catalogo.jpg"
                        title="Catálogo"/>

                    <Category category="carnicos"/>
                    <Category category="tamales"/>
                    <Category category="galletas"/>
                    <Category category="tortillas"/>
                    </div>
                </div>
            </section>

            <section className="section" id='pedido'>
                <div className="container mt-5">
                <p className="title is-3">Realiza tu pedido!</p>
                    <TakeBill 
                        bill={bill}
                        takeBill={handleTakeBill}/>
                </div>
            </section>
        </div>
    )
}
