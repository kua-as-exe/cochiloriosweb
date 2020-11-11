import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";

function TakeBill({bill, takeBill}) {
    const BillingListItem = (product) => (
        <a className="panel-block is-active">
            <span>{product.cuantity} de {product.title} (${product.cost*product.cuantity})</span>
        </a>
    )

    const hasProducts = () => Object.values(bill.products).filter( product => product.cuantity > 0).length > 0

    const BillingList = () => {
        return (
            <article className="panel is-primary">
                <p className="panel-heading">
                    Lo que pediste:
                </p>
                {
                    Object.keys(bill.products).map( productKey => {
                        const product = bill.products[productKey];
                        if(product.cuantity && product.cuantity > 0)
                            return <BillingListItem key={productKey} {...product}/>
                        return <div key={productKey}></div>
                    })
                }

                {!hasProducts() &&
                    <a className="p-3 content is-active is-align-content-center disable-select" href="#catalogo">
                        <figure className="is-fullwidth mt-0">
                            <p className="title is-5">Woops! parece que aún no hay productos en el carrito</p>
                            <p className="subtitle is-6 mb-1">Toca aquí para ir al catálogo</p>
                            <img src="https://media.giphy.com/media/dcVfvQSQi3nYk/giphy.gif" alt="this slowpoke moves" className="is-fullWidth"/>
                        </figure>
                    </a>
                }

            </article>
        )
    }

    const { register, handleSubmit } = useForm();

    const handleBill = (clientData) => takeBill(clientData);

    return (
        <div className="columns">
            <div className="column is-6">

                <form className="box" onSubmit={handleSubmit(handleBill)}>

                    <label className="label">👩‍🍳 Tu nombre:</label>
                    <div className="field">
                        <div className="control">
                            <input ref={register({required: true})} name="name" className="input" type="text" placeholder="Will Smith"/>
                        </div>
                    </div>

                    <label className="label">📞 Tu teléfono:</label>
                    <div className="field has-addons">
                        <p className="control">
                            <span className="select">
                                <select>
                                    <option>+52 (MX)</option>
                                </select>
                            </span>
                        </p>
                        <p className="control  is-expanded">
                            <input 
                                ref={register({
                                    required: true, 
                                    validate: {
                                        lenght: value => String(value).replaceAll(" ", "").length === 10,
                                    }
                                })} 
                                name="tel" 
                                className="input" 
                                type="tel" 
                                placeholder="222 222 2222"/>
                        </p>
                    </div>

                    <label className="label">🏡 Donde vives:</label>
                    <div className="field">
                        <div className="control">
                            <input ref={register({required: true})} name="direction" className="input" type="text" placeholder="En mi casa"/>
                        </div>
                    </div>

                    <label className="label">📌 Comentarios: (opcional)</label>
                    <div className="field">
                        <div className="control">
                            <input ref={register} name="comments" className="input" type="text" placeholder="Sin mucha sal, es la casa con portón gris y un santaclaus afuera"/>
                        </div>
                    </div>

                    <div className="is-hidden-desktop mt-2 mb-4">
                        <BillingList/>
                    </div>

                    <div className="level mb-0">
                        <div className="level-right">
                            <p className="level-item title is-4 is-hidden-desktop mb-3">${bill.cost} (MXN)</p>
                            <p className="level-item title is-4 is-hidden-mobile is-hidden-tablet-only">${bill.cost} (MXN)</p>
                        </div>
                        <div className="level-left">
                            <div className="level-item ">
                                <button 
                                    className="button is-primary"
                                    disabled={!hasProducts()}
                                    type="submit">De acuerdo</button>
                            </div>
                        </div>
                    </div>
                </form>


            </div>
            <div className="column is-6 is-hidden-tablet-only is-hidden-touch">
                <BillingList className=""/>
            </div>
        </div>
    )
}

TakeBill.propTypes = {
    bill: PropTypes.object.isRequired
}

export default TakeBill

