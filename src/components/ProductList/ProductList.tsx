import ProductCard from '../ProductCard/ProductCard'
import style from './ProductList.module.css'

const ProductList = () => {
  return (
    <div className={style.product_list}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductList
