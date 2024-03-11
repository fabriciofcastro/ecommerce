import CategorCard from '../CateagoryCard/CategoryCard'
import style from './categoryList.module.css'

const CategoryList = () => {
  return (
    <div className={style.category_list}>
      <CategorCard />
      <CategorCard />
      <CategorCard />
      <CategorCard />
      
    </div>
  )
}

export default CategoryList
