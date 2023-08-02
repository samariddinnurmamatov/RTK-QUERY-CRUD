import { Link } from "react-router-dom"
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="flex_header containe">
          <Link className="lnk" to="/">Redux-Crud</Link>
          <div className="cate_prod">
            <Link className="lnk" to="/categories">Categories</Link>
            {/* <Link className="lnk" to="/products">Products</Link> */}
          </div>
        </div>
    </header>
  )
}

export default Header