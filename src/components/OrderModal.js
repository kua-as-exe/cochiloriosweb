import React from 'react'
import PropTypes from 'prop-types'
import { orderModalTitleLabels, random, whatsappMessageLabels, WhatsappNumber } from '../data'
import { BrowserView, MobileView } from 'react-device-detect'

function getLinkWhastapp(number, message) {
    var url = 'https://api.whatsapp.com/send?phone=' 
       + number 
       + '&text=' 
       + encodeURIComponent(message)
  
    return url
  }

const getWhatsappMessage = (bill) => {
    const {name, tel, direction, comments, date, hour} = bill.clientData;
    let products = [];

    Object.values(bill.products).forEach(product => {
        if(product.cuantity > 0){
            products.push(`    - ${product.cuantity} | ${product.title}`)
        }
    })
    products = products.join('\n');
    //name = name.trim();
    return (`*COChilorios* 🐷
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
    Pedido de: *${name}*
    Contacto:  ${tel}
    
    Fecha: ${date}
           ${hour}
    Dirección: ${direction}
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 *Pedido:*
${products}

 *Costo: $${bill.cost}*

${
   comments && ` *Comentarios:*
  _${comments.trim()}_`
}`)
}

function OrderModal({bill, close}) {
    console.log(bill)
    const message = getWhatsappMessage(bill);
    const handleOrderBill = () => {
        const link = getLinkWhastapp(WhatsappNumber, message);
        close();
        window.open(link);
    }

    return (
        <div className={`modal ${bill.order? "is-active": ""}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{random(orderModalTitleLabels)}</p>
                    <button className="delete" aria-label="close" onClick={close}></button>
                </header>
                <section className="modal-card-body">
                    <p className="title is-5 has-text-centered mb-3">Este es tu pedido:</p>
                    <pre className="is-size-7">{message}</pre>
                    <div className="notification is-link is-light">
                        <BrowserView>
                            Al presionar el botón de abajo te abrirá un link con tu pedido, deberás tener la aplicación de Whatsapp instalada o Whatsapp Web para envíanos el mensaje, si no, prueba hacerlo desde teléfono o copia el mensaje y pidele a un amigo cercano que lo envíe por ti. De este modo podremos atender a tu pedido y mantenernos en contacto contigo.
                        </BrowserView>
                        <MobileView>
                            Al presionar el botón de abajo te abrirá un link con tu pedido,selecciona "abrir con whatsapp" y envíanos el mensaje. De este modo podremos atender a tu pedido y mantenernos en contacto contigo.
                        </MobileView>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button 
                        className="button is-success is-expanded is-fullwidth" 
                        onClick={handleOrderBill}>{random(whatsappMessageLabels)}</button>
                </footer>
            </div>
        </div>
    )
}

OrderModal.propTypes = {

}

export default OrderModal

