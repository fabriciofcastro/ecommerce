import CategoryList from '../components/CategoryList/CategoryList'
import ProductList from '../components/ProductList/ProductList'

const Home = () => {
  return (
    <div className="main_content">
      <div className="product">
        <h1 className="section_title">Product</h1>
        <ProductList />
      </div>
      <div className="category">
        <h1 className="section_title">Categories</h1>
        <CategoryList />
      </div>
    </div>
  )
}

export default Home
