import { Link } from 'react-router-dom'
import style from './header.module.css'
import { TbShoppingBagSearch, TbSearch, TbShoppingCart } from 'react-icons/tb'

export const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/">
        <div className={style.logo}>
          <h2>Spoilr</h2>
          <TbShoppingBagSearch className={style.icon} />
        </div>
      </Link>

      <div className={style.right_side}>
        <div className={style.search_input}>
          <input type="text" placeholder="Search" />
          <TbSearch />
        </div>

        <Link to="/cart">
          <div className={style.cart}>
            <TbShoppingCart className={style.cart_icon} />
            <span>0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
