import style from './cartContainer.module.css'

const Summary = () => {
  return (
    <div className={style.cart_summary}>
      <h3 className={style.summary_title}>Detalhes da compra</h3>
      <div className={style.summary_total}>
        <span>Subtotal</span> R$ 2.000,00
      </div>

      <div className={style.summary_total_tax}>
        <span> Descontos de (2%))</span>
      </div>
      <div className={style.summary_total_quantity}>
        <span>Quantidade Total</span> 5
      </div>

      <div className={style.summary_total_amount}>
        <span> Valor total</span>
      </div>
      <button className={style.check_out_btn}>Pagar</button>
    </div>
  )
}

export default Summary
