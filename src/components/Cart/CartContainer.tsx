import style from './cartContainer.module.css'
import Items from './Items'

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
        <div className={style.summary}></div>
      </div>
     
  
    </div>
  )
}

export default CartContainer
