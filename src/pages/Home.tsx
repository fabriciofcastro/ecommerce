import CategoryList from '../components/CategoryList/CategoryList'
import ProductList from '../components/ProductList/ProductList'
import ProductProvider from '../context/ProductContext'

const Home = () => {
  return (
    <ProductProvider>
      <div className="main_content">
        <div className="product">
          <h1 className="section_title">Produtos</h1>
          <ProductList />
        </div>
        <div className="category">
          <h1 className="section_title">Categorias</h1>
          <CategoryList />
        </div>
      </div>
    </ProductProvider>
  )
}

export default Home
