import { TbMinus, TbPlus, TbX } from 'react-icons/tb'
import style from './cartContainer.module.css'

const Items = () => {
  return (
    <div className={style.item_detail}>
      <div className={style.item_info}>
        <div className={style.item_image}>
          <img src="" alt="cart product image" />
        </div>
        <div className={style.item_title}>Título</div>
      </div>
      <div className={style.item_unit_price}>R$ 200,00</div>
      <div className={style.item_quantity}>
        <TbMinus /> 2 <TbPlus />
      </div>
      <div className={style.item_total_price}>R$ 400,00</div>
      <div className={style.item_remove}>
        <TbX />
      </div>
    </div>
  )
}

export default Items
