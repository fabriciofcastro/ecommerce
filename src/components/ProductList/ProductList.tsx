import ProductCard from '../ProductCard/ProductCard'
import style from './ProductList.module.css'
import { useProduct } from '../../context/ProductContext'

const ProductList = () => {
  const { products } = useProduct()

  return (
    <div className={style.product_list}>
      {
        products.map((product) => {
          <ProductCard key={ product.id } product={ product }
      })
      }
    </div>
  )
}

export default ProductList
