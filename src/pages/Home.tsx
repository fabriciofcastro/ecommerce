import CategoryList from '../components/CategoryList/CategoryList'
import ProductList from '../components/ProductList/ProductList'
import style from './home.module.css'

const Home = () => {
  return (
    <div className="main_content">
      <div className="product">
        <h1 className="section_title">Product</h1>
        <ProductList />
      </div>
      <div className="category">
        <h1 className={style.section_title}>Categories</h1>
        <CategoryList />
      </div>
    </div>
  )
}

export default Home
