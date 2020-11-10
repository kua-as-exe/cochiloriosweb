import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";


function TakeBill({bill}) {
    const BillingListItem = (product) => (
        <a class="panel-block is-active">
            <span>{product.cuantity} de {product.title} (${product.cost*product.cuantity})</span>
        </a>
    )

    const hasProducts = () => Object.values(bill.products).filter( product => product.cuantity > 0).length > 0

    const BillingList = () => {
        return (
            <article class="panel is-primary">
                <p class="panel-heading">
                    Lo que pediste:
                </p>
                {
                    Object.keys(bill.products).map( productKey => {
                        const product = bill.products[productKey];
                        if(product.cuantity && product.cuantity > 0)
                            return <BillingListItem key={productKey} {...product}/>
                    })
                }

                {!hasProducts() &&
                    <a class="p-3 content is-active is-align-content-center disable-select">
                        <figure className="is-fullwidth mt-0">
                            <p className="title is-5">Woops! parece que aún no hay productos en el carrito</p>
                            <p className="subtitle is-6 mb-1">Toca aquí para ir al catálogo</p>
                            <img src="https://media.giphy.com/media/dcVfvQSQi3nYk/giphy.gif" alt="this slowpoke moves" class="is-fullWidth"/>
                        </figure>
                    </a>
                }

            </article>
        )
    }

    const { register, handleSubmit, watch, errors } = useForm();

    const handleBill = (e) => {
        console.log(e)
    }

    return (
        <div className="columns">
                    <div className="column is-6">

                        <form className="box" onSubmit={handleSubmit(handleBill)}>

                            <label class="label">👩‍🍳 Tu nombre:</label>
                            <div class="field">
                            <div class="control">
                                <input ref={register({required: true})} name="name" class="input" type="text" placeholder="Will Smith"/>
                            </div>
                            </div>

                            <label class="label">📞 Tu teléfono:</label>
                            <div class="field has-addons">
                                <p class="control">
                                    <span class="select ">
                                    <select>
                                        <option>+52 (MX)</option>
                                    </select>
                                    </span>
                                </p>
                                <p class="control  is-expanded">
                                    <input 
                                        ref={register({
                                            required: true, 
                                            validate: {
                                                lenght: value => String(value).replaceAll(" ", "").length == 10,
                                              }
                                        })} 
                                        name="tel" 
                                        class="input" 
                                        type="tel" 
                                        placeholder="222 222 2222"/>
                                </p>
                            </div>

                            <label class="label">🏡 Donde vives:</label>
                            <div class="field">
                            <div class="control">
                                <input ref={register({required: true})} name="direction" class="input" type="text" placeholder="En mi casa"/>
                            </div>
                            </div>

                            <label class="label">📌 Comentarios:</label>
                            <div class="field">
                            <div class="control">
                                <input ref={register} name="comments" class="input" type="text" placeholder="Con mucha salesiana"/>
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
    bill: PropTypes.object.isRequired()
}

export default TakeBill

