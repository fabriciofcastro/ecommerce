import { TbPlus } from 'react-icons/tb'
import style from './productCard.module.css'

const ProductCard = ({ product }) => {
  return (
    <div className={style.card_container}>
      <div className={style.card_image}>
        <img src={product} alt="Image do produto" />
      </div>
      <div className={style.card_detail}>
        <h4 className={style.title}>{product.title}</h4>
        <div className={style.card_category}>CATEGORIA</div>

        <div className={style.card_flex}>
          <div className={style.card_price}>R$ 20,00 </div>
          <div className={style.card_button}>
            <TbPlus />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
