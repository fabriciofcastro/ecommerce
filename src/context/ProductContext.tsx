import { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ProductContext = createContext()


const ProductProvider = () => {

  const [products, setProducts] = useState(() => [])
  const [loading, setLoading] = useState(() => false)


  const { category } = useParams()

  const getProducts = async (category) => {
    try {
      setLoading(() => true)
      let url = "https://fakestoreapi.com/products"

      if (category) {
        url += `/category/${category}/?limit=4`
      } else {
        url += "?limit=4"
      }

      const res = await fetch(url)
      if (res.ok) {
        setProducts(data)
        setLoading(() => false)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(() => false)
    }
  }

  useEffect(() => {
    getProducts(category)
  }, [category]);
  return (
    <ProductContext.Provider value={ {products, loading} }>

    </ProductContext.Provider>
  )

  export default ProductProvider

  export const useProduct = () => useContext(ProductContext)