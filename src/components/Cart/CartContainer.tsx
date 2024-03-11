import style from './cartContainer.module.css'
import Items from './Items'
import Summary from './Summary'

const CartContainer = () => {
  return (
    <div className={style.cart_wrapper}>
      <h2 className="section-title"></h2>
      <div className={style.cart_container}>
        <div className={style.cart_items}>
          <div className={style.cart_items}>
            <Items />
          </div>
        </div>
        <Summary />
      </div>
    </div>
  )
}

export default CartContainer
