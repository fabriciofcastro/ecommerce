import { TbPlus } from 'react-icons/tb'
import style from './productCard.module.css'
const ProductCard = () => {
  return (
    <div className={style.card_container}>
      <div className={style.card_image}>
        <img src="" alt="Image do produto" />
      </div>
      <div className={style.card_detail}>
        <h4 className={style.title}>Aqui é o título</h4>
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
